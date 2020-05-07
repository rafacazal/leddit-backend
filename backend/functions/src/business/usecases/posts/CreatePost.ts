import { PostGateway } from "../../gateways/PostGateway";
import Post from "../../entities/post";
import { FirebaseAdmin } from "../../../utils/firebaseAdmin";

export class CreatePostUC {
    constructor(
        private postGateway: PostGateway
    ) { }

    async execute(input: CreatePostInput): Promise<CreatePostOutput> {

        try {

            const auth = new FirebaseAdmin();

            const userId = await auth.getIdFromToken(input.author);

            const newPost = new Post(
                userId,
                input.title,
                input.text,
                input.commentsQuantity,
                input.votesQuantity
            );

            await this.postGateway.createPost(newPost)

            return {
                message: "post criado com sucesso"
            }

        } catch (e) {
            throw new Error(e)
        }
    }
}

export interface CreatePostInput {
    author: string,
    title: string,
    text: string,
    commentsQuantity: number,
    votesQuantity: number
}

export interface CreatePostOutput {
    message: string
}