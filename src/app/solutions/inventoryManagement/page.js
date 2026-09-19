"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AlertTriangle, Package, Zap, ReceiptText, Info } from "lucide-react";

// assets
import homeHero from "../../../assets/homeHero.webp";
import aboutWhoWeAre from "../../../assets/aboutWhoWeAre.webp";
import homeFAQs from "../../../assets/homeFAQs.webp";

// components
import AlternatingSection from "../../components/common/AlternatingSection";
import Cta from "@/app/home/components/Cta";
import FAQSection from "@/app/components/common/FAQSection";

const features = [
  {
    id: 1,
    label: "Inventory Management",
    title: "Keep Complete Control of Your Stock",
    highlight: "Your Stock",
    description:
      "Track batch numbers, expiry dates, and stock levels with complete visibility across every shelf and branch, all from one centralized pharmacy inventory management system that keeps your data accurate, organized, and always audit-ready.",
    image: aboutWhoWeAre,
    imageAlt: "Inventory management dashboard",
    bullets: [
      "Track available and reserved stock",
      "Manage inventory across multiple store branches.",
      "Transfer stock between different locations.",
      "Get automated low-stock and expiry alerts",
    ],
    buttonText: "Explore Inventory",
    buttonLink: "/inventory",
  },

  {
    id: 2,
    label: "Procurement",
    title: "Simplify Your Entire Stock Procurement",
    highlight: "Stock Procurement",
    description:
      "Move from stock requests to purchase orders in just a few clicks no more relying on spreadsheets, phone calls to distributors, or disconnected systems. A streamlined pharmacy stock procurement process keeps every request, bid, and order in one place.",
    image: aboutWhoWeAre,
    imageAlt: "Procurement management system",
    bullets: [
      "Create and manage stock/material requests.",
      "Generate and compare vendor/distributor bids.",
      "Create purchase orders quickly.",
      "Monitor procurement status in real time.",
    ],
  },

  {
    id: 3,
    label: "Project Management",
    title: "Manage Every Store's Inventory From One Place",
    highlight: "Every Store",
    description:
      " Get a complete, real-time view of stock, batches, and expiry across every branch, all connected through a single dashboard. This is the core of a true pharmacy inventory management solution, built to keep multi-store pharmacies stocked and in sync.",
    image: aboutWhoWeAre,
    imageAlt: "Project management dashboard",
    bullets: [
      "Manage inventory across multiple pharmacy branches.",
      "Create and maintain stock/purchase lists.",
      "Assign inventory access roles to specific staff.",
      "Monitor stock activities from one dashboard.",

    ],
    buttonText: "View Projects",
    buttonLink: "/projects",
  },
];

const faqData = [
  {
    id: 1,
    question: "What is a pharmacy inventory management system?",
    answer:
      "A pharmacy inventory management system is software that tracks medicine stock, batch numbers, and expiry dates in real time, helping pharmacies avoid stockouts, reduce wastage, and maintain accurate records across all branches.",
  },
  {
    id: 2,
    question:
      "How does inventory management software reduce medicine expiry losses?",
    answer:
      "Smart medicine expiry tracking sends batch-wise alerts weeks in advance, so pharmacies can return, discount, or push stock before it expires, cutting write-offs and protecting margins.",
  },
  {
    id: 3,
    question:
      "Can I manage stock across multiple pharmacy branches?",
    answer:
      "Yes. With built-in multi-store inventory management, you can view, transfer, and monitor stock across all your pharmacy locations from a single, centralized dashboard.",
  },
  {
    id: 4,
    question: "Does the system alert me when stock is running low?",
    answer:
      "Yes, automated low-stock and stock replenishment alerts notify you before fast-moving medicines run out, so you never lose a customer to an out-of-stock item.",
  },
  {
    id: 5,
    question:
      "How does barcode scanning help with inventory accuracy?",
    answer:
      "Barcode-based scanning replaces manual counting, giving you instant, accurate stock levels and cutting audit time by up to 90% a core feature of modern inventory management for pharmacies.",
  },
  {
    id: 6,
    question:
      "Can I track reserved vs. available stock separately?",
    answer:
      "Yes, the system clearly separates available and reserved stock, so you always know exactly what can be sold versus what's already committed to orders or transfers.",
  },
  {
    id: 7,
    question:
      "Is this inventory management solution suitable for small and multi-store pharmacies?",
    answer:
      "Absolutely. Whether you run one store or several branches, this pharmacy inventory management solution scales with you, offering role-based access, real-time syncing, and one unified dashboard for all locations.",
  },
];

