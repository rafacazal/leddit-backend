import { CommentGateway } from "../../gateways/CommentGateway";

export class GetCommentDetailsUC {
    constructor(
        private commentGateway: CommentGateway
    ) { }

    async execute(input: GetCommentDetailsInput){

        try {

            const result = await this.commentGateway.getCommentsDetails(input.commentId)

            return ({
                result
            })

        } catch (e) {
            throw new Error(e)
        }
    }
}

export interface  GetCommentDetailsInput {
    token: string,
    commentId: string
}
