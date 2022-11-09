import AddPostButton from "../../Common/AddPostButton/AddPostButton";
import Posts from "../../Features/Posts/Posts";

const Home = () => {
    return (
        <div >
            <div className="d-flex justify-content-between">
                <h3>All posts</h3>
                <AddPostButton />
            </div>
            <Posts />
        </div>
    )
}

export default Home;