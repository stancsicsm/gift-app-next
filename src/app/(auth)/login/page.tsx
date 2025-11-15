"use client";

import Link from "next/link";
import { useActionState } from "react";
import AuthPageError from "@/app/(auth)/_components/AuthPageError/AuthPageError";
import AuthPageHeader from "@/app/(auth)/_components/AuthPageHeader/AuthPageHeader";
import EmailInput from "@/app/(auth)/_components/EmailInput/EmailInput";
import PasswordInput from "@/app/(auth)/_components/PasswordInput/PasswordInput";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import loginAction from "@/services/auth/loginAction";

const LoginPage = () => {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="flex flex-col p-4 gap-4">
      <AuthPageHeader title="Welcome Back" />
      <AuthPageError errorMessage={state?.error} />

      <form action={formAction}>
        <div className="flex flex-col gap-2">
          <EmailInput />
          <PasswordInput />
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
          {pending ? "Logging in..." : "Login"}
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
