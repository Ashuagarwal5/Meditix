"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fieldClass = "mt-2 block w-full min-w-0 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 placeholder:text-slate-400 focus:border-[#00788a] focus:outline-none focus:ring-2 focus:ring-[#0198ae]/20";
const fields = [
  { name: "firstName", label: "First name", placeholder: "Alex", autoComplete: "given-name", required: true, maxLength: 80 },
  { name: "lastName", label: "Last name", placeholder: "Morgan", autoComplete: "family-name", required: true, maxLength: 80 },
  { name: "email", label: "Email address", placeholder: "alex@example.com", type: "email", autoComplete: "email", required: true, maxLength: 254 },
  { name: "phone", label: "Phone number", placeholder: "+91 98765 43210", type: "tel", autoComplete: "tel", maxLength: 30 },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: data.get("firstName").trim(),
      lastName: data.get("lastName").trim(),
      email: data.get("email").trim(),
      phone: data.get("phone").trim(),
      organization: data.get("organization").trim(),
      subject: data.get("subject"),
      message: data.get("message").trim(),
      consent: data.get("consent") === "on",
      source: "contact-page",
      submittedAt: new Date().toISOString(),
    };
    // Demo only. Replace with an API request when ready.
    console.log("Meditix contact form payload:", payload);
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_50px_-20px_rgba(1,152,174,0.25)] sm:p-8 lg:p-10">
      <h2 className="text-3xl font-medium tracking-tight">Send us a message</h2>
      <p id="form-description" className="mt-3 text-base leading-relaxed text-slate-600">We’d love to hear from you. Fields marked <span className="text-[#b84e00]">*</span> are required.</p>
      <form onSubmit={handleSubmit} onChange={() => submitted && setSubmitted(false)} aria-describedby="form-description demo-note" className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map(({ name, label, ...props }) => <label key={name} className="block min-w-0 text-sm font-semibold" htmlFor={name}>{label} {props.required ? <span className="text-[#b84e00]">*</span> : <span className="font-normal text-slate-500">(optional)</span>}<input className={fieldClass} id={name} name={name} pattern={name === "firstName" || name === "lastName" ? ".*\\S.*" : undefined} {...props} /></label>)}
        </div>
        <label className="block text-sm font-semibold" htmlFor="organization">Pharmacy / organization <span className="font-normal text-slate-500">(optional)</span><input className={fieldClass} id="organization" name="organization" autoComplete="organization" placeholder="Your pharmacy or company name" maxLength={160} /></label>
        <label className="block text-sm font-semibold" htmlFor="subject">How can we help? <span className="text-[#b84e00]">*</span><select className={fieldClass} id="subject" name="subject" defaultValue="" required><option value="" disabled>Select a topic</option><option value="demo">Book a product demo</option><option value="sales">Pricing and sales</option><option value="support">Product support</option><option value="partnership">Partnership opportunities</option><option value="general">General enquiry</option></select></label>
        <label className="block text-sm font-semibold" htmlFor="message">Your message <span className="text-[#b84e00]">*</span><textarea className={`${fieldClass} min-h-32 resize-y`} id="message" name="message" rows={4} placeholder="Tell us a little about what you need…" required maxLength={4000} onChange={(event) => event.target.setCustomValidity(event.target.value.trim() ? "" : "Please enter a message.")} /></label>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-600" htmlFor="consent"><input className="mt-1 h-4 w-4 shrink-0 accent-[#00788a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00788a]" id="consent" name="consent" type="checkbox" required /><span>I agree to be contacted by Meditix about my enquiry. <span className="text-[#b84e00]">*</span></span></label>
        <button type="submit" className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#00788a] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#006574] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00788a]">Send message <ArrowRight aria-hidden="true" size={18} /></button>
        <p id="demo-note" className="text-center text-xs leading-relaxed text-slate-500">Demo form: submissions are logged to your browser console only.</p>
        <div role="status" aria-live="polite">{submitted && <div className="flex items-start gap-3 rounded-lg bg-[#e7f6fa] p-4 text-sm leading-relaxed text-[#006574]"><CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0" /><p>Your demo submission is ready! The payload has been logged to the browser console. No message has been sent.</p></div>}</div>
      </form>
    </div>
  );
}
