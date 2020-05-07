import Post from "../entities/post";

export interface PostGateway {

    createPost(post: Post): Promise<void>
    getPostDetails(postId: string): Promise<Post>
    updateCommentsQuantity( cQuantity: number, postId: string ): Promise<any>
    updateVotesQuantity( vQuantity: number, postId: string ): Promise<any>
}