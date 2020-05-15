import Post from "../entities/post";

export interface PostGateway {
    createPost(post: Post): Promise<any>
    getPostDetails(postId: string): Promise<any>
    updateCommentsQuantity( cQuantity: number, postId: string ): Promise<any>
    updateVotesQuantity( vQuantity: number, postId: string ): Promise<any>
    getAllPosts(): Promise<Post[]>
}