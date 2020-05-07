import { Request, Response } from "express";
import { CreateCommentUC } from "../../../business/usecases/comment/CreateComment";
import { CommentDB } from "../../../database/commentDB";
import { PostDB } from "../../../database/postDB";


export const createCommentEndpoint = async (req: Request, res: Response) => {
    try {
        const createCommentUC = new CreateCommentUC(new CommentDB(), new PostDB());

        const result = await createCommentUC.execute({
            userId: req.headers.auth as string,
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
