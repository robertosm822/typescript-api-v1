const mockDb = [
    {
        name: "Joana",
        email: "joana.dark@dio.com"
    }
];

export class UserService {
    createUser = (name: string, email: string) => {
        const user = {
            name: name, 
            email: email
        };
        mockDb.push(user);
        console.log(mockDb);
    }

    getAllUsers = () => {
        return mockDb;
    }
}