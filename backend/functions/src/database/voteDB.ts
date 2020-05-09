import { BaseDB } from './baseDB';
import { VoteGateway } from "../business/gateways/VoteGateway";
import Vote from '../business/entities/vote';

export class VoteDB extends BaseDB implements VoteGateway {

    private voteCommentsCollection = 'voteComments';

    private votePostsCollection = 'votePosts';


    public async votePost(vote: Vote): Promise<any> {
        try {

            await this.db.collection(this.votePostsCollection).doc().set({
                voteDirection: vote.getVoteType()
            })

        } catch (error) {
            console.log('Error creating new post:', error);
        };
    }


    public async voteComment(vote: Vote): Promise<any> {
        try {

            await this.db.collection(this.voteCommentsCollection).doc().set({
                voteDirection: vote.getVoteType()
            })

        } catch (error) {
            console.log('Error creating new comment:', error);
        };
    }


}
