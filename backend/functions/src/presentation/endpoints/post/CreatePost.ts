import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecases/posts/CreatePost";
import { PostDB } from "../../../database/postDB";


export const createPostsEndpoint = async (req: Request, res: Response) => {
    try {
        const createPostUC = new CreatePostUC(new PostDB());

        const result = await createPostUC.execute({
            author: req.headers.auth as string,
            title: req.body.title,
            text: req.body.text,
            id: req.body.id,
            commentsQuantity: req.body.commentsQuantity,
            votesQuantity: req.body.votesQuantity 
        });
        console.log(result)
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }

};
