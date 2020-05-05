import { Request, Response } from "express";
import { GetPostDetailsUC } from "../../../business/usecases/posts/GetPostDetails";
import { PostDB } from "../../../database/postDB";


export const getPostDetailsEndpoint = async (req: Request, res: Response) => {
    try {
        const getPostDetailsUC = new GetPostDetailsUC(new PostDB());

        const result = await getPostDetailsUC.execute({
            token: req.headers.auth as string,
            postId: req.params.postId,
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }

};
