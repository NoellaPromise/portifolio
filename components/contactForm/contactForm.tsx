"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { FormInput } from "@/components/contactForm/formInput";
import emailjs from "@emailjs/browser";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: string; value: string}}) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_fdmi5jl";
    const templateID = "template_ijrdq2v";
    const userID = "n3uTh1bFyMkI-n4a-";

    try {
      emailjs.send(serviceID, templateID, formData, userID);

      setFormData(INITIAL_FORM_STATE);

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormInput
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        rows={undefined}
      />

      <FormInput
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        rows={undefined}
      />

      <FormInput
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        rows={undefined}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-4 bg-black dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        Send Message
        <Send size={20} />
      </button>
    </form>
  );
};
