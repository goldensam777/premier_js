import React from "react";
import { Divider } from "../ui/Divider";

interface FooterLinkGroup {
  section: string;
  items: { label: string; href: string }[];
}

interface FooterProps {
  logo: string;
  logoSrc?: string;
  description?: string;
  linkGroups?: FooterLinkGroup[];
  copyright?: string;
  bgColor?: string;
  borderColor?: string;
  logoColor?: string;
  descriptionColor?: string;
  sectionTitleColor?: string;
  linkColor?: string;
  copyrightColor?: string;
}

export function Footer({
  logo,
  logoSrc,
  description,
  linkGroups = [],
  copyright,
  bgColor = "bg-gray-900",
  borderColor = "border-gray-800",
  logoColor = "text-white",
  descriptionColor = "text-gray-400",
  sectionTitleColor = "text-gray-200",
  linkColor = "text-gray-400",
  copyrightColor = "text-gray-500",
}: FooterProps) {
  return (
    <footer className={`${bgColor} px-6 pt-16 pb-8`}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 gap-10 ${linkGroups.length > 0 ? "md:grid-cols-[2fr_repeat(3,1fr)]" : ""}`}>
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className={`font-bold text-xl ${logoColor}`}>
              {logoSrc ? <img src={logoSrc} alt={logo} className="h-8" /> : logo}
            </a>
            {description && (
              <p className={`text-sm leading-relaxed max-w-xs ${descriptionColor}`}>{description}</p>
            )}
          </div>

          {/* Link groups */}
          {linkGroups.map((group, i) => (
            <div key={i} className="flex flex-col gap-3">
              <p className={`text-xs font-semibold uppercase tracking-widest ${sectionTitleColor}`}>
                {group.section}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className={`text-sm ${linkColor} hover:text-white transition-colors`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {copyright && (
          <>
            <div className="mt-12">
              <Divider color={borderColor} />
            </div>
            <p className={`mt-6 text-xs text-center ${copyrightColor}`}>{copyright}</p>
          </>
        )}
      </div>
    </footer>
  );
}
