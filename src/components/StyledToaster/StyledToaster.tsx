import { Toaster } from "react-hot-toast";

const StyledToaster = () => (
  <Toaster
    position="bottom-center"
    containerClassName="mb-16"
    toastOptions={{
      success: {
        style: {
          color: "#198109",
          backgroundColor: "#afd89e",
          borderRadius: "9999px",
        },
        iconTheme: {
          primary: "#198109",
          secondary: "#afd89e",
        },
      },
      error: {
        style: {
          color: "#f43f5e",
          backgroundColor: "#fdd9df",
          borderRadius: "9999px",
        },
        iconTheme: {
          primary: "#f43f5e",
          secondary: "#fdd9df",
        },
      },
    }}
  />
);

export default StyledToaster;
