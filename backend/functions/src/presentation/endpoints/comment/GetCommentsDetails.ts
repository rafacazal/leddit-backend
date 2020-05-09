import { Request, Response } from "express";
import { GetCommentDetailsUC } from "../../../business/usecases/comment/GetCommentDetails";
import { CommentDB } from "../../../database/commentDB";


export const getCommentsDetailsEndpoint = async (req: Request, res: Response) => {
    try {
        const getCommentDetailsUC = new GetCommentDetailsUC( new CommentDB() );

        const result = await getCommentDetailsUC.execute({
            token: req.headers.auth as string,
            commentId: req.params.commentId,
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }

};
