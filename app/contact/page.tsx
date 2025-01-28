"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { ContactForm } from "@/components/contactForm/contactForm";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold text-black">Contact.</h1>
          <p>
            Get in touch or email me directly on{" "}
            <span className="font-medium text-black">
              dushakenoella@gmail.com
            </span>
          </p>

          <ContactForm />
        </div>
        <div className="flex gap-5 max-w-4xl mx-auto px-4 py-16 ">
          <Link href="/" className="hover:underline">
         Go back home
          </Link>
          <Link
            href="/"
            className="animate-[moveArrow_1s_ease-in-out_infinite]"
          >
            <ArrowRight />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
