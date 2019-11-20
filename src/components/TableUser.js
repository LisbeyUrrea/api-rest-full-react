import React, { useState, useEffect } from 'react'
import { Table, Container, Button } from 'react-bootstrap';

function TableUser({ showModal }) {

    const [allUsers, setAllUsers] = useState([])

    function findAllUsersOnDatabase() {

        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(response => {
                const { data } = response
                setAllUsers(data)
            })
            .catch(error => console.error('Error:', error))
    }

    useEffect(findAllUsersOnDatabase, [])

    function deleteUser(e, id) {
        e.preventDefault();
        fetch("http://localhost:8080/users/" + id, { method: 'DELETE', })
            .then(response => response.json())
            .then(response => {
                const { data, message } = response
                console.log(data, message)
            })
            .catch(error => console.error('Error:', error))
    }

    return (
        <Container className="container-tabla">

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>age</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Button variant="primary" className='mr-1'> Edit</Button>
                                    <Button variant="danger" onClick={(e) => deleteUser(e, user.id)}> Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default TableUser