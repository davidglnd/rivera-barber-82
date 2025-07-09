import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDB } from './mongodb.js';
import { createAppointment } from './controllers/appointmentController.js';
import { getFreeSlotsByMonth, notAvailibilityShifts } from './controllers/availabilityChecker.js';
import { Appointment } from './models/Appointment.js';

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
app.get('/notAvailibilityShifts/:date', notAvailibilityShifts);
app.post('/createAppointment', createAppointment);
app.get('/freeSlots/month/:monthYear', getFreeSlotsByMonth);

// Página 404
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: frontendPath });
});

// Conexión a Mongo
connectToDB();

// Arrancar el server
app.listen(PORT, async () => {
  const count = await Appointment.countDocuments();
  console.log(`🚀 Server en http://localhost:${PORT} — ${count} citas`);
});
