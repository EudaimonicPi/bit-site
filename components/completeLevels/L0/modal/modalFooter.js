'use client'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//with all of these would probs be better to use props
export default function ModalFooter(props) {


    //lol footer needs editor state
    return (      
        <Modal.Footer>
            {/* <button onClick={() => window.speechSynthesis.speak(msg)}>
                YOYOYO
            </button> */}
            <Button variant="primary" onClick={props.handleClose}>
                Close
            </Button> 
        </Modal.Footer>
)}
