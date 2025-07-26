import { createAppointment } from '../../server/controllers/appointmentController.js';
import { connectToDB } from '../../server/mongodb.js';
import { checkMongoURI } from '../../server/utils/checkMongoUri.js';
export async function handler(event) {
  checkMongoURI();
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    await connectToDB();
    const data = JSON.parse(event.body);
    const result = await createAppointment(data);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message }),
    };
  }
}