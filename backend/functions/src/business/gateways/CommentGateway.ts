import Comment  from "../entities/comment";

export interface CommentGateway {
    createComment(comment: Comment): Promise<void>
}