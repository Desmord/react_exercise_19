import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../Redux/postRedux'
import { Navigate } from 'react-router-dom';
import { editPost } from "../../../Redux/postRedux";

import PostForm from "../PostForm/PostForm";


const EditPostForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { id } = useParams();

    const post = useSelector(state => getPostById(state, id))


    const handleSubmit = ({ title, publishedDate, shortDescription, content, author, categorie }) => {
        dispatch(editPost({
            id: post.id,
            title,
            shortDescription,
            publishedDate,
            author,
            content,
            categorie
        }))
        navigate(`/`);
    }


    if (!post) return <Navigate to="/" />
    return (
        <PostForm
            action={handleSubmit}
            actionText={`Edit post`}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content}
            categorie={post.categorie}
        />
    )
}

export default EditPostForm