"use client";

import Link from "next/link";
import AuthPageHeader from "@/app/(auth)/_components/AuthPageHeader/AuthPageHeader";
import EmailInput from "@/app/(auth)/_components/EmailInput/EmailInput";
import NameInput from "@/app/(auth)/_components/NameInput/NameInput";
import PasswordInput from "@/app/(auth)/_components/PasswordInput/PasswordInput";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";

const SignUpPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <AuthPageHeader title="Create Account" />

      <form>
        <div className="flex flex-col gap-2">
          <NameInput />
          <EmailInput />
          <PasswordInput />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            errorMessage="Passwords must match"
          />
        </div>

        <Button
          type="submit"
          size="large"
          variant="primary-gradient"
          className="w-full my-4 shadow-sm"
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
