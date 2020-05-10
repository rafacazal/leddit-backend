import Comment  from "../entities/comment";

export interface CommentGateway {
    createComment(comment: Comment): Promise<any> 
    getCommentsDetails(commentId: string): Promise<any>
    updateVotesCommentQuantity( vQuantity: number, commentId: string ): Promise<any>
}