import Button from "@/components/Button/Button";
import ImageUpload from "@/components/Form/ImageUpload/ImageUpload";
import LinkInput from "@/components/Form/LinkInput/LinkInput";
import NumberInput from "@/components/Form/NumberInput/NumberInput";
import TextArea from "@/components/Form/TextArea/TextArea";
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
      <TextArea
        label="Description"
        name="description"
        placeholder="e.g., A thrilling mystery novel"
        required={false}
        rows={4}
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
      <ImageUpload
        name="imageUrl"
        label="Image"
        defaultValue={formData?.get("imageUrl") as string}
      />
    </div>

    <Button
      type="submit"
      size="large"
      variant="primary-gradient"
      className="w-full my-4 mt-8 shadow-sm"
      disabled={pending}
    >
      Save Gift
    </Button>
  </form>
);

export default GiftForm;
