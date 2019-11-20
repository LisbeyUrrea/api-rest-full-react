import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from './ModalUser'
import TableUser from './TableUser'


function Content() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}> Add new user</Button>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                handleClose={handleClose} />

            <TableUser showModal={showModal} />

        </>

    )
}

export default Content