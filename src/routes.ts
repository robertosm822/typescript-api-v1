import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);

export { router };