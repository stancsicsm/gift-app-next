import clsx from "clsx";
import { type PropsWithChildren, useEffect, useRef } from "react";

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}>;

const Modal = ({ isOpen, onClose, className, children }: ModalProps) => {
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
    <dialog
      ref={dialogRef}
      className={clsx("modal", className)}
      onClose={onClose}
    >
      {children}
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-default" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
