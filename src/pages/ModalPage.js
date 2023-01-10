import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={onClose}>
        I accect
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>測試文字123456789</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}
