import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronRight,
  FiMail,
  FiShield,
} from "react-icons/fi";

const LegalPageLayout = ({
  badge,
  title,
  description,
  lastUpdated,
  sections,
  children,
  type = "privacy",
}) => {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#DCECF1] bg-gradient-to-b from-[#F1FBFD] via-white to-white">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#009BB3]/[0.06] blur-2xl" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#38BDF8]/[0.06] blur-3xl" />

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#009BB3]/20 bg-white px-4 py-2 shadow-sm">
              <FiShield className="text-[#009BB3]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#009BB3] sm:text-sm">
                {badge}
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#071426] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#61728C] sm:text-lg">
              {description}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#EDF8FA] px-4 py-2.5 text-sm font-medium text-[#456078]">
              <FiCalendar className="text-[#009BB3]" />
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-14">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-[#DDEBF0] bg-[#FAFDFE] p-5 shadow-[0_10px_40px_rgba(19,77,92,0.05)]">
              <p className="mb-4 px-2 text-xs font-bold uppercase tracking-[0.16em] text-[#009BB3]">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-[#52647D] transition-all duration-200 hover:bg-white hover:text-[#009BB3] hover:shadow-sm"
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-[1px] text-xs font-semibold text-[#9CB1C1]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.label}</span>
                    </span>

                    <FiChevronRight className="mt-0.5 shrink-0 text-[#9CB1C1] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#009BB3]" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact card */}
            <div className="mt-5 rounded-[24px] bg-[#009BB3] p-6 text-white">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <FiMail size={20} />
              </div>

              <h3 className="text-lg font-semibold">
                Have a legal question?
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Contact our team if you have questions about these terms or
                how your information is handled.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Contact us
                <FiArrowRight />
              </Link>
            </div>

            <div className="mt-5 flex gap-3 px-2">
              {type === "privacy" ? (
                <Link
                  href="/terms-and-conditions"
                  className="text-sm font-medium text-[#607188] transition hover:text-[#009BB3]"
                >
                  Read Terms & Conditions →
                </Link>
              ) : (
                <Link
                  href="/privacy-policy"
                  className="text-sm font-medium text-[#607188] transition hover:text-[#009BB3]"
                >
                  Read Privacy Policy →
                </Link>
              )}
            </div>
          </aside>

          {/* MAIN LEGAL CONTENT */}
          <article className="min-w-0">
            <div className="rounded-[28px] border border-[#E1EDF1] bg-white p-6 shadow-[0_15px_60px_rgba(19,77,92,0.05)] sm:p-8 lg:p-10">
              {children}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col gap-5 rounded-[26px] border border-[#DCECF1] bg-[#F3FBFC] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#009BB3]">
                  Need more information?
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#071426] sm:text-2xl">
                  We&apos;re here to help.
                </h3>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#009BB3] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00879D] hover:shadow-[0_10px_25px_rgba(0,155,179,0.25)]"
              >
                Contact Meditix
                <FiArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default LegalPageLayout;