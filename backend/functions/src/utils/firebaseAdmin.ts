import firebaseAdmin from 'firebase-admin';

export class FirebaseAdmin {
    public async verifyToken(token: string): Promise <void>{
        
        await firebaseAdmin.auth().verifyIdToken( token ) 
    }

    public async getIdFromToken(token: string): Promise<string>{

        const result = await firebaseAdmin.auth().verifyIdToken( token, true )
        
        const authorId = result.uid

        return authorId
    }
}