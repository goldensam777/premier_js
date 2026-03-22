import React from "react";
import { Card } from "../ui/Card";

interface FeatureItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  id?: string;
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  cardBgColor?: string;
  cardBorderColor?: string;
  itemTitleColor?: string;
  itemDescColor?: string;
  iconBgColor?: string;
  hoverable?: boolean;
}

export function Features({
  id,
  title,
  subtitle,
  items,
  columns = 3,
  bgColor = "bg-gray-50",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  cardBgColor = "bg-white",
  cardBorderColor = "border-gray-200",
  itemTitleColor = "text-gray-800",
  itemDescColor = "text-gray-500",
  iconBgColor = "bg-blue-50",
  hoverable = true,
}: FeaturesProps) {
  const colStyles = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section id={id} className={`${bgColor} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColor}`}>{subtitle}</p>}
          </div>
        )}

        <div className={`grid gap-6 ${colStyles[columns]}`}>
          {items.map((item, i) => (
            <Card
              key={i}
              bgColor={cardBgColor}
              borderColor={cardBorderColor}
              hoverable={hoverable}
              shadow="sm"
            >
              {item.icon && (
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${iconBgColor} mb-4`}>
                  {item.icon}
                </div>
              )}
              <h3 className={`font-semibold text-base mb-2 ${itemTitleColor}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${itemDescColor}`}>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
