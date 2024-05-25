import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  url: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageModal({ url, alt, isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="fullsize picture modal"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      closeTimeoutMS={300}
    >
      <img src={url} alt={alt} className={css.img} />
    </Modal>
  );
}
