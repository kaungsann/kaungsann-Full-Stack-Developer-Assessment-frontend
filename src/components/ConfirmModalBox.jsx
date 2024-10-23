import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            {cancelText || "Cancel"}
          </Button>
          <Button className="bg-[#6366f1] text-white" onPress={onConfirm}>
            {confirmText || "Confirm"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
};

export default ConfirmModal;
