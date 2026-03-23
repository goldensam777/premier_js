import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface PricingPlan {
  name: string;
  price: number | string;
  period?: string;
  description?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  highlighted?: boolean;
  badgeLabel?: string;
}

interface PricingProps {
  id?: string;
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  cardBgColor?: string;
  cardBorderColor?: string;
  highlightedBgColor?: string;
  highlightedBorderColor?: string;
  planNameColor?: string;
  priceColor?: string;
  periodColor?: string;
  descColor?: string;
  featureColor?: string;
  checkColor?: string;
}

export function Pricing({
  id,
  title,
  subtitle,
  plans,
  bgColor = "bg-gray-50",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  cardBgColor = "bg-white",
  cardBorderColor = "border-gray-200",
  highlightedBgColor = "bg-blue-600",
  highlightedBorderColor = "border-blue-600",
  planNameColor = "text-gray-700",
  priceColor = "text-gray-900",
  periodColor = "text-gray-400",
  descColor = "text-gray-500",
  featureColor = "text-gray-600",
  checkColor = "text-blue-500",
}: PricingProps) {
  return (
    <section id={id} className={`${bgColor} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColor}`}>{subtitle}</p>}
          </div>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(plans.length, 3)} gap-6`}>
          {plans.map((plan, i) => {
            const isHighlighted = plan.highlighted;
            return (
              <Card
                key={i}
                bgColor={isHighlighted ? highlightedBgColor : cardBgColor}
                borderColor={isHighlighted ? highlightedBorderColor : cardBorderColor}
                shadow={isHighlighted ? "xl" : "sm"}
                className="flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-semibold text-sm ${isHighlighted ? "text-white/80" : planNameColor}`}>
                    {plan.name}
                  </span>
                  {plan.badgeLabel && (
                    <Badge
                      bgColor={isHighlighted ? "bg-white/20" : "bg-blue-50"}
                      textColor={isHighlighted ? "text-white" : "text-blue-700"}
                      borderColor="border-transparent"
                      size="sm"
                    >
                      {plan.badgeLabel}
                    </Badge>
                  )}
                </div>

                <div className="mb-4">
                  <span className={`text-4xl font-bold ${isHighlighted ? "text-white" : priceColor}`}>
                    {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ml-1 ${isHighlighted ? "text-white/60" : periodColor}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>

                {plan.description && (
                  <p className={`text-sm mb-6 ${isHighlighted ? "text-white/70" : descColor}`}>
                    {plan.description}
                  </p>
                )}

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${isHighlighted ? "text-white" : checkColor}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={isHighlighted ? "text-white/80" : featureColor}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaHref ?? "#"}>
                  <Button isDefault={isHighlighted ? false : true} className="w-full justify-center">
                    {plan.ctaLabel ?? "Commencer"}
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
