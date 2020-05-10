import Vote from "../entities/vote";

export interface VoteGateway {
    votePost(vote: Vote): Promise<any> 
    voteComment(vote: Vote): Promise<any>
}