import { Request, Response } from "express";

const mockDb = [
    {
        name: "Joana",
        email: "joana.dark@dio.com"
    }
];

export class UserController {
    createUser = (request: Request, response: Response): any => {
        const user = request.body;
        mockDb.push(user);
        console.log(mockDb);
        return response.status(201).json({message: "Criado com sucesso", data: user});
    }
}