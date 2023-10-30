import React from "react";
import { ModalProps } from "../type";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <dialog open>
        <article>
          <header>
            <a aria-label="Close" className="close" onClick={onClose}></a>
          </header>
          {children}
        </article>
      </dialog>
    )
  );
};

export default Modal;
