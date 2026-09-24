"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AlertTriangle, Package, Zap, ReceiptText, Info } from "lucide-react";

// assets
import homeHero from "../../../assets/homeHero.webp";
import supplyChainManagementHero from "../../../assets/supplyChainManagementHero.png";
import supplyChainManagement01 from "../../../assets/supplyChainManagement01.png";
import supplyChainManagement02 from "../../../assets/supplyChainManagement02.png";
import supplyChainManagement03 from "../../../assets/supplyChainManagement03.png";
import aboutWhoWeAre from "../../../assets/aboutWhoWeAre.webp";
import homeFAQs from "../../../assets/homeFAQs.webp";

// components
import AlternatingSection from "../../components/common/AlternatingSection";
import Cta from "@/app/home/components/Cta";
import FAQSection from "@/app/components/common/FAQSection";
import Link from "next/link";

const features = [
  {
    id: 1, 
    title: "Keep Complete Control of Your Supply Network",
    highlight: "Supply Network",
    description:
      "Track shipments, manage distributor relationships, and maintain complete visibility across your entire supply network — all from one centralized pharmacy supply chain management system that keeps stock moving smoothly and on time.",
    image: supplyChainManagement01,
    imageAlt: "Inventory management dashboard",
    bullets: [
      "Track shipments from distributor to store.",
      "Manage multiple distributors and vendors.",
      "Monitor lead times and delivery performance.",
      "Maintain accurate, audit-ready supply records.",
    ], 
  },

  {
    id: 2, 
    title: "Simplify Your Entire Procurement & Logistics Process",
    highlight: ["Entire Procurement", "Logistics Process"],
    description:
      "Move from demand forecasting to distributor delivery in just a few steps — no more relying on spreadsheets, phone calls, or disconnected systems. A streamlined pharmacy supply chain workflow keeps every order, shipment, and delivery in one place.",
    image: supplyChainManagement02,
    imageAlt: "Procurement management system",
    bullets: [
      "Create and manage stock replenishment requests.",
      "Generate and compare distributor bids.",
      "Create purchase orders quickly.",
      "Monitor shipment and delivery status in real time.",
    ],
  },

  {
    id: 3, 
    title: "Manage Your Entire Supply Chain From One Place",
    highlight: ["Entire Supply Chain", "One Place"],
    description:
      "Get a complete, real-time view of distributors, shipments, and stock levels across every branch — all connected through a single dashboard. This is the core of a true pharmacy supply chain management solution, built to keep multi-store pharmacies stocked and running smoothly.",
    image: supplyChainManagement03,
    imageAlt: "Project management dashboard",
    bullets: [
      "Manage supply chains across multiple pharmacy branches.",
      "Create and maintain distributor and vendor records.",
      "Assign supply chain access to specific staff.",
      "Monitor logistics activities from one dashboard.",
    ], 
  },
];

const faqData = [
  {
    id: 1,
    question: "What is a pharmacy supply chain management solution?",
    answer:
      "A pharmacy supply chain management solution is software that connects distributors, warehouses, and pharmacy stores on one platform, streamlining ordering, shipment tracking, and delivery to keep stock consistently available.",
  },
  {
    id: 2,
    question:
      "How does supply chain software prevent medicine shortages?",
    answer:
      "By using automated distributor ordering, the system generates purchase orders based on real demand and current stock levels, ensuring fast-moving medicines are reordered before they run out.",
  },
  {
    id: 3,
    question: "Can I track shipments in real time?",
    answer:
      "Yes, real-time shipment tracking lets you follow every order from distributor dispatch to warehouse to store shelf, so you always know exactly where your stock is.",
  },
  {
    id: 4,
    question: "How does this system speed up warehouse-to-store delivery?",
    answer:
      "Optimized routing and centralized dispatch planning, part of a strong supply chain workflow management system, help medicines move from warehouse to store shelves faster, reducing stockouts.",
  },
  {
    id: 5,
    question: "Can I manage multiple distributors and vendors from one platform?",
    answer:
      "Absolutely. The platform supports pharmacy procurement management across multiple distributors, letting you compare bids, place orders, and track performance all in one place.",
  },
  {
    id: 6,
    question: "Does the system integrate directly with distributors?",
    answer:
      "Yes, direct integration through this supply chain management software connects distributors and pharmacies in real time, replacing manual phone calls and paperwork with automated updates.",
  },
  {
    id: 7,
    question:
      "Is this supply chain solution suitable for multi-branch pharmacy networks?",
    answer:
      "Yes, the platform is built for scale — offering centralized visibility, role-based access, and real-time syncing across every branch, making it ideal for multi-store pharmacy supply chain management.",
  },
];

