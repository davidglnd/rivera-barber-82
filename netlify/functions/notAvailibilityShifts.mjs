import { notAvailibilityShifts } from '../../server/controllers/availabilityChecker.js';
import {connectToDB} from '../../server/mongodb.js';
import { checkMongoURI } from '../../server/utils/checkMongoUri.js';

export async function handler(event) {
    checkMongoURI();
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        }
    }
    const prefix = '/api/notAvailibilityShifts/';
    let path = event.path.startsWith(prefix) ? event.path.slice(prefix.length) : '';
    console.log(path + ' notAvailibilityShifts must be a date dd-mm-yyyy');
    try{
        await connectToDB();
        const data = await notAvailibilityShifts(path);
        return{
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }catch (err){
        return{
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        }

    }
}
