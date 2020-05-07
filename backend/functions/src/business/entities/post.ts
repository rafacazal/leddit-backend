export default class Post {
  constructor(
    private authorName: string,
    private title: string,
    private text: string,
    public commentsQuantity: number,
    public votesQuantity: number
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

  public getCommentsQuantity(): number {
    return this.commentsQuantity || 0;
  }

  public getVotesQuantity(): number {
    return this.votesQuantity || 0;
  }


}