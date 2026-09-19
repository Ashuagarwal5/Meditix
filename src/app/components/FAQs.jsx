"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import homeFAQs from "../../assets/homeFAQs.webp";

import {
  BadgeCheck,
  BookOpen,
  FileText,
  Headphones,
  MessageSquare,
  Plus,
  ThumbsDown,
  ThumbsUp,
  X,
  Zap,
} from "lucide-react";

const faqs = [
  {
    question: "How quick is the onboarding process?",
    answer:
      "You can get completely set up in under 5 minutes. No code installation or credit card required for standard setup, allowing you to instantly explore live dashboards and invite team members.",
  },
  {
    question: "Can I change or cancel my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your plan whenever your business requirements change. Your current plan will remain active through the end of the billing period.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support major cards, bank transfers, and other common business payment methods. Available options can vary depending on your region and subscription plan.",
  },
  {
    question: "Do you offer custom pricing for large teams?",
    answer:
      "Yes. Larger pharmacy groups and multi-branch organizations can receive custom pricing based on team size, locations, integrations, and operational requirements.",
  },
  {
    question: "Is my data encrypted and compliant?",
    answer:
      "Your business data is protected using modern security practices, access controls, encrypted connections, and role-based permissions designed to keep sensitive information secure.",
  },
  {
    question: "How does customer support work?",
    answer:
      "Our support team can assist with onboarding, configuration, troubleshooting, and day-to-day questions through available support and documentation channels.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div>
      <section id="faq" className="w-full overflow-hidden bg-[#F6F8FC]">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          {/* ============================================
            SECTION HEADING
        ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[680px] flex-col items-center text-center"
          >
            {/* Badge */}
            <div className=" inline-flex items-center gap-2 rounded-full bg-[#cdf5fa] px-3 py-1.5 ">
              <BadgeCheck
                size={12}
                strokeWidth={2.4}
                className="text-[#0198ae]"
              />

              <span
                className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#0198ae]
              "
              >
                Knowledge base & support
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
              mt-4
              text-[32px]
              font-semibold
              leading-[1.08]
              tracking-[-1.6px]
              text-[#071426]
              sm:text-[38px]
              lg:text-[42px]
              lg:tracking-[-2px]
            "
            >
              Frequently Asked Questions
            </h2>

            {/* Description */}
            <p
              className="
              mt-3
              max-w-[570px]
              text-[14px]
              leading-[1.65]
              text-[#45566A]
              sm:text-[15px]
            "
            >
              Clear, comprehensive answers about deployment, security,
              <br className="hidden sm:block" />
              licensing, and 24/7 priority enterprise support.
            </p>
          </motion.div>

          {/* ============================================
            FAQ CONTENT
        ============================================ */}
          <div
            className="
            mt-12
            grid
            grid-cols-1
            items-start
            gap-8
            lg:mt-14
            lg:grid-cols-[0.8fr_1.15fr]
            lg:gap-12
          "
          >
            {/* ============================================
              LEFT SIDE
          ============================================ */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-5"
            >
              {/* IMAGE */}
              <div
                className="
                relative
                overflow-hidden
                rounded-[12px]
                bg-white
                shadow-[0_4px_18px_rgba(18,54,85,0.08)]
              "
              >
                <div className="relative aspect-[1.35/1] w-full">
                  <Image
                    src={homeFAQs}
                    alt="Customer support team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 430px"
                    className="object-cover"
                  />
                </div>

                {/* FLOATING SUPPORT STRIP */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.45 }}
                  className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  justify-between
                  gap-3
                  rounded-[8px]
                  border
                  border-[#DCE8F0]
                  bg-white/95
                  px-4
                  py-3
                  shadow-[0_8px_22px_rgba(13,44,72,0.16)]
                  backdrop-blur-sm
                    "
                    >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#16C79A]" />

                    <div className="min-w-0">
                      <p
                        className="
                        truncate
                        text-[12px]
                        font-semibold
                        leading-tight
                        text-[#15283B]
                      "
                      >
                        24/7 Global Engineering Support
                      </p>

                      <span className="mt-0.5 block text-[9px] text-[#728296]">
                        Average response under 4 mins
                      </span>
                    </div>
                  </div>

                  <Zap
                    size={19}
                    fill="currentColor"
                    className="shrink-0 text-[#0878D1]"
                  />
                </motion.div> */}
              </div>

              {/* DIRECT ASSISTANCE CARD */}
            </motion.div>

            {/* RIGHT FAQ ACCORDION */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-3"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`
                    overflow-hidden
                    rounded-[10px]
                    border
                    bg-white
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-[#E0E7EE] shadow-[0_4px_10px_rgba(24,53,78,0.10)]"
                        : "border-[#E7EBF0]"
                    }
                  `}
                  >
                    {/* Question button */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      bg-white
                      px-5
                      py-[18px]
                      text-left
                      sm:px-6
                    "
                    >
                      <span
                        className="
                        text-[14px]
                        font-semibold
                        leading-[1.4]
                        text-[#071628]
                        sm:text-[15px]
                      "
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "bg-[#0671C8] text-white"
                            : "bg-[#E4F0FF] text-[#176CB5]"
                        }
                      `}
                      >
                        {isOpen ? (
                          <X size={14} strokeWidth={2} />
                        ) : (
                          <Plus size={16} strokeWidth={1.8} />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.32,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                              duration: 0.22,
                            },
                          }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                            <p
                              className="
                              max-w-[670px]
                              text-[13px]
                              leading-[1.7]
                              text-[#40566B]
                            "
                            >
                              {faq.answer}
                            </p>

                           
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
