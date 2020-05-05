export default class Vote {
    constructor(
        private postId: string,
        private userId: string,
        public voteType: VoteDirection,
        public voteLocated: VoteLocated
    ) { }

    public getPostId(): string {
        return this.postId;
    }

    public getUserId(): string {
        return this.userId;
    }

    public getVote(): VoteDirection {
        return this.voteType;
    }


    public static setVoteType(voteType: string): VoteDirection {
        switch (voteType) {
            case "positive":
                return VoteDirection.POSITIVE;
            case "negative":
                return VoteDirection.NEGATIVE;
            default:
                throw new Error("invalid vote type");
        }
    }

    
    public static setVoteLocated(voteLocated: string): VoteLocated {
        switch (voteLocated) {
            case "comment":
                return VoteLocated.COMMENT;
            case "post":
                return VoteLocated.POST;
            default:
                throw new Error("invalid vote type");
        }
    }
}


export enum VoteDirection {
    POSITIVE = 1,
    NEGATIVE = -1
}


export enum VoteLocated {
    COMMENT = "comment",
    POST = "post"
}