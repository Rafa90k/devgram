import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import  mongoose  from 'mongoose';



export const conectarMongoDb = (hanler : NextApiHandler) =>
  async (req : NextApiRequest, res : NextApiResponse) => {

    if (mongoose.connections[0].readyState){

      return hanler (req, res);
    }

    const {DB_CONEXAO_STRING} = process.env;

    if(!DB_CONEXAO_STRING){

      return res.status(500).json({erro : 'ENV de conexão ao banco de dados não informado!'});
    }
   
    mongoose.connection.on('connected', () => console.log('Banco de de dados conectado!'));
    mongoose.connection.on('error', error => console.log(`Erro ao se conectar ao banco de dados: ${error}`));
    
    await mongoose.connect(DB_CONEXAO_STRING);

    return hanler(req, res);
 
 }