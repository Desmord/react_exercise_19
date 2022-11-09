import { useState } from 'react';
import { removePost } from '../../../Redux/postRedux'
import { useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EditButton = ({ id }) => {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false)

    const handleDelete = () => {
        dispatch(removePost(id))
        setShowModal(false)
    }


    return (
        <span >
            <button onClick={handleShow} type="button" className={`btn btn-outline-danger`}>Delete</button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header className={`d-flex flex-column`} closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                    <Modal.Body>This operation completely remove this post. Are you sure you want to do that?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="btn btn-danger" onClick={handleDelete}>
                            Remove
                        </Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
        </span>
    )
}

export default EditButton
