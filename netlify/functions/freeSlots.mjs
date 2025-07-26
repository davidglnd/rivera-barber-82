import { getFreeSlotsByMonth } from '../../server/controllers/availabilityChecker.js';
import {connectToDB} from '../../server/mongodb.js';
import { checkMongoURI } from '../../server/utils/checkMongoUri.js';
export async function handler(event) {
  checkMongoURI();
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const prefix = '/api/freeSlots/';
  let path = event.path.startsWith(prefix) ? event.path.slice(prefix.length) : '';

  const [action, date] = path.split('/');

  if (action !== 'month' || !date) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Parámetros inválidos' }),
    };
  }

  try {
    await connectToDB();
    const data = await getFreeSlotsByMonth(date);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
