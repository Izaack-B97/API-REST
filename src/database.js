import MongoClient from 'mongodb';

export async function connect(){
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('node-restapi');
        console.log('DB IS CONNECTED');
        return db; 
    } catch (error) {
        console.log("Error al conectarse a la bd: " + error);    
    }
}

