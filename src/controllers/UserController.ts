import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {
    createUser = (request: Request, response: Response): any => {
        const userService = new UserService();

        const user = request.body;
        userService.createUser(user.name, user.email);

        return response.status(201).json({message: "Criado com sucesso", data: user});
    }
}