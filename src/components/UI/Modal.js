import React from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
const Backdrop = () => {
  return <div className={modalStyles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={modalStyles.modal}>
      <div className={modalStyles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
