"use client";
import React from "react";

export const FormInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  rows,
}) => {
  const baseClasses =
    "w-full p-4  rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
  

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
