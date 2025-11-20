"use client";

import clsx from "clsx";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import Label from "@/components/Label/Label";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import type { Gift } from "@/services/gifts/gift.types";
import type { User } from "@/services/users/user.types";
import { getGiftButtonVariant } from "@/utils/get-gift-button-variant";
import { handleGiftReservation } from "@/utils/handle-gift-reservation";

type GiftPageContentProps = {
  gift?: Gift;
  currentUser: User;
};

const GiftDetailPageContent = ({ gift, currentUser }: GiftPageContentProps) => {
  if (!gift) {
    return <GiftMessage message="Gift not found" />;
  }

  const isOwner = currentUser.id === gift.createdBy;

  return (
    <div className="flex flex-col flex-1">
      <StyledToaster />

      <ImageOrPlaceholderWithPrice
        name={gift.name}
        price={gift.price}
        imageUrl={gift.imageUrl}
      />
      <div className="flex flex-col flex-1 p-4 pb-8 gap-4">
        <Label size="xx-large" weight="semi-bold">
          {gift.name}
        </Label>
        {gift.description && <Label subtle>{gift.description}</Label>}
        <ViewGiftButton link={gift.link} />
        <div className="flex flex-col gap-2 mt-8">
          {isOwner && (
            <Link href={`/gifts/${gift.id}/edit`}>
              <Button
                variant="secondary"
                size="large"
                className="w-full shadow-sm"
              >
                Edit Gift
              </Button>
            </Link>
          )}
          <Button
            size="large"
            variant={getGiftButtonVariant(gift.reservedBy)}
            disabled={gift.reservedBy === "other"}
            className="w-full shadow-sm"
            onClick={() => handleGiftReservation(gift.id, gift.reservedBy)}
          >
            {gift.reservedBy === "me" ? "Cancel Reservation" : "Reserve Gift"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GiftDetailPageContent;

const ImageOrPlaceholderWithPrice = ({
  name,
  price,
  imageUrl,
}: Pick<Gift, "name" | "price" | "imageUrl">) => (
  <div className="relative">
    <img
      src={imageUrl ?? "/gift-placeholder.svg"}
      alt={name}
      className="w-full h-[250px] object-cover"
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
