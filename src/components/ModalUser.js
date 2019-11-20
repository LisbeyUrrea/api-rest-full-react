import React, { useState } from 'react'
import { Modal, Container } from 'react-bootstrap';
import User from './User'
import AlertDismissible from '../utils/AlertDismissible'

function ModalCostum({ showModal, handleClose, setShowModal }) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (firstName === '' || lastName === '' || age === 0) {
            alert('debe diligenciar todos los datos')
        } else {
            var data = {
                name: firstName,
                lastName: lastName,
                age: age
            }


            var myHeaders = new Headers();
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('Content-Type', 'application/json; charset=UTF-8');
            myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8080/');
            myHeaders.append('Access-Control-Allow-Credentials', true);


            await fetch('http://localhost:8080/users', {
                headers: myHeaders,
                cache: 'default',
                crossDomain: true,
                method: 'POST',
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    setMessage('Usuario guardado exitosamente')
                    setVariant('success')
                    setShowAlert(true)

                    setShowModal(false)

                    window.setTimeout(() => {
                        setShowAlert(false)
                    }, 2000)

                })
                .catch(error => console.error('Error:', error))
        }
    }
    return (
        <>
            {showAlert ? <AlertDismissible
                className="alert"
                variant={variant}
                message={message}
                showAlert={showAlert}
                setShowAlert={setShowAlert} />
                : null}
            <Modal
                size="lg"
                centered
                show={showModal}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Save new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="content-page">
                        <User firstName={firstName} lastName={lastName} age={age}
                            setFirstName={setFirstName} setLastName={setLastName} setAge={setAge}
                            handleSubmit={handleSubmit}
                        />
                    </Container>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default ModalCostum