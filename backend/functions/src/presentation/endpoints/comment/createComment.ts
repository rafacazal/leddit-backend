import { Request, Response } from "express";
import { CreateCommentUC } from "../../../business/usecases/comment/CreateComment";
import { CommentDB } from "../../../database/commentDB";


export const createCommentEndpoint = async (req: Request, res: Response) => {
    try {
        const createCommentUC = new CreateCommentUC(new CommentDB());

        const result = await createCommentUC.execute({
            userId: req.headers.auth as string,
            id: req.body.id,
            postId: req.params.postId,
            text: req.body.text,
            votesQuantity: req.body.votesQuantity
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }
};
