import { useSelector } from "react-redux"
import { getAllCategories } from '../../../Redux/categoriesRedux';
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Categories = () => {

    const categories = useSelector(state => getAllCategories(state))

    return (
        <div className="d-flex flex-column justify-content-center p-5">
            <Navbar.Brand className={``}><h3>Categories</h3></Navbar.Brand>
            <Nav className="d-flex flex-column">
                {categories.map((cat, index) => (
                    <Nav.Link className={`px-4`} key={index} as={NavLink} to={`/categories/filter/${cat}`}>{cat}</Nav.Link>
                ))}
            </Nav>
        </div >
    )
}

export default Categories;