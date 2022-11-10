import { useDispatch } from "react-redux";
import { addPost } from '../../../Redux/postRedux';
import { useNavigate } from "react-router-dom";

import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleSubmit = ({ title, publishedDate, shortDescription, content, author }) => {

        dispatch(addPost({
            title: title,
            shortDescription: shortDescription,
            content: content,
            publishedDate: publishedDate,
            author: author
        }));
        navigate(`/`);
    }

    return (
        <PostForm action={handleSubmit} actionText={`Add post`} />
    )
}

export default AddPostForm