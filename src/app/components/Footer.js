"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Icons
import { ShieldCheck, Check, Phone, Mail, Circle } from "lucide-react";

// assets
import meditixLogo02 from "../../assets/meditixLogo02.png";

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
  { label: "Workflow Management", href: "/solutions/workflowManagement" },
  { label: "Inventory Management", href: "/solutions/inventoryManagement" },
  {
    label: "E-Prescription Management",
    href: "/solutions/ePresriptionManagement",
  },
  {
    label: "Supply Chain Management",
    href: "/solutions/supplyChainManagement",
  },
  {
    label: "Branch Chain Management",
    href: "/solutions/BranchChainManagement",
  },
  {
    label: "Billing & Payment Management",
    href: "/solutions/billingPaymentManagement",
  },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className=" relative overflow-hidden bg-[#0A2D47] text-white ">
      {/* dotted background */}
      <div
        aria-hidden="true"
        className=" pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle,#75A8CA_1px,transparent_1px)] [background-size:50px_50px] "
      />

      <div className=" relative z-10 container mx-auto px-4 py-10 sm:px-6 lg:px-10 lg:py-11 ">
        {/* MAIN FOOTER */}
        <div className=" grid grid-cols-1 lg:grid-cols-[1.7fr_0.62fr_0.62fr_0.95fr] gap-10 lg:gap-12 ">
          {/*  BRAND */}
          <motion.div {...reveal}>
            {/* Logo */}
            <Link href="/" className=" inline-flex items-center gap-3 ">
              <Image
                src={meditixLogo02}
                alt="Meditix Logo"
                width={180}
                height={180}
              />
            </Link>

            {/* tagline */}
            <div className="mt-1 flex flex-col gap-2">
              <h3 className="font-fraunces text-base xl:text-xl font-medium text-white ">
                Clearer operations for better-run pharmacies.
              </h3>

              {/* description */}
              <p className="font-nunito max-w-[450px] text-[14px] xl:text-[16px] text-justify leading-relaxed text-[#A9C5D9] ">
                All-in-one pharmacy software engineered for retail chains and
                independent pharmacies. Simplify dispensing, billing, expiry
                alerts, and GST filings on one intuitive interface.
              </p>
            </div>

            {/* divider */}
            <div className="mt-5 h-px w-full max-w-[455px] bg-[#1D4663]" />

            {/* badges */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-2 text-[12px] text-[#E9F4FA] font-medium bg-[#173A55] rounded-lg border border-[#31536C] ">
                <ShieldCheck
                  size={16}
                  strokeWidth={2.2}
                  className="text-[#68A9E5]"
                />
                HIPAA & ISO 27001
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-2 text-[12px] text-[#E9F4FA] font-medium bg-[#173A55] rounded-lg border border-[#31536C] ">
                <Check size={16} strokeWidth={2.5} className="text-[#34D3A4]" />
                GST Compliant
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-2 text-[12px] text-[#E9F4FA] font-medium bg-[#173A55] rounded-lg border border-[#31536C] ">
                <Circle
                  size={10}
                  fill="currentColor"
                  strokeWidth={0}
                  className="text-[#43DBA9]"
                />
                99.99% Cloud Uptime
              </div>
            </div>
          </motion.div>

          {/* SOLUTIONS */}
          <motion.div {...reveal}>
            <h4 className=" text-[12px] font-bold uppercase tracking-[0.02em] text-white ">
              Solutions
            </h4>

            <div className="font-fraunces mt-4 flex flex-col gap-3 ">
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className=" text-[14px] text-[#9DBBD0] transition-all duration-200 hover:translate-x-1 hover:text-white "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div {...reveal}>
            <h4 className=" text-[12px] font-bold uppercase tracking-[0.02em] text-white ">
              Company
            </h4>

            <div className=" mt-4 flex flex-col gap-3 ">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-fraunces text-[14px] text-[#9DBBD0] transition-all duration-200 hover:translate-x-1 hover:text-white "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SUPPORT CARD */}
          <motion.div
            {...reveal}
            className=" rounded-[16px] border border-[#24506F] bg-[#103753] px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] "
          >
            <h4 className="font-fraunces text-[15px] font-medium uppercase text-white ">
              Direct Support & Sales
            </h4>

            <p className="font-nunito mt-1 text-[14px] leading-[1.5] text-[#A5C2D6] ">
              Connect directly with our pharmacy
              <br className="hidden xl:block" />
              systems specialist team.
            </p>

            {/* phone */}
            <a
              href="tel:+18006334849"
              className=" group mt-5 flex items-center gap-3 "
            >
              <span
                className=" flex items-center justify-center h-[31px] w-[31px] shrink-0
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
                <span className="font-nunito text-[10px] uppercase tracking-[0.04em] text-[#9BB9CC] ">
                  Toll-Free Helpline
                </span>

                <strong className=" mt-[1px] text-[14px] font-semibold text-white ">
                  +91 9680006460
                </strong>
              </span>
            </a>

            {/* email */}
            <a
              href="mailto:support@ppspl.io"
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
                <span className=" font-nunito text-[10px] uppercase tracking-[0.04em] text-[#9BB9CC] ">
                  Email Desk
                </span>

                <strong className=" mt-[1px] text-[14px] font-semibold text-white ">
                  support@ppspl.io
                </strong>
              </span>
            </a>

            {/* support hours */}
            <div className=" font-fraunces mt-5 border-t border-[#27506B] pt-3 text-[12px] text-[#A9C4D5] ">
              Support Hours:
              <strong className="font-nunito ml-1.5 text-[14px] font-medium text-white">
                Mon - Sat, 10AM - 7PM IST
              </strong>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="relative z-10 border-t border-[#1D4663] bg-[#08283F]">
        <div
          className="
      container mx-auto
      flex flex-col items-center justify-between
      gap-3
      px-4 py-4
      sm:px-6
      md:flex-row
      lg:px-10
    "
        >
          {/* Powered By */}
          <Link 
            href="https://proactivedigital.in/"
            target="_blank"
          className="font-nunito text-center text-[13px] text-[#8EADC1] md:text-left">
            © {new Date().getFullYear()} Meditix. Powered by{" "}
            <span className="font-semibold text-white">
              Proactive Proffesional Services Pvt. Ltd.
            </span>
          </Link>

          {/* Legal Links */}
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="
          font-nunito
          text-[13px]
          text-[#9DBBD0]
          transition-colors
          duration-200
          hover:text-white
        "
            >
              Privacy Policy
            </Link>
            |{" "}
            <Link
              href="/terms-and-conditions"
              className="
          font-nunito 
          text-[13px]
          text-[#9DBBD0]
          transition-colors
          duration-200
          hover:text-white
        "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
