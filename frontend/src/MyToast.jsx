import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { messageActionCreator } from './reducers/userReducer';

function AlertDismissible(props) {
  const dispatch = useDispatch();
  const {status,message,delay=3000} = props;
  const [show, setShow] = useState(true);

  useEffect(()=>{
    return ()=>{
      setShow(true)
    }
  });
    
    if (show && message) {
      setTimeout(() => {
              setShow(false);
              dispatch(messageActionCreator(''));
          }, delay);
      return (
        <Alert variant={status?'success':'danger'} onClose={() => setShow(false)} dismissible>
          {message}
        </Alert>
      );
    }
  }
  

export default AlertDismissible