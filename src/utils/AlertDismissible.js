import React from 'react'
import { Alert } from 'react-bootstrap';

function AlertDismissible({ variant, message, showAlert, setShowAlert }) {
    if (showAlert) {
        return (
            <Alert variant={variant} onClose={() => setShowAlert(false)} dismissible >  {message} </Alert>
        );
    }
}
export default AlertDismissible