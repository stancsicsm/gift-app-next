"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import Button from "../Button/Button";

type FullScreenImageProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
};

const FullScreenImage = ({
  isOpen,
  onClose,
  src,
  alt,
}: FullScreenImageProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className="modal-top backdrop-blur-sm p-4"
  >
    <div className="relative">
      <Button
        size="small"
        variant="light"
        className="absolute top-2 right-2 btn-circle"
        onClick={onClose}
      >
        <X size={20} />
      </Button>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="rounded-2xl"
      />
    </div>
  </Modal>
);

export default FullScreenImage;
