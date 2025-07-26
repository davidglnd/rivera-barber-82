import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDB } from './mongodb.js';
import { createAppointment } from './controllers/appointmentController.js';
import { getFreeSlotsByMonth, notAvailibilityShifts } from './controllers/availabilityChecker.js';
import { getCountAppointments } from './controllers/appointmentController.js';
//models
import { Appointment } from './models/Appointment.js';
import { get } from 'http';

const app = express();
const PORT = process.env.PORT || 3000;

// Para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta absoluta a la carpeta /src (donde está tu frontend)
const frontendPath = path.join(__dirname, '../src');

app.use(express.static(frontendPath));
app.use(express.json());

// Rutas frontend
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: frontendPath });
});

// Rutas backend
app.get('/api/notAvailibilityShifts/:date', async (req, res) => {
  try {
    const result = await notAvailibilityShifts(req.params.date);
    res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post('/api/createAppointment',async (req, res) => {
  try {
    const result = await createAppointment(req.body);
    res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
app.get('/api/freeSlots/month/:monthYear', async (req,res) => {
  try {
    const result = await getFreeSlotsByMonth(req.params.monthYear);
    res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
app.get('/api/countAppointments', async (req, res) => {
  try {
    const result = await getCountAppointments();
    res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Página 404
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: frontendPath });
});

// Conexión a Mongo
connectToDB();

// Arrancar el server
app.listen(PORT, async () => {
  const count = await Appointment.countDocuments();
  console.log(`🚀 Server en http://localhost:${PORT}`);
});
