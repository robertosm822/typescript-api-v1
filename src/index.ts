import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';



const userController = new UserController();

const server = express();

server.use(express.json());

server.get('/', (request: Request, response: Response):any =>  {
    return response.status(200).json({ message: 'DioBank teste' });
});

server.post('/users', userController.createUser);

server.listen(5001, () =>{ console.log("Server on update in port 5001")});