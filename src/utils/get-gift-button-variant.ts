import { assertUnreachable } from "@/utils/assert-unreachable";

export const getGiftButtonVariant = (reservedBy: "me" | "other" | null) => {
  switch (reservedBy) {
    case "me":
      return "danger-gradient";
    case "other":
      return "disabled";
    case null:
      return "primary-gradient";
    default:
      assertUnreachable(reservedBy);
  }
};
