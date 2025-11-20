"use client";

import Link from "next/link";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import type { Gift } from "@/services/gifts/gift.types";
import type { User } from "@/services/users/user.types";
import { getUserNameById } from "@/utils/get-user-name-by-id";
import { handleGiftReservation } from "@/utils/handle-gift-reservation";

type ReservedGiftsPageContentProps = {
  gifts: Gift[];
  users: User[];
};

const ReservedGiftsPageContent = ({
  gifts,
  users,
}: ReservedGiftsPageContentProps) => (
  <div className="flex flex-col w-full gap-4">
    <StyledToaster />

    {gifts.map((gift) => (
      <Link key={gift.id} href={`/gifts/${gift.id}`}>
        <GiftCard
          title={gift.name}
          imageUrl={gift.imageUrl ?? undefined}
          requestedByName={getUserNameById(users, gift.createdBy)}
          reservedBy={gift.reservedBy}
          onButtonClick={() => handleGiftReservation(gift.id, gift.reservedBy)}
        />
      </Link>
    ))}
    {gifts.length === 0 && (
      <GiftMessage message="No reserved gifts to display." />
    )}
  </div>
);

export default ReservedGiftsPageContent;
