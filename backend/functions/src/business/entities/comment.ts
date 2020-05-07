export default class Comment {
  constructor(
    private userId: string,
    private postId: string,
    private text: string,
    public votesQuantity: number

  ) { }

  public getUserId(): string {
    return this.userId;
  }
  public getPostId(): string {
    return this.postId;
  }
  public getText(): string {
    return this.text;
  }
  public getVotesQuantity(): number {
    return this.votesQuantity || 0;
  }

}