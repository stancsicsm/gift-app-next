import GiftDetailPageContent from "@/app/gifts/[id]/_components/GiftDetailPageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGift } from "@/services/gifts/getGift";
import { getCurrentUser } from "@/services/users/getCurrentUser";

const GiftDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const giftId = Number(id);

  const gift = Number.isNaN(giftId) ? undefined : await getGift({ giftId });
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col h-screen">
      <PageTitle title="Gift Wish" backButton className="p-4" />
      <GiftDetailPageContent gift={gift} currentUser={currentUser} />
    </div>
  );
};

export default GiftDetailPage;
