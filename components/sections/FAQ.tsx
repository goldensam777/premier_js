import React from "react";
import { Accordion } from "../ui/Accordion";

interface FAQItem {
  title: string;
  content: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  borderColor?: string;
  headerBgColor?: string;
  headerTextColor?: string;
  contentBgColor?: string;
  contentTextColor?: string;
  iconColor?: string;
  allowMultiple?: boolean;
}

export function FAQ({
  title,
  subtitle,
  items,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  borderColor = "border-gray-200",
  headerBgColor = "bg-white",
  headerTextColor = "text-gray-800",
  contentBgColor = "bg-gray-50",
  contentTextColor = "text-gray-600",
  iconColor = "text-gray-400",
  allowMultiple = false,
}: FAQProps) {
  return (
    <section className={`${bgColor} py-20 px-6`}>
      <div className="max-w-3xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg ${subtitleColor}`}>{subtitle}</p>}
          </div>
        )}

        <Accordion
          items={items}
          borderColor={borderColor}
          headerBgColor={headerBgColor}
          headerTextColor={headerTextColor}
          contentBgColor={contentBgColor}
          contentTextColor={contentTextColor}
          iconColor={iconColor}
          allowMultiple={allowMultiple}
        />
      </div>
    </section>
  );
}
