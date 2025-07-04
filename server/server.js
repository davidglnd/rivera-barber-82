// server.js
import express from 'express'; // si estás usando type: "module" en package.json
import mongoose from 'mongoose';
import path from 'path';
import { db } from "./mongodb.js";
const app = express();
const PORT = process.env.PORT;

// Middleware para servir archivos estáticos (frontend)
app.use(express.static('src')); 
//  Middleware necesario para parsear JSON
app.use(express.json());
// Ruta por defecto
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src' });
});

app.post('/createAppointment', async (req, res) => {
  const appointment = req.body;
  console.log(req.body);
  await db.appointments.create(appointment);
  res.send(`${req.body.date}`);
})
// Capturar rutas no encontradas
app.use((req, res) =>{
  return res.status(404).sendFile(path.join(import.meta.dirname, "../src", "404.html"));
})

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ Error Mongo:', err));

app.listen(PORT, async () => {
    const numberOfAppointments = await db.appointments.count();
    console.log(`🚀 Server running on http://localhost:${PORT} : ${numberOfAppointments} citas procesadas`);
});
