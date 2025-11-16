"use client";

import Link from "next/link";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import { mockUsers } from "@/mock-data/mockUsers";
import type { Gift } from "@/services/gifts/gift.types";
import { getUserNameById } from "@/utils/get-user-name-by-id";

type ReservedGiftsPageContentProps = {
  gifts: Gift[];
};

const ReservedGiftsPageContent = ({ gifts }: ReservedGiftsPageContentProps) => (
  <div className="flex flex-col w-full gap-4">
    {gifts.map((gift) => (
      <Link key={gift.id} href={`/gifts/${gift.id}`}>
        <GiftCard
          title={gift.name}
          requestedByName={getUserNameById(mockUsers, gift.createdBy)}
          reservedBy={gift.reservedBy}
        />
      </Link>
    ))}
    {gifts.length === 0 && (
      <GiftMessage message="No reserved gifts to display." />
    )}
  </div>
);

export default ReservedGiftsPageContent;
