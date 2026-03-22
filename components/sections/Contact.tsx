"use client";
import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

interface ContactProps {
  title?: string;
  subtitle?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  ctaLabel?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  inputBorderColor?: string;
  inputFocusColor?: string;
  labelColor?: string;
}

export function Contact({
  title,
  subtitle,
  namePlaceholder = "Votre nom",
  emailPlaceholder = "Votre email",
  messagePlaceholder = "Votre message...",
  ctaLabel = "Envoyer",
  onSubmit,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  inputBorderColor = "border-gray-300",
  inputFocusColor = "focus:ring-blue-500",
  labelColor = "text-gray-700",
}: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email, message });
  };

  return (
    <section className={`${bgColor} py-20 px-6`}>
      <div className="max-w-xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg ${subtitleColor}`}>{subtitle}</p>}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={namePlaceholder}
            borderColor={inputBorderColor}
            focusRingColor={inputFocusColor}
            labelColor={labelColor}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            borderColor={inputBorderColor}
            focusRingColor={inputFocusColor}
            labelColor={labelColor}
          />
          <Textarea
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={messagePlaceholder}
            rows={5}
            borderColor={inputBorderColor}
            focusRingColor={inputFocusColor}
            labelColor={labelColor}
          />
          <Button isDefault={false} className="w-full justify-center">
            {ctaLabel}
          </Button>
        </form>
      </div>
    </section>
  );
}
