import express, { Request, Response } from 'express';
import { router } from './routes'

const server = express();

server.use(express.json());
server.use(router);

server.get('/', (request: Request, response: Response):any =>  {
    return response.status(200).json({ message: 'DioBank teste' });
});



server.listen(5001, () =>{ console.log("Server on update in port 5001")});