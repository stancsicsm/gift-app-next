"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import StyledToaster from "@/components/StyledToaster/StyledToaster";

const MyGiftsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const success = searchParams.get("success");
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (success === "true" && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.success("Gift added successfully!");
      router.replace("/gifts/own");
    }
  }, [success, router]);

  return (
    <div>
      <StyledToaster />
      Own Gifts Page
    </div>
  );
};

export default MyGiftsPage;
