// server.js
import express from 'express'; // si estás usando type: "module" en package.json
import mongoose from 'mongoose';
import path from 'path';
import { db } from "./mongodb.js";
const app = express();
const PORT = process.env.PORT;

// Middleware para servir archivos estáticos (frontend)
app.use(express.static('src')); // Cambia si tu carpeta es diferente

// Ruta por defecto
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src' });
});


// Capturar rutas no encontradas
app.use((req, res) =>{
    return res.status(404).sendFile(path.join(import.meta.dirname, "../src", "404.html"));
})

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log('✅ MongoDB conectado'))
.catch(err => console.error('❌ Error al conectar Mongo:', err));

app.listen(PORT, async () => {
    const numberOfAppointments = await db.appointments.count();
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}: ${numberOfAppointments} citas procesadas`);
});
