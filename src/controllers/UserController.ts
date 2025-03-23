import { Request, Response } from "express";

export class UserController {
    createUser = (request: Request, response: Response): any => {
        const body = request.body;
        console.log(body);
        return response.status(201).json({message: "Criado com sucesso"});
    }
}