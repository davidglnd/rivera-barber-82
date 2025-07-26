export async function checkMongoURI() {
    if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI no está definida');
    }
}