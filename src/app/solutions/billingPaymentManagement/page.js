"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AlertTriangle, Package, Zap, ReceiptText, Info } from "lucide-react";

// assets
import homeHero from "../../../assets/homeHero.webp";
import aboutWhoWeAre from "../../../assets/aboutWhoWeAre.webp";
import billingPaymentManagementHero from "../../../assets/billingPaymentManagementHero.png";
import billingPaymentManagement01 from "../../../assets/billingPaymentManagement01.png";
import billingPaymentManagement02 from "../../../assets/billingPaymentManagement02.png";
import billingPaymentManagement03 from "../../../assets/billingPaymentManagement03.png";
import homeFAQs from "../../../assets/homeFAQs.webp";

// components
import AlternatingSection from "../../components/common/AlternatingSection";
import Cta from "@/app/home/components/Cta";
import FAQSection from "@/app/components/common/FAQSection";
import Link from "next/link";

const features = [
  {
    id: 1, 
    title: "Keep Complete Control of Your Billing",
    highlight: "Your Billing",
    description:
      "Generate bills, accept payments, and track every transaction with complete visibility across your pharmacy — all from one centralized billing and payment management system that keeps your cash flow accurate, organized, and audit-ready.",
    image: billingPaymentManagement01,
    imageAlt: "Inventory management dashboard",
    bullets: [
      "Generate bills instantly with barcode scanning.",
      "Accept cash, card, UPI, and wallet payments.",
      "Track daily sales and payment collections.",
      "Maintain accurate, audit-ready billing records.",
    ], 
  },

  {
    id: 2, 
    title: "Simplify Your Entire Payment & Reconciliation Process",
    highlight: ["Entire Payment", "Reconciliation Process"],
    description:
      "Move from billing to reconciliation without relying on spreadsheets, manual entries, or disconnected systems. A streamlined pharmacy payment reconciliation process keeps every sale, refund, and return in one place.",
    image: billingPaymentManagement02,
    imageAlt: "Procurement management system",
    bullets: [
      "Auto-sync bills with accounting records.",
      "Track and manage refunds and returns.",
      "Generate GST-ready reports instantly.",
      "Monitor daily collections in real time.",
    ],
  },

  {
    id: 3, 
    title: "Manage Billing & Payments Across Every Store",
    highlight: ["Billing", "Payments", "Every Store"],
    description:
      "Get a complete, real-time view of sales, payments, and collections across every branch — all connected through a single dashboard. This is the core of a true billing and payment management solution, built to keep multi-store pharmacies financially in sync.",
    image: billingPaymentManagement03,
    imageAlt: "Project management dashboard",
    bullets: [
      "Assign cashier and billing access to specific staff.",
      "Manage billing across multiple pharmacy branches.",
      "Track payment collections by store and by day.",
      "Monitor billing activities from one dashboard.",
    ], 
  },
];

const faqData = [
  {
    id: 1,
    question:
      "What is a billing and payment management solution for pharmacies?",
    answer:
      "A billing and payment management solution is software that helps pharmacies generate bills, accept multiple payment methods, and reconcile daily transactions — all from one connected platform.",
  },
  {
    id: 2,
    question: "How does Realitix speed up billing at the counter?",
    answer:
      "Realitix uses barcode scanning and instant invoice generation to create GST-compliant bills in seconds, helping pharmacies serve more customers with fewer delays.",
  },
  {
    id: 3,
    question: "What payment methods can customers use?",
    answer:
      "Customers can pay via cash, card, UPI, or QR-based digital payments, all supported through Realitix's pharmacy payment management system, with instant confirmation on every bill.",
  },
  {
    id: 4,
    question: "Can I manage refunds and returns through this system?",
    answer:
      "Yes, the platform supports pharmacy refund management, letting you process returns directly against the original bill with automatic stock and account adjustments.",
  },
  {
    id: 5,
    question: "Does the system help with GST reconciliation?",
    answer:
      "Absolutely. Every transaction automatically syncs with your accounts, making pharmacy payment reconciliation and GST filing accurate and fast, without manual data entry.",
  },
  {
    id: 6,
    question: "Can I track customer credit and outstanding dues?",
    answer:
      "Yes, built-in credit and outstanding tracking monitors customer credit accounts in real time, so nothing is missed and collections stay on schedule.",
  },
  {
    id: 7,
    question:
      "Is this billing solution suitable for multi-branch pharmacies?",
    answer:
      "Yes, Realitix's billing and payment management solution supports multi-store operations, letting you track collections, assign cashier access, and monitor billing activity across every branch from one dashboard.",
  },
];

