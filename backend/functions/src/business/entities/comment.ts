export default class Comment {
    constructor(
      private id: string,
      private userId: string,
      private postId: string,
      private text: string,
      private votesQuantity: number
    ) { }

    public getUserId(): string {
      return this.userId;
    }
  
    public getPostId(): string {
      return this.postId;
    }
  
    public getId(): string {
      return this.id;
    }
  
     public getText(): string {
      return this.text;
    }

    public getVotesQuantity(): number {
      return this.votesQuantity || 0;
    }
  
  }