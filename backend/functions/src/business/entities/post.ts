export default class Post {
    constructor(
      private authorName: string,
      private title: string,
      private text: string,
      private commentsQuantity: string
    ) { }

    public getTitle(): string {
      return this.title;
    }

    public getAuthorName(): string {
      return this.authorName;
    }

    public getText(): string {
      return this.text;
    }

    public getCommentsQuantity(): string {
      return this.commentsQuantity;
    }
  
  }