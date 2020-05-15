import { PostGateway } from "../../gateways/PostGateway";

export class GetAllPostsUC {
    constructor(
        private postGateway: PostGateway
    ) { }

    async execute(input: GetAllPostsInput){

        try {

            const result = await this.postGateway.getAllPosts()

            return ({
                result
            })

        } catch (e) {
            throw new Error(e)
        }
    }
}

export interface  GetAllPostsInput {
    token: string
}
