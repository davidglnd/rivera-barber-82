// server/mongodb.js
import mongoose from 'mongoose';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB', err);
    process.exit(1);
  }
};
