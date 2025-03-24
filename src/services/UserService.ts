export interface User {
    name: string;
    email: string;
}

const db: User[] = [
    { name: "Joana", email: "joana@dio.com" }
];
export class UserService {
    db: User[];

    constructor(database: User[] = db) { 
        this.db = database;
    }

    createUser = (name: string, email: string) => {
        if (!email.includes('@')) {
            throw new Error('Invalid email format');
        }

        const user = { name, email };
        this.db.push(user);
        console.log('DB atualizado', this.db);
    };

    deleteUser = (id: number) => {
        if (id < 0 || id >= this.db.length) {
            throw new Error('User not found');
        }
    
        this.db.splice(id, 1); // Remove o usuário com o ID especificado
        console.log('DB atualizado após exclusão', this.db);
    };

    getAllUsers = () => {
        return this.db;
    };
}