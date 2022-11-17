import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../Redux/postRedux'
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { dateToStr } from '../../../Utils';


import EditButton from '../../Common/EditButton/EditButton';
import DeleteButton from '../../Common/DeleteButton/DeleteButton';

const SinglePost = () => {

    const { id } = useParams();

    const post = useSelector(state => getPostById(state, id))

    if (!post) return <Navigate to="/" />
    return (
        <Container className={`d-flex flex-wrap justify-content-center`}>
            <div className={`p-2 d-flex justify-content-between col-12 col-sm-12 col-md-8 col-lg-6 m-2`}>
                <h2>{post.title}</h2>
                <span>
                    <EditButton id={post.id} />
                    <DeleteButton id={post.id} />
                </span>
            </div>
            <div className={`p-2 d-flex flex-column justify-content-center col-12 col-sm-12 col-md-8 col-lg-6 m-2`}>
                <span><strong>Author: </strong>{post.author}</span>
                <span><strong>Published: </strong>{dateToStr(post.publishedDate)}</span>
                <span><strong>Category: </strong>{post.categorie}</span>
                <span className={`mt-3`} ><p dangerouslySetInnerHTML={{ __html: post.content }}></p></span>
            </div>
        </Container>
    )
}

export default SinglePost;