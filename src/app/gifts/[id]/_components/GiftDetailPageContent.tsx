"use client";

import clsx from "clsx";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/Button/Button";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import Label from "@/components/Label/Label";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { useConfirmation } from "@/hooks/useConfirmation";
import { deleteGiftAction } from "@/services/gifts/deleteGiftAction";
import type { Gift } from "@/services/gifts/gift.types";
import type { User } from "@/services/users/user.types";
import { getGiftButtonVariant } from "@/utils/get-gift-button-variant";
import { handleGiftReservation } from "@/utils/handle-gift-reservation";

type GiftPageContentProps = {
  gift?: Gift;
  currentUser: User;
};

const GiftDetailPageContent = ({ gift, currentUser }: GiftPageContentProps) => {
  const { confirm, ConfirmationDialog } = useConfirmation();
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!gift) {
    return <GiftMessage message="Gift not found" />;
  }

  const deleteGift = async () => {
    const result = await deleteGiftAction(gift.id);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.error);
    }
  };

  const handleDelete = () => {
    confirm({
      title: "Delete Gift",
      message: "Are you sure you want to delete this gift?",
      confirmText: "Delete",
      onConfirm: deleteGift,
    });
  };

  const isOwner = currentUser.id === gift.createdBy;

  return (
    <div className="flex flex-col flex-1">
      <StyledToaster />
      <ConfirmationDialog />

      {gift.imageUrl && (
        <FullScreenImage
          isOpen={isImageOpen}
          onClose={() => setIsImageOpen(false)}
          src={gift.imageUrl}
          alt={gift.name}
        />
      )}

      <ImageOrPlaceholderWithPrice
        name={gift.name}
        price={gift.price}
        imageUrl={gift.imageUrl}
        onClick={() => setIsImageOpen(true)}
      />

      <div className="flex flex-col flex-1 p-4 pb-8 gap-4">
        <Label size="xx-large" weight="semi-bold">
          {gift.name}
        </Label>
        {gift.description && <Label subtle>{gift.description}</Label>}
        <ViewGiftButton link={gift.link} />
        <div className="flex flex-col gap-3 mt-8">
          {isOwner && (
            <>
              <Link href={`/gifts/${gift.id}/edit`}>
                <Button
                  variant="secondary"
                  size="large"
                  className="shadow-sm w-full"
                >
                  Edit Gift
                </Button>
              </Link>
              <Button
                variant="danger-gradient"
                size="large"
                className="shadow-sm"
                onClick={handleDelete}
              >
                Delete Gift
              </Button>
            </>
          )}
          {!isOwner && (
            <Button
              size="large"
              variant={getGiftButtonVariant(gift.reservedBy)}
              disabled={gift.reservedBy === "other"}
              className="shadow-sm"
              onClick={() => handleGiftReservation(gift.id, gift.reservedBy)}
            >
              {gift.reservedBy === "me" ? "Cancel Reservation" : "Reserve Gift"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftDetailPageContent;

type ImageOrPlaceholderWithPriceProps = Pick<
  Gift,
  "name" | "price" | "imageUrl"
> & {
  onClick?: () => void;
};

const ImageOrPlaceholderWithPrice = ({
  name,
  price,
  imageUrl,
  onClick,
}: ImageOrPlaceholderWithPriceProps) => (
  <div className="relative">
    <img
      src={imageUrl ?? "/gift-placeholder.svg"}
      alt={name}
      className="w-full aspect-[16/10] object-cover"
      onClick={onClick}
    />
    {price !== null && (
      <div
        className={clsx(
          "badge badge-primary badge-lg bg-primary-gradient border-0",
          "absolute bottom-4 right-4",
          "font-semibold shadow-sm",
        )}
      >
        {price} Ft
      </div>
    )}
  </div>
);

const ViewGiftButton = ({ link }: Pick<Gift, "link">) => {
  if (!link) {
    return null;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center w-full p-4",
        "bg-gray-200/80 hover:bg-gray-300/80",
        "rounded-lg shadow-sm",
      )}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-2">
          <ExternalLink
            size="18"
            // primary color
            color="#4cabe6"
          />
          <Label weight="semi-bold">View Gift</Label>
        </div>
        <ChevronRight
          size={14}
          strokeWidth={2.5}
          // accent-content color
          color="#677389"
        />
      </div>
    </a>
  );
};
