import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDB } from './mongodb.js';
import { createAppointment } from './controllers/appointmentController.js';
import { availabilityChecker,notAvailibilityShifts } from './controllers/availabilityChecker.js';
import { Appointment } from './models/Appointment.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('src'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src' });
});
app.get('/freeSlots/:date', availabilityChecker);
app.get('/notAvailibilityShifts/:date', notAvailibilityShifts);
app.post('/createAppointment', createAppointment);

app.use((req, res) => {
  return res.status(404).sendFile(path.join(__dirname, "../src", "404.html"));
});

//Conexión a Mongo
connectToDB();

app.listen(PORT, async () => {
  const count = await Appointment.countDocuments(); // usando el model mongoose
  console.log(`🚀 Server en http://localhost:${PORT} — ${count} citas`);
});
