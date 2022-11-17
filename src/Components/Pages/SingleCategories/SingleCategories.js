import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../Redux/postRedux'

import Post from '../../Common/Post/Post';

const SingleCategories = () => {

    const { name } = useParams();
    const posts = useSelector(state => getPostsByCategory(state, name));

    return (
        <div >
            <div className="d-flex justify-content-between">
                <h3>Category: {name}</h3>
            </div>
            <Container className={`pt-2 row justify-content-center`}>
                {posts.map((post, index) => <Post key={index} {...post} />)}
            </Container>

        </div>
    )
}

export default SingleCategories;