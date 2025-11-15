import { Plus } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import PageTitle from "@/components/PageTitle/PageTitle";
import WishlistsPageContent from "@/components/pageContents/WishlistsPageContent/WishlistsPageContent";
import { getGifts } from "@/services/gifts/getGifts";

const WishlistsPage = async () => {
  const gifts = await getGifts();

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle
        title="Gift Wishes"
        rightSlot={
          <Link href="/gifts/new">
            <Button variant="ghost" size="small">
              <Plus />
            </Button>
          </Link>
        }
        className="pb-4"
      />
      <WishlistsPageContent gifts={gifts} />
    </div>
  );
};

export default WishlistsPage;
