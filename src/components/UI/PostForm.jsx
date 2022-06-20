import React from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form onSubmit={addNewPost}>
            <MyInput
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title}
                type="text"
                placeholder={'Заголовок поста'}
            />
            <MyInput
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body}
                type="text"
                placeholder={'Опис поста'}
            />
            <MyButton>Створити пост</MyButton>
        </form>
    );
};

export default PostForm;