import { Request, Response } from "express";
import { SignUpUC } from '../../../business/usecases/users/SignUpUseCase'
import { UserDB } from '../../../database/userDB'


export const signupEndpoint = async (req: Request, res: Response) => {
    try {
        const signupUC = new SignUpUC(new UserDB());

        const result = await signupUC.execute({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }
};
