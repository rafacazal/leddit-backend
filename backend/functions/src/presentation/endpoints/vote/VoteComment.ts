import { Request, Response } from "express";
import { VoteDB } from "../../../database/voteDB";
import { VoteCommentUC } from "../../../business/usecases/vote/VoteComment";
import { CommentDB } from "../../../database/commentDB";


export const voteCommentEndpoint = async (req: Request, res: Response) => {
    try {
        const voteCommentUC = new VoteCommentUC( new VoteDB(), new CommentDB());

        const result = await voteCommentUC.execute({
            token: req.headers.auth as string,
            commentId: req.params.postId,
            voteDirection: req.body.voteDirection
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }
};
