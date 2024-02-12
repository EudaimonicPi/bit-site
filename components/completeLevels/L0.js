"use client";
import { useState } from "react";
import CellView from "./L0/cellView";
import Modal from "@/components/completeLevels/L0/modalView";

  

export default function L0(props) {
  // props: cellId
  const cellId = props.cellId; //will still be important
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => { //closing the modal
    setShowModal(false);
  };

  return (
  
    <>
        <Modal
          show={showModal}
          handleClose={handleClose}
          cellId={cellId}
        />
        <CellView
          onClick={() => handleClick()}
          cellId={cellId}
        />
    </>
  );
}