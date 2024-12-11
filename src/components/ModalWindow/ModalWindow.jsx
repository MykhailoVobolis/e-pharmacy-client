import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice.js";
import { selectStateModal, selectTypeModal } from "../../redux/modal/selectors.js";
import { useMedia } from "react-use";

import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

import css from "./ModalWindow.module.css";

Modal.setAppElement("#root");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: window.innerWidth < 768 ? "40px 32px" : "50px 70px",
    border: "none",
    borderRadius: "20px",
    maxHeight: "90vh",
    overflowY: "auto",
    scrollbarWidth: "none",
    backgroundColor: "var(--white)",
  },
};

function addContentModal(modalType, onClose) {
  switch (modalType) {
    case "login":
      return <LoginModal onClose={onClose} />;
    case "register":
      return <RegistrationModal onClose={onClose} />;
    default:
      return null;
  }
}

export default function ModalWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectStateModal);
  const modalType = useSelector(selectTypeModal);
  const isTablet = useMedia("(min-width: 768px)");

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={{
        base: css.modalContainer,
        afterOpen: css.openedModalContainer,
        beforeClose: css.closedModalContainer,
      }}
      style={modalStyles}
      closeTimeoutMS={500}
      onRequestClose={onClose}>
      <button className={css.closeBtn} onClick={onClose}>
        <IoClose className={css.closeIcon} size={isTablet ? 24 : 20} />
      </button>
      {addContentModal(modalType, onClose)}
    </Modal>
  );
}
