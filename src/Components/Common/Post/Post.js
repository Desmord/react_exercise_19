import { Container } from 'react-bootstrap';
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

const Post = ({ id, title, author, publishedDate, shortDescription }) => {
    return (
        <Container className={`p-2 rounded border col-sm-10 col-md-4 col-lg-3 m-2`}>
            <h5>{title}</h5>
            <div><strong className={`font-weight-bold`}>Author: </strong>{author}</div>
            <div><strong>Published: </strong>{publishedDate}</div>
            <div className={`pb-1`}>{shortDescription}</div>
            <ReadMoreButton id={id} />
        </Container>
    )
}

export default Post;