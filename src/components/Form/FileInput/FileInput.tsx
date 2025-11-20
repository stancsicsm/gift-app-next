type FileInputProps = {
  name: string;
  required?: boolean;
  accept?: string;
};

const FileInput = ({
  name,
  required = false,
  accept = "image/*",
}: FileInputProps) => {
  return (
    <input
      type="file"
      id={name}
      name={name}
      accept={accept}
      required={required}
      className="file-input w-full"
    />
  );
};

export default FileInput;
