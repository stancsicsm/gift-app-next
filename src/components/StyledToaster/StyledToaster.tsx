import { Toaster } from "react-hot-toast";

const StyledToaster = () => (
  <Toaster
    position="bottom-center"
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
        duration: 4000,
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
        duration: 4000,
      },
    }}
  />
);

export default StyledToaster;
