export default class Vote {
    constructor(
        public voteType: VoteDirection,
        private userId: string,
        private postId?: string,
        private commentId?: string
    ) { }

    public getPostId(): string  | undefined {
        return this.postId;
    }

    public getUserId(): string{
        return this.userId;
    }

    public getCommentId(): string | undefined{
        return this.commentId;
    }

    public getVoteType(): VoteDirection {
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
}


export enum VoteDirection {
    POSITIVE = 1,
    NEGATIVE = -1
}
