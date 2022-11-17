import { useState } from 'react';
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    }

    return (
        <form className="col-10 col-sm-10 col-md-8  col-lg-6 " onSubmit={handleSubmit}>
            <div className="form-group d-flex flex-column col-10  col-sm-6">
                <label className={`p-2`} >Title</label>
                <input className={`form-control`} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            </div>
            <div className="form-group d-flex flex-column  col-10  col-sm-6">
                <label className={`p-2`} >Author</label>
                <input className={`form-control`} value={author} onChange={e => setAuthor(e.target.value)} type="text" />
            </div>
            <div className="form-group d-flex flex-column  col-10  col-sm-6">
                <label className={`p-2`} >Published</label>
                <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                {/* <input className={`form-control`} value={publishedDate} onChange={e => setPublishedDate(e.target.value)} type="text" /> */}
            </div>
            <div className="form-group d-flex flex-column  col-12  col-sm-8">
                <label className={`p-2`} >Short description</label>
                <ReactQuill theme="snow" value={shortDescription} onChange={setShortDescription} />
            </div>
            <div className="form-group d-flex flex-column  col-12  col-sm-8">
                <label className={`p-2`} >Main content</label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
            </div>
            <button className={`btn btn-primary mt-3`}>{actionText}</button>
        </form>
    )
}

export default PostForm