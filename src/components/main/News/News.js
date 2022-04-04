import "../../../UI/Posts/Post.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PostsList from "../../../UI/Posts/PostsList";
import {fetchAllPosts} from "../../../redux/NewsPageRedux/newsPageFetch";

function News() {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.news.posts)

    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [dispatch])

    return (
        <section className="news">
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
