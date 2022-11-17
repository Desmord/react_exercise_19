import { Container } from 'react-bootstrap';
import { dateToStr } from '../../../Utils';

import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

const Post = ({ id, title, author, publishedDate, shortDescription }) => {
    return (
        <Container className={`p-2 d-flex flex-column justify-content-between rounded border col-sm-10 col-md-4 col-lg-3 m-2`}>
            <h5>{title}</h5>
            <div><strong className={`font-weight-bold`}>Author: </strong>{author}</div>
            <div><strong>Published: </strong>{dateToStr(publishedDate)}</div>
            <div className={`pb-1`}><p dangerouslySetInnerHTML={{ __html: shortDescription }}></p></div>
            <ReadMoreButton id={id} />
        </Container>
    )
}

export default Post;