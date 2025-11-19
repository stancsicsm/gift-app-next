import Label from "@/components/Label/Label";

type TextAreaProps = {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  rows?: number;
  formData?: FormData;
};

const TextArea = ({
  label,
  name,
  placeholder,
  required,
  rows = 4,
  formData,
}: TextAreaProps) => {
  const defaultValue = formData?.get(name);
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    <div>
      <Label size="large" className="pb-1">
        {label}
      </Label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        defaultValue={validDefaultValue}
        className="textarea textarea-lg w-full rounded-xl"
        // className="w-full resize-y"
      />
    </div>
  );
};

export default TextArea;
