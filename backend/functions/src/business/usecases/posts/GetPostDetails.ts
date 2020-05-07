import { PostGateway } from "../../gateways/PostGateway";

export class GetPostDetailsUC {
    constructor(
        private postGateway: PostGateway
    ) { }

    async execute(input: GetPostDetailsInput){

        try {

            const result = await this.postGateway.getPostDetails(input.postId)

            return ({
                result
            })

        } catch (e) {
            throw new Error(e)
        }
    }
}

export interface  GetPostDetailsInput {
    token: string,
    postId: string
}
