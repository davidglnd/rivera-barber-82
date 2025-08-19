import axios from 'https://cdn.skypack.dev/axios';
export async function searchAppointments(data) {
    if(data.phone === '' && data.email === ''){
        return console.log('Error: No hay datos para buscar');
    }else if(data.phone !== '' && data.email === ''){
        return await axios.get(`/api/searchByPhone/${data.phone}`); 
    }else if(data.phone === '' && data.email !== ''){
        return await axios.get(`/api/searchByEmail/${data.email}`); 
    }else if(data.phone !== '' && data.email !== ''){
        return await axios.get(`/api/searchByPhone/${data.phone}`); 
    }
    
}