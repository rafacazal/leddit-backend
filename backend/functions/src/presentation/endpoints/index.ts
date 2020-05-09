import express from "express";
import cors from 'cors';
import { loginEndpoint } from "./user/Login"
import { signupEndpoint } from "./user/SignUp";
import { changePasswordEndpoint } from "./user/ChangePassword";
import { createPostsEndpoint } from "./post/CreatePost";
import { createCommentEndpoint } from "./comment/CreateComment";
import { getPostDetailsEndpoint } from "./post/GetPostDetails";
import { votePostEndpoint } from './vote/VotePost';
import { getCommentsDetailsEndpoint } from "./comment/GetCommentsDetails";
import { voteCommentEndpoint } from "./vote/VoteComment";

export const app = express();
app.use(cors({ origin: true }), express.json());

// user
app.post('/login', loginEndpoint);

app.post('/signup', signupEndpoint);

app.post('/password', changePasswordEndpoint);


// posts
app.post('/create/post', createPostsEndpoint);

app.get('/posts/:postId', getPostDetailsEndpoint);


// comments
app.post('/posts/:postId/comment', createCommentEndpoint);

app.get('/comments/:commentId', getCommentsDetailsEndpoint);


// vote 
app.post('/:postId/vote', votePostEndpoint);

app.post('/:commentId/vote', voteCommentEndpoint);

export default app;