"use client";

import clsx from "clsx";
import { X } from "lucide-react";
import Image from "next/image";
import { type ChangeEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { uploadImage } from "@/services/upload/uploadImage";

type ImageUploadProps = {
  label: string;
  name: string;
  defaultValue?: string;
};

const ImageUpload = ({ label, name, defaultValue }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(
    defaultValue,
  );
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const uploadedFile = await uploadImage(file);
      setPreviewUrl(uploadedFile.url);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(
        `Upload failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const handleRemove = () => {
    setPreviewUrl(undefined);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="">
      <Label size="large" className="pb-1">
        {label}
      </Label>

      <input type="hidden" name={name} value={previewUrl || ""} />

      <div className="flex flex-col gap-4">
        {previewUrl ? (
          <div className="relative w-full rounded-xl aspect-video overflow-hidden">
            <Image
              src={previewUrl}
              alt="Gift preview"
              fill
              className="object-cover"
            />
            <Button
              size="small"
              variant="danger-gradient"
              className="absolute top-2 right-2 btn-circle"
              onClick={handleRemove}
            >
              <X size={20} />
            </Button>
          </div>
        ) : (
          <div
            className={clsx(
              "relative flex flex-col items-center justify-center w-full rounded-xl aspect-video",
              "border-1 border-dashed border-primary",
              "cursor-pointer hover:bg-primary/10 active:bg-primary/10",
            )}
            onClick={handleUploadClick}
          >
            <input
              type="file"
              id={name}
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              disabled={isUploading}
              className="hidden"
            />
            {isUploading ? (
              <span className="loading loading-spinner loading-lg text-primary"></span>
            ) : (
              <Button variant="primary" outline>
                Upload Image
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
