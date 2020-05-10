import Post from "../business/entities/post";
import { BaseDB } from './baseDB';
import { PostGateway } from "../business/gateways/PostGateway";
import { BadRequestError } from "../business/errors/badRequestError";


export class PostDB extends BaseDB implements PostGateway {

    private postsCollection = 'posts';

    public async createPost(post: Post): Promise<any> {
        try {

            const userId = await this.db.collection('users')
                .doc(post.getAuthorName()).get()

            await this.db.collection(this.postsCollection).doc().set({
                author: userId.data()?.nickname,
                title: post.getTitle(),
                text: post.getText(),
                commentsQuantity: 0,
                votesQuantity: 0
            })

        } catch (error) {
            console.log('Error creating new post:', error);
        };
    }

    public async getPostDetails(postId: string): Promise<any> {

        try {
            const postDetails = await this.db.collection(this.postsCollection).doc(postId).get();
            return postDetails.data()

        } catch (err) {
            throw new BadRequestError(err.message)
        }
    }

    public async updateCommentsQuantity(cQuantity: number, postId: string): Promise<any> {
        await this.db.collection(this.postsCollection).doc(postId)
            .set({ commentsQuantity: cQuantity }, { merge: true });
    }

    
    public async updateVotesQuantity(vQuantity: number, postId: string): Promise<any> {
        await this.db.collection(this.postsCollection).doc(postId)
            .set({ votesQuantity: vQuantity }, { merge: true });
    }

}
