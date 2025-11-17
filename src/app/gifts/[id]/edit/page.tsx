import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EditGiftPageContent from "@/app/gifts/[id]/edit/_components/EditGiftPageContent/EditGiftPageContent";
import Button from "@/components/Button/Button";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGift } from "@/services/gifts/getGift";
import { getCurrentUser } from "@/services/users/getCurrentUser";

const EditGiftPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const giftId = Number(id);

  const gift = Number.isNaN(giftId) ? undefined : await getGift({ giftId });
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle
        title="Edit Gift"
        leftSlot={
          <Link href={`/gifts/${giftId}`}>
            <Button variant="ghost" size="small">
              <ArrowLeft />
            </Button>
          </Link>
        }
        className="pb-4"
      />
      <EditGiftPageContent gift={gift} currentUser={currentUser} />
    </div>
  );
};

export default EditGiftPage;
