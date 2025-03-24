import { makeMockRequest } from '../../__mocks__/mockRequest.mock';
import { makeMockResponse } from '../../__mocks__/mockResponse.mock';

import { UserService } from './UserService';

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        const mockDatabase = [
            { name: 'Joana', email: 'joana@dio.com' }
        ];
        userService = new UserService(mockDatabase); // Reinicia o serviço antes de cada teste
    });

    it('should throw an error if email is invalid', () => {
        expect(() => userService.createUser('Test User', 'invalid-email')).toThrow('Invalid email format');
    });

    it('should create a user if email is valid', () => {
        userService.createUser('Test User', 'test@test.com');
        const users = userService.getAllUsers();
        expect(users.length).toBe(2); // Agora há 2 usuários no banco de dados
        expect(users[users.length - 1]).toEqual({ name: 'Test User', email: 'test@test.com' });
    });

    it('should delete user successfully', () => {
        userService.createUser('Test User', 'test@test.com'); // Adiciona um novo usuário
        userService.deleteUser(1); // Exclui o usuário com ID 1

        const users = userService.getAllUsers();
        expect(users.length).toBe(1); // Agora há apenas 1 usuário no banco de dados
        expect(users).toEqual([{ name: 'Joana', email: 'joana@dio.com' }]); // O usuário restante é Joana
    });

    it('should throw an error if user is not found', () => {
        expect(() => userService.deleteUser(999)).toThrow('User not found'); // Tentamos excluir um ID inválido
    });
});