import { UserGateway } from "../../gateways/UserGateway";
import User from "../../entities/user";

export class SignUpUC {
  constructor(
    private userGateway: UserGateway
  ) {}

  async execute(input: SignUpInput) {
    
   try{
    const newUser = new User(
      input.username,
      input.email,
      input.password
    );

    const result = await this.userGateway.createUser(newUser)

    return {
      result
    }

    } catch(e){
        throw new Error(e)
    }
  }
}

export interface SignUpInput {
  username: string,
  email: string,
  password: string
}