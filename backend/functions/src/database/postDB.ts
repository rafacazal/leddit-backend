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


            const comments =  await this.db.collection('comments').where("user_id", "==", userId.data()).get()

            const commentsQuantity = comments.size

            await this.db.collection(this.postsCollection).doc().set({
                author: userId.data()?.nickname,
                title: post.getTitle(),
                text: post.getText(),
                commentsQuantity      
            }) 

        } catch (error) {
            console.log('Error creating new post:', error);
        };
    }

    public async getPostDetails(postId: string): Promise<any> {

        try {

            const postDetails = this.db.collection(this.postsCollection).where("id", "==", postId);

            return postDetails

        } catch (err) {
            throw new BadRequestError(err.message)
        }

    }


}
