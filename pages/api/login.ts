import type {NextApiRequest, NextApiResponse} from 'next';

import {conectarMongoDb} from '../../middlewares/conectarMongoDb';

import type {} from '../../types/RespostaPadraoMsg';

const endPointLogin = (
    req : NextApiRequest,
    res : NextApiResponse

) => {
    if(req.method === 'POST') {

        const {login, senha} = req.body;

        if(login === 'rafa@gmail.com' && senha === 'rafa1234') {

           return res.status(200).json({msg : 'Bem vindo, autenticação feita com suscesso!'});

        }

        return res.status(400).json({erro : 'Usuario ou senha não encontrado ou não cadastrado!'});

    }
    return res.status(405).json({erro : 'Metodo informado não é valido!'});
}

export default conectarMongoDb (endPointLogin);