import { Gift } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Gift
        // primary color
        size="80"
        color="#4cabe6"
        className="animate-spin-elastic"
      />
    </div>
  );
};

export default LoadingPage;
