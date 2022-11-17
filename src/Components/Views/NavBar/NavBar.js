import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (

        <Navbar bg="primary" variant="dark" expand="lg" className={`d-flex justify-content-between px-2 mt-4 mb-4 rounded`}>
            <Navbar.Brand className={``}>Blog.app</Navbar.Brand>
            <Nav >
                <Nav.Link className={`px-2 `} as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link className={`px-2 `} as={NavLink} to="/categories">Categories</Nav.Link>
                <Nav.Link className={`px-2 `} as={NavLink} to="/about">About</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default NavBar;