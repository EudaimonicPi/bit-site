/* Contains the modal head */
// NOTE: CONVERTED FROM OG
import Modal from 'react-bootstrap/Modal';
import {headings} from '@/utils/data/headings'

export default function ModalHeader(props) {
    const cellId = props.cellId
    return (  
            <Modal.Header closeButton> 
                <Modal.Title>  {headings[cellId]} </Modal.Title>
            </Modal.Header>           
)}
