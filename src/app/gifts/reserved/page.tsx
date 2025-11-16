import ReservedGiftsPageContent from "@/app/gifts/reserved/_components/ReservedGiftsPageContent/ReservedGiftsPageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGifts } from "@/services/gifts/getGifts";

const ReservedGiftsPage = async () => {
  const gifts = await getGifts({ filter: "my_reservations" });

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle title="My Reservations" className="pb-4" />
      <ReservedGiftsPageContent gifts={gifts} />
    </div>
  );
};

export default ReservedGiftsPage;
