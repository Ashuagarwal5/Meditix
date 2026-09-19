"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


// Icons  
import {
  ReceiptText,
  PackageCheck,
  Users,
  PanelsTopLeft,
  FilePenLine,
  ChartNoAxesCombined,
  ArrowRight, 
} from "lucide-react"; 

const features = [
  {
    number: "01",
    icon: ReceiptText,
    title: "WorkFlow Management",
    description:
      "This is the software used directly at the counter. It handles barcode scanning, GST-compliant invoice generation, multiple payment modes (cash, card, UPI), discounts, and returns. A good POS system is fast enough to keep queues short during peak hours while still keeping every transaction accurate and traceable.",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Inventory Management",
    description:
      "This tracks how much stock you have, where it is, and when it will expire. It works at a batch level, meaning it can tell you exactly which batch of a medicine is nearing its expiry date, so you can push it for sale or return it to the supplier before it becomes a loss. It also sends reorder alerts when stock of a fast-moving item runs low.",
  },
  {
    number: "03",
    icon: Users,
    title: "E-Prescription Management",
    description:
      "This digitizes the process of recording, verifying, and tracking patient prescriptions. It maintains a history of what was prescribed, by whom, and when-which is especially important for repeat medications, controlled substances, and insurance or scheme-based purchases.",
  },
  {
    number: "04",
    icon: PanelsTopLeft,
    title: "Supply Chain Management",
    description:
      "This builds and maintains customer profiles based on their purchase history. It's what allows a pharmacy to send refill reminders, run loyalty programs, and offer personalized service - turning one-time buyers into regular, returning customers.",
  },
  {
    number: "05",
    icon: FilePenLine,
    title: "Multi-Branch / Chain Management",
    description:
      "For pharmacies operating more than one outlet, this software gives centralized visibility and control. Owners can compare performance across branches, manage stock transfers between locations, and set role-based access so staff only see what's relevant to their branch.",
  },
  {
    number: "06",
    icon: ChartNoAxesCombined,
    title: "Billing & Payment Management",
    description:
      "This layer turns all the daily transaction data into actionable insights - sales trends, profit margins, best and worst-performing products, and staff performance - without anyone having to manually build a report in Excel.",
  },
];

const Services = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="container mx-auto bg-white px-4 sm:px-6 lg:px-10 py-10">
        <div className="">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45 }}
            className="mb-4 flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="h-px w-6 bg-[#0198ae]" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
              UNDERSTANDING THE BASICS
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mb-8 grid lg:grid-cols-2 gap-4 lg:gap-8 lg:items-center ">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[36px] sm:text-[44px] text-center lg:text-left font-medium leading-[1.08] tracking-[-0.045em] text-[#07101f] "
            >
              What is <span className="text-[#0198ae]">Pharmacy</span>
              <br />
              Management Software?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              // className="w-full h-full flex items-center text-[15px] text-center lg:text-left leading-[1.65] text-[#48546a]  "
              className=" text-[15px] sm:text-[18px] leading-normal	 text-[#687E90] text-center lg:text-justify "
            >
              Pharmacy management software is used by a wide range of businesses
              - from small independent chemist shops to multi-branch retail
              pharmacy chains, and even in-house pharmacies inside hospitals and
              clinics. While the scale of usage differs, the underlying need is
              the same: accurate billing, reliable stock control, and clear
              visibility into how the business is doing.
            </motion.p>
          </div>

          {/* Features */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#edf0f47c] bg-[#edf0f4] "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex flex-col gap-4 bg-white p-4 lg:p-5 transition-all duration-300 hover:bg-[#f9faff] cursor-pointer"
                >
                  <div className=" flex items-center justify-center shrink-0 h-9 w-9  rounded-xl border border-[#d9e3f0] bg-white transition-colors duration-300  group-hover:bg-[#0198ae]  ">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="text-[#075fc9] group-hover:text-white "
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 h-full "> 
                    <h3 className=" text-[20px] font-semibold text-[#07152b] group-hover:text-[#0198ae]">
                      {feature.title}
                    </h3>

                    <p className=" text-[16px] leading-[1.65] text-[#59657a] ">
                      {feature.description}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0198ae] transition-all duration-200 hover:gap-2.5"
                  >
                    Learn more
                    <ArrowRight size={11} strokeWidth={1.8} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
