import express from "express";
import cors from 'cors';
import { loginEndpoint } from "./user/Login"
import { signupEndpoint } from "./user/SignUp";
import { changePasswordEndpoint } from "./user/ChangePassword";
import { createPostsEndpoint } from "./post/CreatePost";
import { createCommentEndpoint } from "./comment/CreateComment";
import { getPostDetailsEndpoint } from "./post/GetPostDetails";
import { votePostEndpoint } from './vote/VotePost';

export const app = express();
app.use(cors({ origin: true }), express.json());

// user
app.post('/login', loginEndpoint);

app.post('/signup', signupEndpoint);

app.post('/password', changePasswordEndpoint);


// posts
app.post('/create/post', createPostsEndpoint);

app.post('/posts/:postId/comment', createCommentEndpoint);

app.get('/posts/:postId', getPostDetailsEndpoint);



// vote 
app.post('/:postId/vote', votePostEndpoint);


export default app;