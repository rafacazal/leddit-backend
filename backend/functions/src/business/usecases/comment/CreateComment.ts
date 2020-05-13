import { CommentGateway } from "../../gateways/CommentGateway";
import Comment from "../../entities/comment";
import { BadRequestError } from "../../errors/badRequestError";
import { FirebaseAdmin } from "../../../utils/firebaseAdmin";

export class CreateCommentUC {
    constructor(
        private commentGateway: CommentGateway
    ) { }

    async execute(input: CreateCommentInput): Promise<CreateCommentOutput> {

        try {

            const auth = new FirebaseAdmin();

            const userId = await auth.getIdFromToken(input.userId);

            const newComment = new Comment(
                userId,
                input.postId,
                input.text,
                input.id,
                input.votesQuantity
            );

           await this.commentGateway.createComment(newComment)

           return {
                message: "comentario criado com sucesso"
           }

        } catch (e) {
            throw new BadRequestError(e)

        }
    }
}

export interface CreateCommentInput {
    userId: string,
    postId: string,
    text: string,
    id: string,
    votesQuantity: number 
}

export interface CreateCommentOutput {
    message: string
}