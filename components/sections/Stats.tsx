import React from "react";
import { Divider } from "../ui/Divider";

interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  subtitle?: string;
  items: StatItem[];
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  valueColor?: string;
  labelColor?: string;
  descriptionColor?: string;
  dividerColor?: string;
  showDividers?: boolean;
}

export function Stats({
  title,
  subtitle,
  items,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  valueColor = "text-blue-600",
  labelColor = "text-gray-800",
  descriptionColor = "text-gray-400",
  dividerColor = "border-gray-200",
  showDividers = true,
}: StatsProps) {
  return (
    <section className={`${bgColor} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColor}`}>{subtitle}</p>}
          </div>
        )}

        <div className="flex flex-wrap justify-center items-center gap-0">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center px-10 py-6">
                <span className={`text-4xl md:text-5xl font-bold ${valueColor}`}>{item.value}</span>
                <span className={`mt-1 text-sm font-semibold uppercase tracking-wide ${labelColor}`}>{item.label}</span>
                {item.description && (
                  <span className={`mt-1 text-xs max-w-[140px] ${descriptionColor}`}>{item.description}</span>
                )}
              </div>
              {showDividers && i < items.length - 1 && (
                <div className="hidden md:block h-16">
                  <Divider orientation="vertical" color={dividerColor} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
