import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badgeLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center";
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  badgeLabel,
  ctaLabel,
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref = "#",
  imageSrc,
  imageAlt = "",
  align = "center",
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  subtitleColor = "text-blue-600",
  descriptionColor = "text-gray-500",
  badgeBgColor = "bg-blue-50",
  badgeTextColor = "text-blue-700",
}: HeroProps) {
  const isCenter = align === "center";

  return (
    <section className={`${bgColor} py-20 px-6`}>
      <div className={`max-w-6xl mx-auto ${isCenter ? "text-center" : "text-left"}`}>
        <div className={`${isCenter ? "flex flex-col items-center" : ""} gap-6`}>

          {badgeLabel && (
            <Badge bgColor={badgeBgColor} textColor={badgeTextColor} borderColor="border-transparent">
              {badgeLabel}
            </Badge>
          )}

          <h1 className={`text-4xl md:text-6xl font-bold leading-tight tracking-tight ${titleColor}`}>
            {title}
          </h1>

          {subtitle && (
            <p className={`text-xl md:text-2xl font-medium ${subtitleColor}`}>
              {subtitle}
            </p>
          )}

          {description && (
            <p className={`text-base md:text-lg max-w-2xl ${descriptionColor}`}>
              {description}
            </p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div className={`flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""} mt-2`}>
              {ctaLabel && (
                <a href={ctaHref}>
                  <Button isDefault={false}>{ctaLabel}</Button>
                </a>
              )}
              {secondaryCtaLabel && (
                <a href={secondaryCtaHref}>
                  <Button>{secondaryCtaLabel}</Button>
                </a>
              )}
            </div>
          )}

          {imageSrc && (
            <div className="mt-10 w-full max-w-4xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-xl border border-gray-100"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
