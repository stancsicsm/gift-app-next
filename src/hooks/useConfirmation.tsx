import { useCallback, useState } from "react";
import ConfirmationModal, {
  type ConfirmationModalProps,
} from "@/components/ConfirmationModal/ConfirmationModal";

type ConfirmOptions = Pick<
  ConfirmationModalProps,
  "title" | "message" | "confirmText" | "cancelText"
> & {
  onConfirm: () => void | Promise<void>;
};

export const useConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);

  const confirm = useCallback((opts: ConfirmOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setOptions(null);
  }, []);

  const handleConfirm = useCallback(async () => {
    await options?.onConfirm?.();
    handleClose();
  }, [options, handleClose]);

  const ConfirmationDialog = useCallback(() => {
    if (!options) return null;

    return (
      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={options.title}
        message={options.message}
        confirmText={options.confirmText}
        cancelText={options.cancelText}
      />
    );
  }, [isOpen, options, handleClose, handleConfirm]);

  return {
    confirm,
    ConfirmationDialog,
  };
};
