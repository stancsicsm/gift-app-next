import Label from "@/components/Label/Label";
import Modal, { type ModalProps } from "@/components/Modal/Modal";
import Button from "../Button/Button";

export type ConfirmationModalProps = ModalProps & {
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
};

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="modal-box cursor-default outline-none" tabIndex={-1}>
      <Label size="large" weight="semi-bold" className="mb-2">
        {title}
      </Label>
      <Label subtle>{message}</Label>
      <div className="modal-action">
        <form method="dialog" className="flex gap-2">
          <Button variant="ghost" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant="danger-gradient" onClick={onConfirm}>
            {confirmText}
          </Button>
        </form>
      </div>
    </div>
  </Modal>
);

export default ConfirmationModal;
