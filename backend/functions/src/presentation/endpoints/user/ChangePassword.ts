import { Request, Response } from "express";
import { ChangePasswordUC } from "../../../business/usecases/users/ChangePasswordUseCase";
import { UserDB } from "../../../database/userDB";


export const changePasswordEndpoint = async (req: Request, res: Response) => {
    try {
        const changePassUC = new ChangePasswordUC(new UserDB());

        await changePassUC.execute({ email: req.body.email });

        res.status(200).send();
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        });
    }
};
