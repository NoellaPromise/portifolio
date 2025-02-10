"use client";
import React from "react";

interface FormInputProps {
  type?: "text" | "email" | "textarea";
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  rows?: number;
}

export const FormInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  rows,
}: FormInputProps) => {
  const baseClasses =
    "w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors dark:bg-gray-800";

  return type === "textarea" ? (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows || 4}
      className={baseClasses}
      required
    />
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={baseClasses}
      required
    />
  );
};
