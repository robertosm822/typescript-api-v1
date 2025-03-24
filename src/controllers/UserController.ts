import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { UserService } from '../services/UserService';


export class UserController {
    private userService: UserService;

    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    getAllUsers = (req: Request, res: Response): any => {
        const users = this.userService.getAllUsers();
        return res.status(200).json(users);
    };

    createUser = (req: Request, res: Response): any => {
        const { name, email } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        this.userService.createUser(name, email);
        return res.status(201).json({ message: 'User created successfully' });
    };

    deleteUser = (req: Request, res: Response): any => {
        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        try {
            this.userService.deleteUser(Number(id));
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(404).json({ error: 'User not found' });
        }
    };
}