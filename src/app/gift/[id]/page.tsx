import clsx from "clsx";
import { ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import Label from "@/components/Label/Label";
import PageTitle from "@/components/PageTitle/PageTitle";
import { type Gift, mockGifts } from "@/mock-data/mockGifts";

const GiftPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const gift = mockGifts.find((gift) => gift.id === Number(id));

  return (
    <div className="flex flex-col">
      <PageTitle
        title="Gift Wish"
        leftSlot={
          <Link href="/">
            <Button variant="ghost">
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

const GiftPageContent = ({ gift }: { gift: Gift | undefined }) => {
  if (!gift) {
    return <GiftMessage message="Gift not found" />;
  }
  return (
    <div>
      <ImageOrPlaceholderWithPrice
        title={gift.title}
        imageSrc={gift.imageSrc}
        price={gift.price}
      />
      <div className="flex flex-col p-4 gap-4">
        <Label size="xx-large" weight="semi-bold">
          {gift.title}
        </Label>
        {gift.description && <Label subtle>{gift.description}</Label>}
        <ViewGiftButton link={gift.link} />
      </div>
    </div>
  );
};

const ImageOrPlaceholderWithPrice = ({
  title,
  imageSrc,
  price,
}: Pick<Gift, "title" | "imageSrc" | "price">) => {
  return (
    <div className="relative">
      <img
        src={imageSrc ?? "/gift-placeholder.svg"}
        alt={title}
        className="w-full h-[250px] object-cover"
      />
      {price && (
        <div
          className={clsx(
            "badge badge-primary badge-lg",
            " absolute bottom-4 right-4",
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
