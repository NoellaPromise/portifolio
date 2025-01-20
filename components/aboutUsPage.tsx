"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutSection = () => {
  // State for section toggles
  const [openSections, setOpenSections] = useState({
    engineering: true,
    product: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">About Me.</h1>

      {/* Engineering Section */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => toggleSection("engineering")}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <h2 className="text-xl font-semibold">Engineering</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-black hover:underline">
              View Github
            </a>
            {openSections.engineering ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>
        </div>

        {openSections.engineering && (
          <p className="text-gray-600 leading-relaxed pl-4">
            The power of first impressions cannot be underestimated, and the
            gateway to capitalizing on them lies in exceptional website design.
            An outstanding website transcends mere aesthetics and extends its
            influence to encompass seamless functionality and user-friendly
            navigation. Drawing upon my expertise as a seasoned programmer, I
            possess the unique ability to tackle intricate technical challenges
            while crafting websites that exude sleekness and visual allure.
            Moreover, my extensive knowledge of recognized technical standards
            is complemented by my proficiency in modern building practices,
            ensuring that every aspect of your website is finely tuned to
            perfection.
          </p>
        )}
      </div>

      {/* Product Section */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => toggleSection("product")}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <h2 className="text-xl font-semibold">Product</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-black hover:underline">
              View Products
            </a>
            {openSections.product ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>
        </div>

        {openSections.product && (
          <p className="text-gray-600 leading-relaxed pl-4">
            While I may not fit the conventional mold of a product manager, my
            diverse skill set in research, product design, and product
            coordination empowers me to drive the growth of a product from its
            inception. As an exceptional analytical thinker, I possess the
            ability to uphold the product's vision throughout its entire
            journey, effectively bridging the technical and product aspects. By
            leveraging my expertise, I can navigate the path from 0 to 1,
            ensuring the product's success at every stage.
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
