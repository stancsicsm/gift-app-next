import { useEffect, useRef } from "react";
import Label from "@/components/Label/Label";
import Button from "../Button/Button";

export type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
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
}: ConfirmationModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
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
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-default" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default ConfirmationModal;
