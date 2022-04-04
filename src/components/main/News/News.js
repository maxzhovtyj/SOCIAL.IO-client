import "../../../UI/Posts/Post.module.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useContext, useEffect, useState} from "react";
import PostsList from "../../../UI/Posts/PostsList";
import {fetchAllPosts, fetchNewUserPost} from "../../../redux/NewsPageRedux/newsPageFetch";
import classes from "../Profile/Profile.module.css";
import TextArea from "../../../UI/TextArea/TetxArea";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {AuthContext} from "../../../context/AuthContext";

function News() {
    const [newPostTextAreaValue, setNewPostTextAreaValue] = useState()
    const auth = useContext(AuthContext)
    const dispatch = useDispatch()

    const addNewPost = useCallback(async () => {
        let newPost = {
            authorId: auth.userId,
            authorName: auth.userInfo?.nameSurname,
            text: newPostTextAreaValue,
            likes: 0
        }
        await dispatch(fetchNewUserPost(newPost))
        setNewPostTextAreaValue('')
    }, [auth.userId, auth.userInfo?.nameSurname, dispatch, newPostTextAreaValue])

    const allPosts = useSelector(state => state.news.posts)

    const newPostHandler = (event) => {
        setNewPostTextAreaValue(event.target.value)
    }

    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [auth.userId, auth.userInfo, dispatch, addNewPost])
    return (
        <section className="news">
            <div className={classes.inputNewPost}>
                <TextArea value={newPostTextAreaValue} onChange={newPostHandler}/>
                <Button onClick={addNewPost} style={{marginTop: ".5rem"}}
                        endIcon={<SendIcon/>}>Post</Button>
            </div>
            <div className="news__wrapper">
                {
                    allPosts.length !== 0
                        ? <PostsList postsList={allPosts}/>
                        : "There are no posts yet"
                }
            </div>
        </section>
    );
}

export default News;
