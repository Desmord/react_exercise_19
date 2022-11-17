import { useState } from 'react';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';
import { Form } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);


    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    // const handleSubmit = (e) => {
    //     action({ title, author, publishedDate, shortDescription, content });
    // }

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if (content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content });
        }
    };

    return (
        <form className="col-10 col-sm-10 col-md-8  col-lg-6 " onSubmit={validate(handleSubmit)}>
            <div className="form-group d-flex flex-column col-10  col-sm-6">
                <label className={`p-2`} >Title</label>
                <Form.Control
                    {...register("title", { required: true, minLength: 3 })}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </div>
            <div className="form-group d-flex flex-column  col-10  col-sm-6">
                <label className={`p-2`} >Author</label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    type="text" placeholder="Enter author"
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </div>
            <div className="form-group d-flex flex-column  col-10  col-sm-6">
                <label className={`p-2`} >Published</label>
                <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                {dateError && <small className="d-block form-text text-danger mt-2">Wrong date</small>}
            </div>
            <div className="form-group d-flex flex-column  col-12  col-sm-8">
                <label className={`p-2`} >Short description</label>
                <Form.Control
                    {...register("shortDescription", { required: true, minLength: 20 })}
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                    type="text" placeholder="Short description"
                />
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </div>
            <div className="form-group d-flex flex-column  col-12  col-sm-8">
                <label className={`p-2`} >Main content</label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </div>
            <button className={`btn btn-primary mt-3`}>{actionText}</button>
        </form>
    )
}

export default PostForm