export default class User {
    constructor(
      private nickname: string,
      private email: string,
      private password: string
    ) { }

    public getNickName(): string {
      return this.nickname;
    }
  
    public getEmail(): string {
      return this.email;
    }

    public getPassword(): string {
      return this.password;
    }
  
    public setNickName(nickname: string): void {
      this.nickname = nickname;
    }
  
  }