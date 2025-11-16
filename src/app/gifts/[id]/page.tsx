import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import GiftDetailPageContent from "@/app/gifts/[id]/_components/GiftDetailPageContent";
import Button from "@/components/Button/Button";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGift } from "@/services/gifts/getGift";

const GiftDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
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
      <GiftDetailPageContent gift={gift} />
    </div>
  );
};

export default GiftDetailPage;
