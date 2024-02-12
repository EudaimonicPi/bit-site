
//npm i boostrap react-boostrap
import Modal from 'react-bootstrap/Modal';
import ModalHeader from '@/components/completeLevels/L0/modal/modalHeader';
import ModalBody from '@/components/completeLevels/L0/modal/modalBody';
import ModalFooter from '@/components/completeLevels/L0/modal/modalFooter';
//for styling purposes. essential? 
import 'bootstrap/dist/css/bootstrap.min.css';

//with all of these would probs be better to use props
export default function ModalView(props) {
    const cellId = props.cellId
    // props: show, handleClose, cellId
    return (
            <Modal show={props.show} onHide={props.handleClose}>
                <ModalHeader cellId={cellId}/>
                    <ModalBody cellId={cellId}/>
                <ModalFooter handleClose={props.handleClose} />
            </Modal>
    )}
