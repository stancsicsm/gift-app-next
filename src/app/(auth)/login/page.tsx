"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";
import AuthPageHeader from "@/app/(auth)/_components/AuthPageHeader/AuthPageHeader";
import Button from "@/components/Button/Button";
import EmailInput from "@/components/Form/EmailInput/EmailInput";
import PasswordInput from "@/components/Form/PasswordInput/PasswordInput";
import Label from "@/components/Label/Label";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { loginAction } from "@/services/auth/loginAction";

const LoginPage = () => {
  const [state, formAction, pending] = useActionState(loginAction, null);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="flex flex-col p-4 gap-4">
      <StyledToaster />
      <AuthPageHeader title="Welcome Back" />

      <form action={formAction}>
        <div className="flex flex-col gap-2">
          <EmailInput formData={state?.payload} />
          <PasswordInput formData={state?.payload} />
        </div>

        <Label className="link link-primary text-right">
          Forgot your password?
        </Label>

        <Button
          type="submit"
          size="large"
          variant="primary-gradient"
          className="w-full my-4 shadow-sm"
          disabled={pending}
        >
          Login
        </Button>
      </form>

      <div className="divider">OR</div>
      <div className="flex flex-row gap-1 justify-center">
        <Label>Don't have an account?</Label>
        <Link href="/signup">
          <Label className="link link-primary text-right">Sign up</Label>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
