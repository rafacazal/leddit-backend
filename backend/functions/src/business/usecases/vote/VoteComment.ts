import { VoteGateway } from "../../gateways/VoteGateway";
import Vote, { VoteDirection } from "../../entities/vote";
import { FirebaseAdmin } from "../../../utils/firebaseAdmin";
import { CommentGateway } from "../../gateways/CommentGateway";


export class VoteCommentUC {
    constructor(
        private voteGateway: VoteGateway,

        private commentGateway: CommentGateway
    ) { }

    async execute(input: VoteCommentInput): Promise<VoteCommentOutput> {

        try {

            const auth = new FirebaseAdmin();

            const token = await auth.getIdFromToken(input.token);

            const newVoteComment = new Vote(
                input.voteDirection,
                input.commentId,
                token
            );

            await this.voteGateway.voteComment(newVoteComment)

            const commentData = await this.commentGateway.getCommentsDetails(input.commentId)

            await this.commentGateway.updateVotesQuantity( commentData.votesQuantity , input.commentId)

            return {
                message: "voto computado com sucesso"
            }

        } catch (e) {
            throw new Error(e)
        }
    }
}

export interface VoteCommentInput {
    voteDirection: VoteDirection,
    commentId: string,
    token: string

}

export interface VoteCommentOutput {
    message: string
}