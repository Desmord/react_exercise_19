import { Link } from 'react-router-dom';

const AddPostButton = () => {
    return (
        <Link to={`/post/add`}>
            <button type="button" className={`btn btn-light`}>Add post</button>
        </Link>
    )
}

export default AddPostButton
