"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { FieldGroup } from "@/components/ui/field";
import { AuthCard } from "@/components/auth/auth-card"; // Adjust path
import { CustomFormField } from "@/components/ui/custom-form-field"; // Adjust path
import { loginSchema, LoginFormValues } from "@/lib/schemas/auth-schema"; // Adjust path

const LoginPage = () => {
  // Initialize form with Zod Resolver
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  function onSubmit(data: LoginFormValues) {
    toast("Login attempt:", {
      description: (
        <pre className="bg-zinc-950 text-zinc-50 mt-2 w-[300px] overflow-x-auto rounded-md p-4 text-xs">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <AuthCard
      title="Login"
      description="Welcome back! Enter your credentials to continue."
      submitLabel="Sign In"
      isSubmitting={form.formState.isSubmitting}
    >
      <form id="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="space-y-2">
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
            placeholder="••••••••"
            autoComplete="current-password"
            description="Must be between 6–32 characters."
          />
        </FieldGroup>
      </form>
    </AuthCard>
  );
};

export default LoginPage;
