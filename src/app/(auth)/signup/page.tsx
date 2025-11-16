"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";
import AuthPageHeader from "@/app/(auth)/_components/AuthPageHeader/AuthPageHeader";
import Button from "@/components/Button/Button";
import EmailInput from "@/components/Form/EmailInput/EmailInput";
import PasswordInput from "@/components/Form/PasswordInput/PasswordInput";
import TextInput from "@/components/Form/TextInput/TextInput";
import Label from "@/components/Label/Label";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { signupAction } from "@/services/auth/signupAction";

const SignUpPage = () => {
  const [state, formAction, pending] = useActionState(signupAction, null);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="flex flex-col p-4 gap-4">
      <StyledToaster />
      <AuthPageHeader title="Create Account" />

      <form action={formAction}>
        <div className="flex flex-col gap-2">
          <TextInput
            label="Name"
            name="name"
            placeholder="Your Name"
            errorMessage="Please enter your name"
            required={true}
            iconSlot={<User />}
            formData={state?.payload}
          />
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
          Sign Up
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
