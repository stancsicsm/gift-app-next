import Label from "@/components/Label/Label";

type TextInputProps = {
  formData?: FormData;
};

const LinkInput = ({ formData }: TextInputProps) => {
  const defaultValue = formData?.get("link");
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    <div>
      <Label size="large" className="pb-1">
        Link
      </Label>
      <label className="input input-lg validator w-full">
        <input
          name="link"
          type="url"
          placeholder="https://"
          // value="https://"
          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
          defaultValue={validDefaultValue}
        />
      </label>
      <p className="validator-hint hidden text-error-content text-base">
        Must be valid URL starting with http:// or https://
      </p>
    </div>
  );
};

export default LinkInput;
