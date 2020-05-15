import Comment from "../business/entities/comment";
import { BaseDB } from './baseDB';
import { CommentGateway } from "../business/gateways/CommentGateway";
import { BadRequestError } from "../business/errors/badRequestError";

export class CommentDB extends BaseDB implements CommentGateway {

    private commentsCollection = 'comments';

    private usersCollection = 'users';

    public async createComment(comment: Comment): Promise<void> {
        try {

            const userId = await this.db.collection(this.usersCollection)
                .doc(comment.getUserId()).get()

            await this.db.collection(this.commentsCollection).doc().set({
                userName: userId.data()?.username,
                postId: comment.getPostId(),
                text: comment.getText(),
                votesQuantity: 0
            })

        } catch (error) {
            console.log('Error creating new post:', error);
        };
    }

    public async getCommentsDetails(commentId: string): Promise<any> {
        try {
            const result = await this.db.collection(this.commentsCollection).doc(commentId).get();
            
            return result.data()

        } catch (err) {
            throw new BadRequestError(err.message)
        }
    }
    
    public async updateVotesCommentQuantity(vQuantity: number, commentId: string): Promise<any> {
        await this.db.collection(this.commentsCollection).doc(commentId)
            .set({ votesQuantity: vQuantity }, { merge: true });
    }

}