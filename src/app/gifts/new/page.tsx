"use client";

import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";
import GiftForm from "@/components/Form/GiftForm/GiftForm";
import PageTitle from "@/components/PageTitle/PageTitle";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { createOrEditGiftAction } from "@/services/gifts/createOrEditGiftAction";

const NewGiftPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle title="Add a Wish" backButton className="pb-4" />
      <NewGiftPageContent />
    </div>
  );
};

export default NewGiftPage;

const NewGiftPageContent = () => {
  const [state, formAction, pending] = useActionState(
    createOrEditGiftAction.bind(null, "create", null),
    null,
  );

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

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
