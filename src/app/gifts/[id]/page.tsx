import clsx from "clsx";
import { ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import Label from "@/components/Label/Label";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGift } from "@/services/gifts/getGift";
import type { Gift } from "@/services/gifts/gift.types";
import { getGiftButtonVariant } from "@/utils/get-gift-button-variant";

const GiftPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const giftId = Number(id);

  const gift = isNaN(giftId) ? undefined : await getGift({ giftId });

  return (
    <div className="flex flex-col h-screen">
      <PageTitle
        title="Gift Wish"
        leftSlot={
          <Link href="/">
            <Button variant="ghost" size="small">
              <ArrowLeft />
            </Button>
          </Link>
        }
        className="p-4"
      />
      <GiftPageContent gift={gift} />
    </div>
  );
};

export default GiftPage;

type GiftPageContentProps = {
  gift?: Gift;
};

const GiftPageContent = ({ gift }: GiftPageContentProps) => {
  if (!gift) {
    return <GiftMessage message="Gift not found" />;
  }

  return (
    <div className="flex flex-col flex-1">
      <ImageOrPlaceholderWithPrice name={gift.name} price={gift.price} />
      <div className="flex flex-col flex-1 p-4 pb-8 gap-4">
        <Label size="xx-large" weight="semi-bold">
          {gift.name}
        </Label>
        {gift.description && <Label subtle>{gift.description}</Label>}
        <ViewGiftButton link={gift.link} />
        <Button
          size="large"
          variant={getGiftButtonVariant(gift.reservedBy)}
          disabled={gift.reservedBy === "other"}
          className="w-full mt-auto shadow-sm"
        >
          {gift.reservedBy === "me" ? "Cancel Reservation" : "Reserve Gift"}
        </Button>
      </div>
    </div>
  );
};

const ImageOrPlaceholderWithPrice = ({
  name,
  price,
}: Pick<Gift, "name" | "price">) => {
  // TODO: replace with actual image source when available
  const imageSrc = undefined;

  return (
    <div className="relative">
      <img
        src={imageSrc ?? "/gift-placeholder.svg"}
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
};

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
