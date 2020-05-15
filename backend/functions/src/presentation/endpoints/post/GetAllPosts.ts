import { Request, Response } from "express";
import { PostDB } from "../../../database/postDB";
import { GetAllPostsUC } from "../../../business/usecases/posts/GetAllPosts";


export const getAllPostsEndpoint = async (req: Request, res: Response) => {
    try {
        const getAllPostsUC = new GetAllPostsUC( new PostDB() );

        const result = await getAllPostsUC.execute({
            token: req.headers.auth as string
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
