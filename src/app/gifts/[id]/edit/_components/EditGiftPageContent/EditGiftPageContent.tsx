"use client";

import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";
import GiftForm from "@/components/Form/GiftForm/GiftForm";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { createOrEditGiftAction } from "@/services/gifts/createOrEditGiftAction";
import type { Gift } from "@/services/gifts/gift.types";
import type { User } from "@/services/users/user.types";

type GiftPageContentProps = {
  gift?: Gift;
  currentUser: User;
};

const EditGiftPageContent = ({ gift, currentUser }: GiftPageContentProps) => {
  let initialFormData: FormData | undefined;
  if (gift) {
    initialFormData = new FormData();
    initialFormData.set("name", gift.name);
    if (gift.description) initialFormData.set("description", gift.description);
    if (gift.price !== null)
      initialFormData.set("price", gift.price.toString());
    if (gift.link) initialFormData.set("link", gift.link);
  }

  const [state, formAction, pending] = useActionState(
    createOrEditGiftAction.bind(null, "edit", gift?.id || null),
    initialFormData ? { payload: initialFormData } : null,
  );

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  if (!gift) {
    return <GiftMessage message="Gift not found" />;
  }
  if (currentUser?.id !== gift.createdBy) {
    return (
      <GiftMessage message="You do not have permission to edit this gift." />
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <StyledToaster />
      <GiftForm
        action={formAction}
        formData={state?.payload}
        pending={pending}
      />
    </div>
  );
};

export default EditGiftPageContent;
