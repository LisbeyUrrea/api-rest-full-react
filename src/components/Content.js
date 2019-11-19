import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import User from './User'

function Content() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)

    function handleSubmit(event) {
        event.preventDefault();
        console.log("enviar datos a guardar")
        console.log(firstName, lastName, age)

        var data = {
            name: firstName,
            lastName: lastName,
            age: age
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch('http://localhost:8080/users', {
            headers: myHeaders ,
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            cache: 'default' 
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(res => {
                console.log("DATOS ALMACENADOS EXITOSAMENTE")
                console.log(res)
            })
    }
    return (
        <Container className="container-content">
            <User firstName={firstName} lastName={lastName} age={age}
                setFirstName={setFirstName} setLastName={setLastName} setAge={setAge}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default Content