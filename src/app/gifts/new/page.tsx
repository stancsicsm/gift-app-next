"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import Button from "@/components/Button/Button";
import ErrorLabel from "@/components/ErrorLabel/ErrorLabel";
import LinkInput from "@/components/Form/LinkInput/LinkInput";
import TextInput from "@/components/Form/TextInput/TextInput";
import PageTitle from "@/components/PageTitle/PageTitle";
import { newGiftAction } from "@/services/gifts/newGiftAction";

const NewGiftPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle
        title="Add a Wish"
        leftSlot={
          <Link href="/">
            <Button variant="ghost" size="small">
              <X />
            </Button>
          </Link>
        }
        className="pb-4"
      />
      <NewGiftPageContent />
    </div>
  );
};

export default NewGiftPage;

const NewGiftPageContent = () => {
  const [state, formAction, pending] = useActionState(newGiftAction, null);

  return (
    <div className="flex flex-col gap-4 w-full">
      <ErrorLabel errorMessage={state?.error} />

      <form action={formAction}>
        <div className="flex flex-col gap-2">
          <TextInput
            label="Gift Name"
            name="name"
            placeholder="e.g., A new book"
            errorMessage="Please enter the gift name"
            required={true}
            formData={state?.payload}
          />
          <TextInput
            label="Description"
            name="description"
            placeholder="e.g., A thrilling mystery novel"
            required={false}
            formData={state?.payload}
          />
          <LinkInput formData={state?.payload} />
        </div>

        <Button
          type="submit"
          size="large"
          variant="primary-gradient"
          className="w-full my-4 shadow-sm"
          disabled={pending}
        >
          Save Gift
        </Button>
      </form>
    </div>
  );
};
