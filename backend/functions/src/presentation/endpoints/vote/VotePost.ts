import { Request, Response } from "express";
import { VotePostUC } from "../../../business/usecases/vote/VotePost";
import { VoteDB } from "../../../database/voteDB";
import { PostDB } from "../../../database/postDB";


export const votePostEndpoint = async (req: Request, res: Response) => {
    try {
        const votePostUC = new VotePostUC(new VoteDB(), new PostDB());

        const result = await votePostUC.execute({
            token: req.headers.auth as string,
            postId: req.params.postId,
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
