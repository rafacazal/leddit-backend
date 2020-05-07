import Comment from "../business/entities/comment";
import { BaseDB } from './baseDB';
import { CommentGateway } from "../business/gateways/CommentGateway";



export class CommentDB extends BaseDB implements CommentGateway {

    private commentsCollection = 'comments';

    private usersCollection = 'users';

    public async createComment(comment: Comment): Promise<void> {
        try {

            const userId = await this.db.collection(this.usersCollection)
                .doc(comment.getUserId()).get()

            await this.db.collection(this.commentsCollection).doc().set({
                userName: userId.data()?.nickname,
                text: comment.getText(),
                votesQuantity: 0
            })

        } catch (error) {
            console.log('Error creating new post:', error);
        };
    }

}
