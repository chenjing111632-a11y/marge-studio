"use client";

import { useState, FormEvent } from "react";

interface NewsletterFormProps {
  variant?: "default" | "compact";
  title?: string;
}

export function NewsletterForm({ variant = "default", title }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Welcome to the studio! Check your inbox for your 10% off code.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className={isCompact ? "" : "mx-auto max-w-md"}>
      {title && (
        <h3 className="mb-3 font-serif text-xl font-semibold text-ink">{title}</h3>
      )}

      <div className={`flex gap-3 ${isCompact ? "flex-col" : "flex-col sm:flex-row"}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 rounded-button border border-cream bg-surface-card px-4 py-3 text-sm text-ink placeholder:text-ink-light focus:border-blush focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-button bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {status === "submitting" ? "Joining..." : "Join"}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-3 text-sm text-sage-deep">{message}</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-blush-deep">{message}</p>
      )}
    </form>
  );
}
