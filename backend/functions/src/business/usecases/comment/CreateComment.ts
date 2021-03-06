import { CommentGateway } from "../../gateways/CommentGateway";
import Comment from "../../entities/comment";
import { BadRequestError } from "../../errors/badRequestError";
import { FirebaseAdmin } from "../../../utils/firebaseAdmin";
import { PostGateway } from "../../gateways/PostGateway";

export class CreateCommentUC {
    constructor(
        private commentGateway: CommentGateway,

        private postGateway: PostGateway

    ) { }

    async execute(input: CreateCommentInput): Promise<CreateCommentOutput> {

        try {

            const auth = new FirebaseAdmin();

            const userId = await auth.getIdFromToken(input.userId);

            const newComment = new Comment(
                userId,
                input.postId,
                input.text
            );

           await this.commentGateway.createComment(newComment)
        
           const postData = await this.postGateway.getPostDetails(input.postId)

           await this.postGateway.updateCommentsQuantity(postData.commentsQuantity +1, input.postId)

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
    text: string
}

export interface CreateCommentOutput {
    message: string
}