const page = () => {
  const benefits = [
    "Real-time shipment tracking.",
    "Easy supply chain workflow management.",
    "Simple and intuitive interface.",
    "Built for growing pharmacy networks.",
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
                  src={supplyChainManagementHero}
                  alt="Business dashboard"
                  width={900}
                  height={700}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 92vw, 600px"
                  className=" block h-auto w-full rounded-[15px] object-cover sm:rounded-[20px] "
                />
              </div>
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
                  SMARTER SUPPLY CHAIN CONTROL
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

                xl:text-[60px]
              "
            >
              Move medicines with{" "}
              <span className="text-[#0198ae]">speed and precision.</span>
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
              Connect distributors, warehouses, and stores on one platform with
              a complete pharmacy supply chain management solution built to
              reduce delays, prevent shortages, and keep every branch stocked
              and ready.
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
                Smarter Supply Chain{" "}
              </span>
              Control
            </h2>

            <p className="font-nunito mt-3 text-[16px] sm:text-[18px] leading-6 text-[#7A8B99]">
              From distributor orders to store delivery, see how realitix’s
              pharmacy supply chain management solution helps you move stock
              faster, reduce shortages, and cut costs.
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
                    Real-Time Shipment Tracking
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="font-fraunces text-[32px] font-semibold leading-none text-[#0198ae]">
                    100%
                  </h4>

                  <p className="font-nunito mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    shipment visibility
                  </p>

                  <p className="font-nunito mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    Track every order from
                    <span className="font-semibold text-[#263C4D]">
                      {" "}
                      distributor to warehouse{" "}
                    </span>
                    to
                    <span className="font-semibold text-[#263C4D]">
                      {" "}
                      store shelf{" "}
                    </span>
                    , so you
                    <span className="font-semibold text-[#263C4D]">
                      {" "}
                      always know exactly where your stock is{" "}
                    </span>
                    and when it will arrive.
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
                Automated Distributor Ordering
              </h3>

              <div className="mt-2">
                <div className="flex items-end gap-2">
                  <h4 className="font-fraunces text-[32px] font-semibold leading-none text-[#0198ae]">
                    Zero
                  </h4>

                  <p className="font-nunito text-[14px] font-medium text-[#717e88]">
                    manual order errors
                  </p>
                </div>

                <p className="font-nunito mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Automated
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    pharmacy procurement management generates purchase orders
                    based on real demand{" "}
                  </span>
                  , removing
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    guesswork and reducing costly ordering mistakes.
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
              className=" lg:col-span-5 rounded-[22px] border border-[#E5EEF2] bg-white p-5 shadow-[0_12px_40px_rgba(20,60,80,0.05)] sm:p-6 lg:p-7 "
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
                Faster Warehouse-to-Store Delivery
              </h3>

              <div className="mt-2">
                <div className="flex items-end gap-2">
                  <h4 className="font-fraunces text-[32px] font-semibold leading-none text-[#0198ae]">
                    35% faster
                  </h4>

                  <p className="font-nunito text-[14px] font-medium text-[#717e88]">
                    stock replenishment
                  </p>
                </div>

                <p className="font-nunito mt-3 text-[14px] leading-[1.65] text-[#60727F]">
                  Optimized routing and
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    centralized dispatch planning
                  </span>
                  get medicines from{" "}
                  <span className="font-semibold text-[#263C4D]">
                    {" "}
                    warehouse to store shelves faster, minimizing stockouts
                  </span>
                  on fast-moving items.
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
                    Connected Vendor Network
                  </h3>
                </div>

                {/* Right */}
                <div className="border-t border-[#E4ECEF] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1">
                  <h4 className="font-fraunces text-[30px] font-semibold leading-none text-[#0198ae]">
                    One dashboard
                  </h4>

                  <p className="font-nunito mt-1 text-[14px] font-medium text-[#8A9AA6]">
                    Seamless distributor-to-pharmacy sync
                  </p>

                  <p className="font-nunito mt-3 text-[16px] leading-[1.65] text-[#60727F]">
                    <span className="font-semibold text-[#263C4D]">
                      Direct integration with distributors and supply chain
                    management software keeps everyone connected
                    </span>
                    , replacing
                    phone calls and paperwork with real-time updates.{" "}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AlternatingSection
        sectionTitle="Everything You Need to Manage Your Supply Chain"
        sectionHighlight={["Manage", "Supply Chain"]}
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
