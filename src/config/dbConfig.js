import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao){
    let mongoClient;

    try 
    {
        mongoClient = new MongoClient(stringConexao);
        console.log('conectado ao cluster do banco de dados ');

        await mongoClient.connect();
        console.log('conectado');

        return mongoClient;
    } 
    catch (erro)
    {
        console.error('erro ao conectar ao cluster do banco de dados:', erro);
        process.exit(1);
    }
}