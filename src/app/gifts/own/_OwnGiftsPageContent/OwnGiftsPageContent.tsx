"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { mockUsers } from "@/mock-data/mockUsers";
import type { Gift } from "@/services/gifts/gift.types";
import { getUserNameById } from "@/utils/get-user-name-by-id";

type OwnGiftsPageProps = {
  gifts: Gift[];
};

const OwnGiftsPageContent = ({ gifts }: OwnGiftsPageProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const success = searchParams.get("success");
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (success === "true" && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.success("Gift added successfully!");
      router.replace("/gifts/own");
    }
  }, [success, router]);

  return (
    <div className="flex flex-col w-full gap-4">
      <StyledToaster />

      {gifts.map((gift) => (
        <Link key={gift.id} href={`/gifts/${gift.id}`}>
          {/*TODO: modify card to contain the edit button*/}
          <GiftCard
            title={gift.name}
            requestedByName={getUserNameById(mockUsers, gift.createdBy)}
            reservedBy={gift.reservedBy}
            imageSrc={undefined}
          />
        </Link>
      ))}
      {gifts.length === 0 && (
        <GiftMessage message="No gifts to display. Add your first gift!" />
      )}
    </div>
  );
};

export default OwnGiftsPageContent;
