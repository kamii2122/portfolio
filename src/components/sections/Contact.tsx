"use client";

import { useState, type FormEvent } from "react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  WhatsAppIcon,
  CheckIcon,
  ErrorIcon,
} from "@/components/ui/Icons";
import { personal } from "@/data/personal";

type FormState = "idle" | "submitting" | "success" | "error";

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 transition focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600/20";
const labelClasses = "mb-1.5 block text-sm font-medium text-navy-900";
const errorClasses = "mt-1.5 flex items-center gap-1.5 text-sm text-red-600";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Errors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");
    const isPlaceholder =
      personal.formspreeEndpoint === "https://formspree.io/f/YOUR_FORM_ID";

    if (isPlaceholder) {
      // Formspree endpoint not configured yet. Simulate a short delay then
      // show a clear message pointing to the configuration step.
      setTimeout(() => setFormState("success"), 600);
      return;
    }

    try {
      const response = await fetch(personal.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: personal.social.github,
      icon: GithubIcon,
      available: Boolean(personal.social.github),
    },
    {
      label: "LinkedIn",
      href: personal.social.linkedin,
      icon: LinkedinIcon,
      available: Boolean(personal.social.linkedin),
    },
    {
      label: "Twitter",
      href: personal.social.twitter,
      icon: TwitterIcon,
      available: Boolean(personal.social.twitter),
    },
    {
      label: "WhatsApp",
      href: personal.social.whatsapp
        ? `https://wa.me/${personal.social.whatsapp}`
        : "",
      icon: WhatsAppIcon,
      available: Boolean(personal.social.whatsapp),
    },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind, an opportunity to share, or just want to say hello? Drop me a message."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <h3 className="mb-4 text-xl font-semibold">Get in touch</h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                I'm open to internship opportunities, junior developer roles,
                freelance work, and collaborations. I'll reply as soon as I
                can.
              </p>

              <div className="space-y-3">
                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 text-sm font-medium text-navy-900 transition hover:text-violet-700"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                      <MailIcon className="h-4 w-4" />
                    </span>
                    {personal.email}
                  </a>
                )}

                {socialLinks.map((link) =>
                  link.available ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-medium text-navy-900 transition hover:text-violet-700"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                        <link.icon className="h-4 w-4" />
                      </span>
                      {link.label}
                    </a>
                  ) : (
                    <div
                      key={link.label}
                      className="flex items-center gap-3 text-sm text-slate-400"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                        <link.icon className="h-4 w-4" />
                      </span>
                      <span className="italic">
                        [EDIT] {link.label} URL
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1 lg:col-span-3">
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClasses} ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className={errorClasses}>
                        <ErrorIcon className="h-3.5 w-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClasses} ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className={errorClasses}>
                        <ErrorIcon className="h-3.5 w-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className={labelClasses}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                    placeholder="What's this about?"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className={errorClasses}>
                      <ErrorIcon className="h-3.5 w-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-y ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className={errorClasses}>
                      <ErrorIcon className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-8">
                  <Button type="submit" fullWidth disabled={formState === "submitting"}>
                    {formState === "submitting" ? "Sending..." : "Send Message"}
                  </Button>

                  {formState === "success" && (
                    <div
                      role="status"
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                    >
                      <CheckIcon className="h-4 w-4" />
                      Message sent! I'll get back to you soon.
                    </div>
                  )}
                  {formState === "error" && (
                    <div
                      role="alert"
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                    >
                      <ErrorIcon className="h-4 w-4" />
                      Something went wrong sending your message. Please try
                      again.
                    </div>
                  )}

                  {personal.formspreeEndpoint ===
                    "https://formspree.io/f/YOUR_FORM_ID" && (
                    <p className="mt-4 text-center text-xs italic text-slate-400">
                      [EDIT] Create a free account at{" "}
                      <a
                        href="https://formspree.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 underline"
                      >
                        formspree.io
                      </a>{" "}
                      and paste your form ID into{" "}
                      <code className="rounded bg-slate-100 px-1">
                        src/data/personal.ts
                      </code>
                    </p>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}