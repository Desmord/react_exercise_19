import { useSelector } from "react-redux"
import { getAllPosts } from '../../../Redux/postRedux';
import { Container } from 'react-bootstrap';

import Post from "../../Common/Post/Post";


const Posts = () => {

    const posts = useSelector(state => getAllPosts(state))

    return (
        <Container className={`pt-2 row justify-content-center`}>
            {posts.map(post => <Post key={post.id} {...post} />)}
        </Container>
    )
}

export default Posts