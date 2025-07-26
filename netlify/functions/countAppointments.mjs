import { getCountAppointments } from '../../server/controllers/appointmentController.js';
import { connectToDB } from '../../server/mongodb.js';
import { checkMongoURI } from '../../server/utils/checkMongoUri.js';

export async function handler() {
    checkMongoURI();
    try {
        await connectToDB();
        const result = await getCountAppointments();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        }
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: err.message }),
        };
    }
}