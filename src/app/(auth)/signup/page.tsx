"use client";

import Link from "next/link";
import { useActionState } from "react";
import AuthPageError from "@/app/(auth)/_components/AuthPageError/AuthPageError";
import AuthPageHeader from "@/app/(auth)/_components/AuthPageHeader/AuthPageHeader";
import EmailInput from "@/app/(auth)/_components/EmailInput/EmailInput";
import NameInput from "@/app/(auth)/_components/NameInput/NameInput";
import PasswordInput from "@/app/(auth)/_components/PasswordInput/PasswordInput";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import signupAction from "@/services/auth/signupAction";

const SignUpPage = () => {
  const [state, formAction, pending] = useActionState(signupAction, null);

  return (
    <div className="flex flex-col p-4 gap-4">
      <AuthPageHeader title="Create Account" />
      <AuthPageError errorMessage={state?.error} />

      <form action={formAction}>
        <div className="flex flex-col gap-2">
          <NameInput formData={state?.payload} />
          <EmailInput formData={state?.payload} />
          <PasswordInput formData={state?.payload} />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            errorMessage="Passwords must match"
            formData={state?.payload}
          />
        </div>

        <Button
          type="submit"
          size="large"
          variant="primary-gradient"
          className="w-full my-4 shadow-sm"
          disabled={pending}
        >
          {pending ? "Signing up..." : "Sign Up"}
        </Button>
      </form>

      <div className="divider">OR</div>
      <div className="flex flex-row gap-1 justify-center">
        <Label>Already have an account?</Label>
        <Link href="/login">
          <Label className="link link-primary text-right">Login</Label>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
