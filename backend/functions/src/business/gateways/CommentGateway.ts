import Comment  from "../entities/comment";

export interface CommentGateway {
    createComment(comment: Comment): Promise<any> 
    getCommentsDetails(commentId: string): Promise<any>
    updateVotesQuantity( vQuantity: number, commentId: string ): Promise<any>
}