import { toast } from "react-hot-toast";
import type { ReservedByOptions } from "@/services/gifts/gift.types";
import { reserveGiftAction } from "@/services/gifts/reserveGiftAction";
import { assertUnreachable } from "@/utils/assert-unreachable";

export const handleGiftReservation = async (
  giftId: number,
  reservedBy: ReservedByOptions | null,
) => {
  switch (reservedBy) {
    case null: {
      const reserveResult = await reserveGiftAction(giftId, "reserve");
      if (reserveResult.success) {
        toast.success(reserveResult.message);
      } else {
        toast.error(reserveResult.error);
      }
      break;
    }

    case "me": {
      const cancelResult = await reserveGiftAction(giftId, "cancel");
      if (cancelResult.success) {
        toast.success(cancelResult.message);
      } else {
        toast.error(cancelResult.error);
      }
      break;
    }

    case "other":
      break;

    default:
      assertUnreachable(reservedBy);
  }
};
