"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { FieldGroup } from "@/components/ui/field";
import { AuthCard } from "@/components/auth/auth-card";
import { CustomFormField } from "@/components/ui/custom-form-field";
import { signupSchema, SignupFormValues } from "@/lib/schemas/auth-schema";

const SignupPage = () => {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(data: SignupFormValues) {
    toast("Account created:", {
      description: (
        <pre className="bg-zinc-950 text-zinc-50 mt-2 w-[300px] overflow-x-auto rounded-md p-4 text-xs">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <AuthCard
      title="Create Account"
      description="Join us today! Enter your details below."
      submitLabel="Sign Up"
      isSubmitting={form.formState.isSubmitting}
    >
      <form id="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <CustomFormField
            control={form.control}
            name="name"
            placeholder="Full Name"
            autoComplete="name"
          />
          <CustomFormField
            control={form.control}
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <CustomFormField
            control={form.control}
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            description="Must start with a letter and contain at least 8 characters (1 uppercase, 1 number, 1 special)."
          />
          <CustomFormField
            control={form.control}
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
          />
        </FieldGroup>
      </form>
    </AuthCard>
  );
};

export default SignupPage;
