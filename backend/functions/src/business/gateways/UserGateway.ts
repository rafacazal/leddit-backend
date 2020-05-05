import User from "../entities/user";

export interface UserGateway {
    createUser(user: User): Promise<any>
    login(email: string, password: string): Promise<string>
    changePassword(email: string): Promise<void>
}