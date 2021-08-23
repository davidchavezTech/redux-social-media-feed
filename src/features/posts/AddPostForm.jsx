import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded  } from './postsSlice'; 

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value)

    const onSavepostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
        }
    }
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea name="postContent"
                id="postContent"
                value={content}
                onChange={onContentChanged} />
                <button type="button" onClick={onSavepostClicked}>Save Post</button>
        </form>
        </section>
    )
}