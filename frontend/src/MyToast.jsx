import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

function AlertDismissible(props) {
    const [show, setShow] = useState(true);
    
    const {status,message,delay=3000} = props;

    setTimeout(() => {
        setShow(false);
    }, delay);

    if (show && message) {
      return (
        <Alert variant={status?'success':'danger'} onClose={() => setShow(false)} dismissible>
          {message}
        </Alert>
      );
    }
  }
  

export default AlertDismissible