import { PostGateway } from "../../gateways/PostGateway";
import Post from "../../entities/post";
import { FirebaseAdmin } from "../../../utils/firebaseAdmin";
import { BadRequestError } from "../../errors/badRequestError";

export class CreatePostUC {
    constructor(
        private postGateway: PostGateway
    ) { }

    async execute(input: CreatePostInput): Promise<any>{

        try {

            const auth = new FirebaseAdmin();

            const userId = await auth.getIdFromToken(input.author);

            const newPost = new Post(
                input.id,
                userId,
                input.title,
                input.text,
                input.commentsQuantity,
                input.votesQuantity
            );

             await this.postGateway.createPost(newPost)

        } catch (e) {
            throw new BadRequestError(e)
        }
    }
}

export interface CreatePostInput {
    author: string,
    title: string,
    text: string,
    id: string,
    commentsQuantity: number,
    votesQuantity: number
}
