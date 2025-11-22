import OwnGiftsPageContent from "@/app/gifts/own/_components/OwnGiftsPageContent/OwnGiftsPageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { getGifts } from "@/services/gifts/getGifts";

const OwnGiftsPage = async () => {
  const gifts = await getGifts({ filter: "own" });

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <StyledToaster />
      <PageTitle title="Own Gift Wishes" className="pb-4" />
      <OwnGiftsPageContent gifts={gifts} />
    </div>
  );
};

export default OwnGiftsPage;
