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
        
           const result = await this.db.collection(this.postsCollection).doc(post.getId()).set({
                author: userId.data()?.nickname,
                title: post.getTitle(),
                text: post.getText(),
                commentsQuantity: 0,
                votesQuantity: 0
        })

            return result

        } catch (error) {
            console.log('Error creating new post:', error);
        };
    }

    public async getPostDetails(postId: string): Promise<Post> {

        try {
            const result = await this.db.collection(this.postsCollection).doc(postId).get();
            
            return result.data()?.map( ( doc: any ) => {
                let posts = new Post(
                  doc.data().id,
                  doc.data().authorName,
                  doc.data().text,
                  doc.data().title,
                  doc.data().commentsQuantity,
                  doc.data().votesQuantity
                )
          
                return posts
        })
        } catch (err) {
            throw new BadRequestError(err.message)
        }
}


    public async updateCommentsQuantity(cQuantity: number, postId: string): Promise<any> {
        await this.db.collection(this.postsCollection).doc(postId)
            .set({ commentsQuantity: cQuantity }, { merge: true });
    }

    
    public async getAllPosts(): Promise<Post[]> {
        try {
            const result = await this.db.collection(this.postsCollection).get();
            
            return result.docs.map( ( doc ) => {
                let posts = new Post(
                  doc.data().id,
                  doc.data().authorName,
                  doc.data().text,
                  doc.data().title,
                  doc.data().commentsQuantity,
                  doc.data().votesQuantity
                )
          
                return posts
        })
        } catch (err) {
            throw new BadRequestError(err.message)
        }
    }

    public async updateVotesQuantity(vQuantity: number, postId: string): Promise<any> {
        await this.db.collection(this.postsCollection).doc(postId)
            .set({ votesQuantity: vQuantity }, { merge: true });
    }

}
