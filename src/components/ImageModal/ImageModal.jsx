import { useEffect } from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalBackdrop}
      shouldCloseOnOverlayClick={true}
    >
      <button className={styles.closeButton} onClick={onClose}>
        ✖
      </button>
      <img src={image} alt="Large preview" className={styles.modalImage} />
    </Modal>
  );
}
