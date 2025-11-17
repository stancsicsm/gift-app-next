import Button from "@/components/Button/Button";
import LinkInput from "@/components/Form/LinkInput/LinkInput";
import NumberInput from "@/components/Form/NumberInput/NumberInput";
import TextInput from "@/components/Form/TextInput/TextInput";

type GiftFormProps = {
  action: (payload: FormData) => void;
  formData?: FormData;
  pending?: boolean;
};

const GiftForm = ({ action, formData, pending }: GiftFormProps) => (
  <form action={action}>
    <div className="flex flex-col gap-2">
      <TextInput
        label="Gift Name"
        name="name"
        placeholder="e.g., A new book"
        errorMessage="Please enter the gift name"
        required={true}
        formData={formData}
      />
      <TextInput
        label="Description"
        name="description"
        placeholder="e.g., A thrilling mystery novel"
        required={false}
        formData={formData}
      />
      <NumberInput
        label="Price"
        name="price"
        placeholder="e.g., 25"
        required={false}
        formData={formData}
      />
      <LinkInput formData={formData} />
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
);

export default GiftForm;
