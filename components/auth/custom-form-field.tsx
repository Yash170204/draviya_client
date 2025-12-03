"use client";

import React from "react";
import { Control, FieldValues, Path, Controller } from "react-hook-form";
import { Field, FieldError, FieldDescription } from "@/components/ui/field"; // Adjust import based on your structure
import { Input } from "@/components/ui/input";

interface CustomFormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  description?: string;
}

/**
 * Reusable form field component that handles React Hook Form integration,
 * styling, error states, and accessibility description.
 */
export const CustomFormField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
  autoComplete,
  description,
}: CustomFormFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <div className="border border-zinc-300 rounded-lg px-4 py-3 focus-within:border-[#fcb65a] focus-within:ring-1 focus-within:ring-[#fcb65a] transition-all bg-white">
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="bg-transparent border-none outline-none shadow-none h-auto p-0 placeholder:text-zinc-400"
            />
          </div>

          {/* Render description if provided */}
          {description && (
            <FieldDescription className="mt-1 text-xs text-zinc-500 ml-1 leading-relaxed">
              {description}
            </FieldDescription>
          )}

          {/* Render error message if invalid */}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