const page = () => {
  const benefits = [
    "Real-time stock visibility",
    "Easy inventory management for pharmacy",
    "Simple and intuitive interface",
    "Built for growing pharmacy chains",
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
                  src={homeHero}
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
                  SMARTER INVENTORY CONTROL
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

                xl:text-[60px]
              "
            >
              Manage your stock with{" "}
              <span className="text-[#0198ae]">Precision and Confidence.</span>
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
                mt-5
                max-w-[590px]
                text-[16px] sm:text-[18px]
                leading-7
                text-slate-600

                sm:mt-6
               
                sm:leading-8
              "
            >
              Track every medicine, batch, and expiry date in real time with a
              complete pharmacy inventory management system built to eliminate
              stockouts, reduce wastage, and keep your shelves always ready.
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
                  <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0198ae]/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0198ae]" />
                  </div>

                  <span className="text-[18px] font-medium leading-5 text-slate-700">
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
              <a
                href="#contact"
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
              </a>
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
            <h2 className="text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-[#142536] sm:text-[38px] lg:text-[44px]">
              Why Pharmacy Owners In India Trust
              <span className="font-semibold text-[#0198ae]"> Meditix </span>
              for
              <span className="font-semibold text-[#0198ae]"> Inventory </span>
            </h2>

            <p className="mt-3 text-[16px] sm:text-[18px] leading-6 text-[#7A8B99]">
              See how a smart pharmacy inventory management system helps
              pharmacies stay stocked, reduce waste, and save time every single
              day.
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

                  <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                    Medicines expire on the shelf before they ever sell.
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="text-[32px] font-semibold leading-none text-[#0198ae]">
                    ₹0
                  </h4>

                  <p className="mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    lost to expiry
                  </p>

                  <p className="mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Batch-wise alerts warn you weeks ahead, so you can
                    <span className="font-semibold text-[#263C4D]">
                      {" "}
                      return or push stock in time
                    </span>
                    , and keep the cash you used to write off true medicine
                    expiry tracking at work.
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

              <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                Fast-moving medicines run out without warning.
              </h3>

              <div className="mt-2">
                <div className="flex items-end gap-2">
                  <h4 className="text-[32px] font-semibold leading-none text-[#0198ae]">
                    Zero
                  </h4>

                  <p className="text-[14px] font-medium text-[#717e88]">
                    stockouts on fast-movers
                  </p>
                </div>

                <p className="mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Auto-reorder alerts keep every
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    fast mover on your rack
                  </span>
                  , so no one walks to the shop next door for
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    reliable stock replenishment automation.
                  </span>
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

              <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                Manual stock counting eats up hours every week.
              </h3>

              <div className="mt-2">
                <div className="flex items-end gap-2">
                  <h4 className="text-[32px] font-semibold leading-none text-[#0198ae]">
                    90% less
                  </h4>

                  <p className="text-[14px] font-medium text-[#717e88]">
                    manual counting time
                  </p>
                </div>

                <p className="mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Barcode-based scanning and real-time updates
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    give you accurate stock counts instantly
                  </span>
                  , cutting manual audits down to minutes.
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

                  <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#172838] sm:text-[20px]">
                    No visibility into which branch has what stock.
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="text-[30px] font-semibold leading-none text-[#0198ae]">
                    One dashboard
                  </h4>

                  <p className="mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    for all branches
                  </p>

                  <p className="mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Complete, centralized multi-store{" "}
                    <span className="font-semibold text-[#263C4D]">
                      inventory management shows exactly what's available,
                      reserved
                    </span>
                    , or in transit across every location, in real time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AlternatingSection
        sectionTitle="Everything You Need to Manage Your Inventory"
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
