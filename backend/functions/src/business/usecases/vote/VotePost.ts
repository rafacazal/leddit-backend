import { VoteGateway } from "../../gateways/VoteGateway";
import Vote, { VoteDirection } from "../../entities/vote";
import { FirebaseAdmin } from "../../../utils/firebaseAdmin";
import { PostGateway } from "../../gateways/PostGateway";


export class VotePostUC {
    constructor(
        private voteGateway: VoteGateway,

        private postGateway: PostGateway
    ) { }

    async execute(input: VotePostInput): Promise<VotePostOutput> {

        try {

            const auth = new FirebaseAdmin();

            const token = await auth.getIdFromToken(input.token);

            const newVotePost = new Vote(
                input.voteDirection,
                input.postId,
                token
            );

            await this.voteGateway.votePost(newVotePost)

            const postData = await this.postGateway.getPostDetails(input.postId)

            await this.postGateway.updateVotesQuantity(postData.votesQuantity +1, input.postId)

            return {
                message: "voto computado com sucesso"
            }

        } catch (e) {
            throw new Error(e)
        }
    }
}

export interface VotePostInput {
    voteDirection: VoteDirection,
    postId: string,
    token: string

}

export interface VotePostOutput {
    message: string
}