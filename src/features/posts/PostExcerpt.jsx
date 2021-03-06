import React from "react"
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButtons';
export const PostExcerpt = ({ post }) => {
    return (
        <article className="post-excerpt" key={post.id} id={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0,100)}</p>
            <ReactionButtons post={post} />
            <PostAuthor userId={post.user} /><br />
            <TimeAgo timestamp={post.date} /><br />
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}