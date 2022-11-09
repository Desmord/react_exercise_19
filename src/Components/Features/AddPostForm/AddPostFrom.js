import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from '../../../Redux/postRedux';
import { useNavigate } from "react-router-dom";

import styles from './AddPostForm.module.scss';

const AddPostForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [title, setTitle] = useState(``);
    const [author, setAuthor] = useState(``);
    const [published, setPublished] = useState(``);
    const [shortDescription, setShortDescription] = useState(``);
    const [mainContent, setMainContent] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({
            title: title,
            shortDescription: shortDescription,
            content: mainContent,
            publishedDate: published,
            author: author
        }));
        navigate(`/`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group d-flex flex-column">
                <label className={`p-2`} >Title</label>
                <input className={`form-control`} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            </div>
            <div className="form-group d-flex flex-column">
                <label className={`p-2`} >Author</label>
                <input className={`form-control`} value={author} onChange={e => setAuthor(e.target.value)} type="text" />
            </div>
            <div className="form-group d-flex flex-column">
                <label className={`p-2`} >Published</label>
                <input className={`form-control`} value={published} onChange={e => setPublished(e.target.value)} type="text" />
            </div>
            <div className="form-group d-flex flex-column">
                <label className={`p-2`} >Short description</label>
                <textarea className={`form-control ${styles.textArea}`} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </div>
            <div className="form-group d-flex flex-column">
                <label className={`p-2`} >Main content</label>
                <textarea className={`form-control ${styles.textArea}`} value={mainContent} onChange={e => setMainContent(e.target.value)} />
            </div>
            <button className={`btn btn-primary mt-3`}>Add post</button>
        </form>
    )
}

export default AddPostForm