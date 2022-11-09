import { Link } from 'react-router-dom';

const EditButton = ({ id }) => {
    return (
        <Link to={`/post/edit/${id}`}>
            <button type="button" className={`mx-2 btn btn-outline-info`}>Edit</button>
        </Link>
    )
}

export default EditButton
