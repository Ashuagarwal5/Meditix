import ContactForm from "./ContactForm";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Meditix",
  description:
    "Talk to Meditix about pharmacy management, product demos, and support.",
};

// Replace these placeholder details with your business information.
const contactDetails = [
  {
    icon: Mail,
    title: "Email us",
    value: "support@ppspl.io",
    detail: "For product questions and general enquiries.",
  },
  {
    icon: Phone,
    title: "Give us a call",
    value: "+91 9680006460",
    detail: "Monday to Friday, 10:00 AM - 7:00 PM IST.",
  },
  {
    icon: MapPin,
    title: "Visit our office",
    value: "123 Healthcare Avenue",
    detail: "Jaipur, India.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#e7f6fa] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-[#0198ae]/[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-[#0198ae]/15"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-fraunces mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
            Contact us
          </p>
          <h1 className="font-fraunces text-4xl font-medium leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Better pharmacy days
            <br className="hidden sm:block" /> start with{" "}
            <span className="text-[#0198ae]">a conversation.</span>
          </h1>
          <p className="font-nunito mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Have a question, need a hand, or want to see Meditix in action? Tell
            us what you have in mind. We’re here to help.
          </p>
        </div>
      </section>
      <section
        aria-labelledby="contact-heading"
        className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="min-w-0">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fdf1e7] text-[#b84e00]">
              <MessageCircle aria-hidden="true" size={24} />
            </span>
            <h2
              id="contact-heading"
              className="font-fraunces text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Let’s find the right
              <br className="hidden lg:block" /> solution for you.
            </h2>
            <p className="font-nunito mt-4 max-w-md text-lg leading-relaxed text-slate-600">
              From your first pharmacy to your next branch, our team can help
              you take the next step with confidence.
            </p>
            <div className="mt-8 space-y-7">
              {contactDetails.map(({ icon: Icon, title, value, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f6fa] text-[#00788a]">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-fraunces text-lg font-semibold">{title}</h3>
                    <p className="font-nunito mt-0.5 break-words text-base text-[#00788a]">
                      {value}
                    </p>
                    <p className="font-nunito text-sm leading-relaxed text-slate-600">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div> 
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#0198ae]/15 bg-[#e7f6fa]/60 p-5">
              <Clock3
                aria-hidden="true"
                size={20}
                className="mt-1 shrink-0 text-[#00788a]"
              />
              <div>
                <h3 className="font-fraunces font-semibold">
                  A little context goes a long way
                </h3>
                <p className="font-nunito mt-1 text-sm leading-relaxed text-slate-600">
                  Share your pharmacy size and what you’d like to improve so we
                  can point you in the right direction.
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section
        aria-labelledby="next-step-heading"
        className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 rounded-2xl bg-[#e7f6fa] p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-nunito mb-2 text-sm font-semibold text-[#00788a]">
              Explore what’s possible
            </p>
            <h2
              id="next-step-heading"
              className="font-fraunces text-2xl font-medium sm:text-3xl"
            >
              A simpler way to manage your pharmacy.
            </h2>
            <p className="font-nunito mt-2 text-base text-slate-600">
              Get to know Meditix and the people behind it.
            </p>
          </div>
          <a
            href="/about"
            className="font-fraunces inline-flex shrink-0 items-center gap-3 rounded-xl border border-[#00788a] px-5 py-3 font-semibold text-[#00788a] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00788a]"
          >
            Meet Meditix <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
