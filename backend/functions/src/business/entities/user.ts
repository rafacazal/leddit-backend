export default class User {
    constructor(
      private username: string,
      private email: string,
      private password: string
    ) { }

    public getNickName(): string {
      return this.username;
    }
  
    public getEmail(): string {
      return this.email;
    }

    public getPassword(): string {
      return this.password;
    }
  
  }