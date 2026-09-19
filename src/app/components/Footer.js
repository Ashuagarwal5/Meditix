"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Check, Phone, Mail, Circle } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  },
};

const solutionLinks = [
  { label: "Overview", href: "#product" },
  { label: "Billing", href: "#billing" },
  { label: "Inventory", href: "#inventory" },
  { label: "GST & Compliance", href: "#compliance" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0A2D47]
        text-white
      "
    >
      {/* dotted background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
          [background-image:radial-gradient(circle,#75A8CA_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-4
          py-10
          sm:px-6
          lg:px-10
          lg:py-11
        "
      >
        {/* MAIN FOOTER */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[1.7fr_0.62fr_0.62fr_0.95fr]
            lg:gap-12
          "
        >
          {/* =====================================================
              BRAND
          ===================================================== */}
          <motion.div {...reveal}>
            {/* Logo */}
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#2F6FED]
                  text-[24px]
                  font-bold
                  text-white
                  shadow-[0_8px_22px_rgba(39,111,239,0.35)]
                "
              >
                M
              </span>

              <span
                className="
                  text-[25px]
                  font-bold
                  tracking-[-1px]
                  text-white
                "
              >
                Meditix
              </span>
            </Link>

            {/* tagline */}
            <h3
              className="
                mt-4
                text-[15px]
                font-semibold
                leading-[1.45]
                text-white
              "
            >
              Clearer operations for better-run pharmacies.
            </h3>

            {/* description */}
            <p
              className="
                mt-3
                max-w-[450px]
                text-[14px]
                leading-[1.7]
                text-[#A9C5D9]
              "
            >
              All-in-one pharmacy software engineered for retail chains and
              independent pharmacies. Simplify dispensing, billing, expiry
              alerts, and GST filings on one intuitive interface.
            </p>

            {/* divider */}
            <div className="mt-10 h-px w-full max-w-[455px] bg-[#1D4663]" />

            {/* badges */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[7px]
                  border
                  border-[#31536C]
                  bg-[#173A55]
                  px-3
                  py-2
                  text-[11px]
                  font-medium
                  text-[#E9F4FA]
                "
              >
                <ShieldCheck
                  size={14}
                  strokeWidth={2.2}
                  className="text-[#68A9E5]"
                />
                HIPAA & ISO 27001
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[7px]
                  border
                  border-[#31536C]
                  bg-[#173A55]
                  px-3
                  py-2
                  text-[11px]
                  font-medium
                  text-[#E9F4FA]
                "
              >
                <Check size={14} strokeWidth={2.5} className="text-[#34D3A4]" />
                GST Compliant
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[7px]
                  border
                  border-[#31536C]
                  bg-[#173A55]
                  px-3
                  py-2
                  text-[11px]
                  font-medium
                  text-[#E9F4FA]
                "
              >
                <Circle
                  size={8}
                  fill="currentColor"
                  strokeWidth={0}
                  className="text-[#43DBA9]"
                />
                99.99% Cloud Uptime
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              SOLUTIONS
          ===================================================== */}
          <motion.div {...reveal}>
            <h4
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.02em]
                text-white
              "
            >
              Solutions
            </h4>

            <div
              className="
                mt-4
                flex
                flex-col
                gap-3
              "
            >
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    text-[14px]
                    text-[#9DBBD0]
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              COMPANY
          ===================================================== */}
          <motion.div {...reveal}>
            <h4
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.02em]
                text-white
              "
            >
              Company
            </h4>

            <div
              className="
                mt-4
                flex
                flex-col
                gap-3
              "
            >
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    text-[14px]
                    text-[#9DBBD0]
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              SUPPORT CARD
          ===================================================== */}
          <motion.div
            {...reveal}
            className="
              rounded-[16px]
              border
              border-[#24506F]
              bg-[#103753]
              px-5
              py-5
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            "
          >
            <h4
              className="
                text-[12px]
                font-bold
                uppercase
                text-white
              "
            >
              Direct Support & Sales
            </h4>

            <p
              className="
                mt-3
                text-[12px]
                leading-[1.5]
                text-[#A5C2D6]
              "
            >
              Connect directly with our pharmacy
              <br className="hidden xl:block" />
              systems specialist team.
            </p>

            {/* phone */}
            <a
              href="tel:+18006334849"
              className="
                group
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-[31px]
                  w-[31px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[6px]
                  border
                  border-[#315A77]
                  bg-[#17405D]
                  text-[#69A8D4]
                  transition-colors
                  group-hover:text-white
                "
              >
                <Phone size={14} />
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.04em]
                    text-[#9BB9CC]
                  "
                >
                  Toll-Free Helpline
                </span>

                <strong
                  className="
                    mt-[2px]
                    text-[13px]
                    font-semibold
                    text-white
                  "
                >
                  +1 (800) MEDITIX
                </strong>
              </span>
            </a>

            {/* email */}
            <a
              href="mailto:hello@meditix.com"
              className="
                group
                mt-4
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-[31px]
                  w-[31px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[6px]
                  border
                  border-[#315A77]
                  bg-[#17405D]
                  text-[#69A8D4]
                  transition-colors
                  group-hover:text-white
                "
              >
                <Mail size={14} />
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.04em]
                    text-[#9BB9CC]
                  "
                >
                  Email Desk
                </span>

                <strong
                  className="
                    mt-[2px]
                    text-[13px]
                    font-semibold
                    text-white
                  "
                >
                  hello@meditix.com
                </strong>
              </span>
            </a>

            {/* support hours */}
            <div
              className="
                mt-5
                border-t
                border-[#27506B]
                pt-3
                text-[11px]
                text-[#A9C4D5]
              "
            >
              Support Hours:
              <strong className="ml-1.5 font-semibold text-white">
                Mon - Sat, 8AM - 8PM EST
              </strong>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
