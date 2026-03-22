import React from "react";
import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";

interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  avatarSrc?: string;
  initials?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  items: TestimonialItem[];
  columns?: 2 | 3;
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  cardBgColor?: string;
  cardBorderColor?: string;
  quoteColor?: string;
  nameColor?: string;
  roleColor?: string;
  avatarBgColor?: string;
  avatarTextColor?: string;
}

export function Testimonials({
  title,
  subtitle,
  items,
  columns = 3,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  cardBgColor = "bg-gray-50",
  cardBorderColor = "border-gray-200",
  quoteColor = "text-gray-600",
  nameColor = "text-gray-900",
  roleColor = "text-gray-400",
  avatarBgColor = "bg-blue-100",
  avatarTextColor = "text-blue-700",
}: TestimonialsProps) {
  const colStyles = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <section className={`${bgColor} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColor}`}>{subtitle}</p>}
          </div>
        )}

        <div className={`grid gap-6 ${colStyles[columns]}`}>
          {items.map((item, i) => (
            <Card key={i} bgColor={cardBgColor} borderColor={cardBorderColor} shadow="sm">
              <p className={`text-sm leading-relaxed mb-5 ${quoteColor}`}>"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar
                  src={item.avatarSrc}
                  initials={item.initials ?? item.name}
                  size="sm"
                  bgColor={avatarBgColor}
                  textColor={avatarTextColor}
                />
                <div>
                  <p className={`text-sm font-semibold ${nameColor}`}>{item.name}</p>
                  {item.role && <p className={`text-xs ${roleColor}`}>{item.role}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
