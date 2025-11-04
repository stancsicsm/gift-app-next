"use client";

import clsx from "clsx";
import { CircleX, Gift, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import loginAction from "@/services/auth/loginAction";

const LoginPage = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [state, formAction, pending] = useActionState(loginAction, null);

  const handleGiftClick = () => {
    setIsAnimationActive(true);
    setTimeout(() => setIsAnimationActive(false), 800); // Reset after animation duration
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: it should only run once on mount
  useEffect(() => {
    handleGiftClick();
  }, []);

  return (
    <div className="flex flex-col p-4 gap-4">
      <div
        className={clsx(
          "w-fit mx-auto mt-4 p-3 bg-secondary rounded-full",
          isAnimationActive &&
            (Math.random() < 0.5 ? "animate-spin-once" : "animate-bounce-once"),
        )}
        onClick={handleGiftClick}
      >
        <Gift size="40" className="text-primary" />
      </div>
      <Label size="xx-large" weight="semi-bold" className="my-4 text-center">
        Welcome Back!
      </Label>

      {state?.error && (
        <div className="flex flex-row gap-2 alert alert-error rounded-full">
          <CircleX />
          <Label className="text-error-content">{state.error}</Label>
        </div>
      )}

      <form action={formAction}>
        <div>
          <Label size="large" className="pb-2">
            Email Address
          </Label>
          <label className="input input-lg validator w-full">
            <Mail />
            <input
              name="email"
              type="email"
              placeholder="email@example.com"
              required
            />
          </label>
          <div className="validator-hint hidden badge badge-xl badge-error">
            <Label className="text-error-content">
              Please enter a valid email address
            </Label>
          </div>
        </div>

        {/* TODO: add show password toggle */}
        <div>
          <Label size="large" className="pb-2">
            Password
          </Label>
          <label className="input input-lg validator w-full">
            <Mail />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              minLength={1}
            />
          </label>
          <div className="validator-hint hidden badge badge-xl badge-error">
            <Label className="text-error-content">
              Please enter your password
            </Label>
          </div>
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
        <Link href="/register">
          <Label className="link link-primary text-right">Sign up</Label>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
