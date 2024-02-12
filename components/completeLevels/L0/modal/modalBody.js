'use client'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getCardComponents } from '@/utils/arrays/cards'
import { goLeft, goRight } from '@/utils/cardFns/cardFn'
import {LeftArrow, RightArrow} from './arrows/arrow'
import './cardStyles.css'


export default function ModalBody(props) {
  // console.log("CARD COMPONENTS IS in modal body" , cardComponents)
    const [cardIdx, setCardIdx] = useState(0) //initCard
    const cellId = props.cellId
    const cards = getCardComponents(cellId) //will be based on cellId in future
    const numCards = cards.length

     const handleKeyDown = (event) => {
          if (event.key === 'ArrowLeft') {
                    goLeft(cardIdx, setCardIdx, numCards)
          } else if (event.key === 'ArrowRight') {
                    goRight(cardIdx, setCardIdx, numCards)
          }
     };

    const handleLeftArrowClick = () => {
        goLeft(cardIdx, setCardIdx, numCards);
    };

    const handleRightArrowClick = () => {
      goRight(cardIdx, setCardIdx, numCards);
    };

  useEffect(() => { //chat gpt added event listener for key preess
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cardIdx]); // Add/remove event listener on mount/unmount/had to add this for cardNum!


    return (  
        <Modal.Body className="modal-container"> 
            {LeftArrow(handleLeftArrowClick)}
            {/* cards array will eventually have to be cellId specific  */}
            <div className="card-content">{cards[cardIdx]}</div>
            {RightArrow(handleRightArrowClick)}
        </Modal.Body>
)} 
