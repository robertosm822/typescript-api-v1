import { makeMockRequest } from '../../__mocks__/mockRequest.mock';
import { makeMockResponse } from '../../__mocks__/mockResponse.mock';
import { UserController } from './UserController';
import { UserService } from '../services/UserService';

describe('UserController', () => {
    const mockUserService = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn() // Adicionamos deleteUser aqui
    };

    const userController = new UserController(mockUserService as any);

    it('should return 400 if ID is invalid', () => {
        const mockRequest = makeMockRequest({ params: { id: 'invalid' } });
        const mockResponse = makeMockResponse();

        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toEqual({ error: 'Invalid ID' });
    });

    it('should return 404 if user is not found', () => {
        mockUserService.deleteUser = jest.fn().mockImplementation(() => {
            throw new Error('User not found');
        });

        const mockRequest = makeMockRequest({ params: { id: '999' } });
        const mockResponse = makeMockResponse();

        userController.deleteUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(404);
        expect(mockResponse.state.json).toEqual({ error: 'User not found' });
    });

    it('should delete user successfully', () => {
        const mockRequest = makeMockRequest({ params: { id: '0' } });
        const mockResponse = makeMockResponse();
    
        // Configuramos o mock para simular a exclusão bem-sucedida
        mockUserService.deleteUser = jest.fn().mockImplementation(() => {
            // Não fazemos nada aqui, pois estamos simulando uma exclusão bem-sucedida
        });
    
        userController.deleteUser(mockRequest, mockResponse);
    
        expect(mockUserService.deleteUser).toHaveBeenCalledWith(0);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toEqual({ message: 'User deleted successfully' });
    });
});