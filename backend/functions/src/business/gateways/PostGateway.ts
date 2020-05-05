import Post from "../entities/post";

export interface PostGateway {
    createPost(post: Post): Promise<void>
    getPostDetails(postId: string): Promise<Post>
}