const page = () => {
  const benefits = [
    "Real-time billing and payment tracking.",
    "Easy pharmacy billing management.",
    "Simple and intuitive interface.",
    "Built for growing pharmacies.",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-[#0198ae]/10 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[480px] w-[480px] rounded-full bg-[#0198ae]/5 blur-[120px]" />

        <div className="relative z-10 container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 sm:gap-14 lg:gap-14  xl:gap-20 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 xl:py-24 ">
          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className=" relative order-2 mx-auto lg:mx-0 flex items-center justify-center max-w-[600px] w-full lg:order-1  "
          >
            {/* Background shape */}
            <div className=" absolute left-1/2 top-1/2 h-[90%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-[#0198ae]/10 sm:rounded-[38px] lg:h-[105%] lg:w-[105%] " />

            {/* Image card */}
            <div className="relative w-full">
              <div className=" relative overflow-hidden rounded-[20px] border border-[#D8E6E8] bg-white p-2 shadow-[0_25px_70px_rgba(22,65,77,0.12)] sm:rounded-[26px] sm:p-3 ">
                <Image
                  src={billingPaymentManagementHero}
                  alt="Business dashboard"
                  width={900}
                  height={700}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 92vw, 600px"
                  className=" block h-auto w-full rounded-[15px] object-cover sm:rounded-[20px] "
                />
              </div>

              {/* Floating card */}
              {/* <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.65,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  -bottom-6
                  right-3
                  hidden
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  px-4
                  py-3
                  shadow-[0_16px_40px_rgba(20,67,77,0.14)]

                  sm:flex
                  lg:-right-5
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0198ae]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#0198ae]" />
                </div>

                <div>
                  <p className="text-[11px] font-medium text-slate-400">
                    Business Growth
                  </p>

                  <p className="mt-0.5 text-[13px] font-semibold text-slate-800">
                    Smarter. Faster. Better.
                  </p>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <div
            className="
              order-1
              mx-auto
              flex
              w-full
              max-w-[650px]
              flex-col
              items-center
              text-center

              lg:order-2
              lg:mx-0
              lg:items-start
              lg:text-left
            "
          >
            {/* Tag */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0198ae]/20 bg-[#0198ae]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#0198ae]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0198ae] sm:text-xs">
                  SMARTER BILLING & PAYMENTS
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
              font-fraunces 
                mt-5
                max-w-[650px]
                text-[38px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[48px]

                lg:text-[54px]
                lg:leading-[1.06] 
              "
            >
              Bill faster, get paid{" "}
              <span className="text-[#0198ae]"> without the hassle.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
              font-nunito 
                mt-5
                max-w-[590px]
                text-[16px] sm:text-[18px]
                leading-7
                text-slate-600

                sm:mt-6
               
                sm:leading-8
              "
            >
              Process sales, manage payments, and reconcile accounts in real
              time with Meditix billing and payment management solution built
              to speed up checkout, reduce errors, and keep your cash flow
              always accurate.
            </motion.p>

            {/* Benefits */}
            <div
              className="
                mt-7
                grid
                w-full
                max-w-[590px]
                grid-cols-1
                gap-x-6
                gap-y-3

                sm:grid-cols-2
              "
            >
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-2.5 text-left"
                >
                  <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0198ae]/10">
                    <CheckCircle2 className="h-4 w-4 text-[#0198ae]" />
                  </div>

                  <span className="font-nunito text-[18px] font-medium leading-5 text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
                ease: "easeOut",
              }}
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3

                sm:w-auto
                sm:flex-row
                sm:items-center

                lg:mt-9
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0198ae]
                  px-6
                  py-3
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_10px_28px_rgba(1,152,174,0.22)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#01889c]
                  hover:shadow-[0_15px_32px_rgba(1,152,174,0.28)]
                "
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F6FAFC] py-14 sm:py-16 lg:py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[75%] -translate-x-1/2 rounded-full bg-[#0198ae]/5 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-10 text-center sm:mb-12"
          >
            <h2 className="font-fraunces text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-[#142536] sm:text-[38px] lg:text-[44px]">
              Everything Your Pharmacy Needs for
              <span className="font-semibold text-[#0198ae]">
                {" "}
                Smarter Billing{" "}
              </span>
              &<span className="font-semibold text-[#0198ae]"> Payments </span>
            </h2>

            <p className="font-nunito mt-3 text-[16px] sm:text-[18px] leading-6 text-[#7A8B99]">
              From counter checkout to daily reconciliation, see how Realitix's
              billing and payment management solution helps pharmacies bill
              faster, collect payments smoothly, and stay accurate.
            </p>
          </motion.div>

          {/* ======================================================
        ASYMMETRIC CARD GRID

        ROW 1 : 7 columns + 5 columns
        ROW 2 : 5 columns + 7 columns
    ====================================================== */}

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            {/* =====================================================
          CARD 1 - LONG
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className=" lg:col-span-7 rounded-[22px] border border-[#E5EEF2] bg-white p-5 shadow-[0_12px_40px_rgba(20,60,80,0.05)] sm:p-6 lg:p-7 "
            >
              <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[1fr_0.95fr] sm:gap-0">
                {/* Left */}
                <div className="sm:pr-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                    <AlertTriangle size={20} strokeWidth={1.8} />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Info size={13} className="text-[#8FA0AD]" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                      The Challenge
                    </span>
                  </div>

                  <h3 className="font-fraunces mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                    Fast Barcode-Based Billing
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="font-fraunces text-[32px] font-semibold leading-none text-[#0198ae]">
                    40%
                  </h4>

                  <p className="font-nunito mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    faster checkout at the counter
                  </p>

                  <p className="font-nunito mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Barcode scanning and
                    <span className="font-semibold text-[#263C4D]">
                      {" "}
                      instant billing help your team serve more customers with
                      fewer delays
                    </span>
                    , even during the busiest hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
          CARD 2 - SHORT
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: "easeOut",
              }}
              className=" lg:col-span-5 rounded-[22px] border border-[#E5EEF2] bg-white p-5 shadow-[0_12px_40px_rgba(20,60,80,0.05)] sm:p-6 lg:p-7 "
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                <Package size={20} strokeWidth={1.8} />
              </div>

              <div className="flex items-center gap-1.5">
                <Info size={13} className="text-[#8FA0AD]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                  The Challenge
                </span>
              </div>

              <h3 className="font-fraunces mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                Multiple Payment Options
              </h3>

              <div className="mt-2">
                <div className="flex items-end gap-2">
                  <h4 className="font-fraunces text-[32px] font-semibold leading-none text-[#0198ae]">
                    100%
                  </h4>

                  <p className="font-nunito text-[14px] font-medium text-[#717e88]">
                    payment flexibility
                  </p>
                </div>

                <p className="font-nunito mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    Accept cash, card, UPI, and wallet payments through one
                    unified pharmacy payment management system
                  </span>
                  , giving customers the convenience they expect.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
          CARD 3 - SHORT
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
          lg:col-span-5
          rounded-[22px]
          border border-[#E5EEF2]
          bg-white
          p-5
          shadow-[0_12px_40px_rgba(20,60,80,0.05)]
          sm:p-6
          lg:p-7
        "
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                <Zap size={20} strokeWidth={1.8} />
              </div>

              <div className="flex items-center gap-1.5">
                <Info size={13} className="text-[#8FA0AD]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                  The Challenge
                </span>
              </div>

              <h3 className="font-fraunces mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                Automated Accounting Sync
              </h3>

              <div className="mt-2">
                <div className="flex items-end gap-2">
                  <h4 className="font-fraunces text-[32px] font-semibold leading-none text-[#0198ae]">
                    Minutes to reconcile
                  </h4>

                  <p className="font-nunito text-[14px] font-medium text-[#717e88]">
                    - not lost weekends
                  </p>
                </div>

                <p className="font-nunito mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Every bill and payment posts straight to your accounts, with
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    returns and refunds reconciled automatically
                  </span>
                  , keeping your books GST-ready at all times.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
          CARD 4 - LONG
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: "easeOut",
              }}
              className=" lg:col-span-7 rounded-[22px] border border-[#E5EEF2] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_12px_40px_rgba(20,60,80,0.05)] "
            >
              <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[1fr_0.95fr] sm:gap-0">
                {/* Left */}
                <div className="sm:pr-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0198ae] text-white shadow-[0_8px_20px_rgba(1,152,174,0.22)]">
                    <ReceiptText size={20} strokeWidth={1.8} />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Info size={13} className="text-[#8FA0AD]" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#82939F]">
                      The Challenge
                    </span>
                  </div>

                  <h3 className="font-fraunces mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                    Secure & Error-Free Transactions
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="font-fraunces text-[30px] font-semibold leading-none text-[#0198ae]">
                    Zero
                  </h4>

                  <p className="font-nunito mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    billing mismatches
                  </p>

                  <p className="font-nunito mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Built-in validation checks{" "}
                    <span className="font-semibold text-[#263C4D]">
                      catch pricing errors, duplicate entries, and mismatched
                      taxes before the bill is finalized
                    </span>
                    , protecting your margins.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AlternatingSection
        sectionTitle="Everything You Need to Manage Billing & Payments"
        sectionHighlight={["Manage Billing", "Payments"]}
        sectionDescription="A centralized platform designed to simplify project operations, procurement, inventory, and collaboration."
        items={features}
      />

      {/* Cta */}
      <Cta />

      <FAQSection
        badge="Help & Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our real estate ERP platform, inventory management, procurement, and project operations."
        image={homeFAQs}
        imageAlt="Real estate ERP support"
        faqs={faqData}
      />
    </>
  );
};

export default page;
