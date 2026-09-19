"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// assets
import homeInsights from "../../../assets/homeInsights.jpg";

const benefits = [
  "Daily sales and margin visibility, updated in real time",
  "Fast, slow, non-moving stock, flagged automatically",
  "Branch and staff performance, compared side by side",
  "Expiry risk alerts before stock becomes a write-off",
  "Purchase and reorder suggestions based on sales trends",
  "Smarter purchasing and reorder decisions",
];

const Benefits = () => {
  return (
    <div>
      {/* Insights */}
      <section className="w-full bg-[#0A2D47] text-white">
        <div className=" container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16 ">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=" w-full overflow-hidden rounded-xl bg-[#F8FAFC] p-4 sm:p-5 "
          >
            <div className="overflow-hidden rounded-lg bg-white">
              <Image
                src={homeInsights}
                alt="Pharmacy sales and prescription insights dashboard"
                width={900}
                height={630}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full w-full flex-col justify-center"
          >
            {/* Label */}
            {/* <div className="flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-[#0198ae]" />

              <span className=" text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0198ae] ">
                Live business intelligence
              </span>
            </div> */}

            {/* Heading */}
            {/* <h2 className=" mt-4 max-w-[570px] text-[36px] sm:text-[42px] lg:text-[46px] font-medium leading-[1.08] tracking-[-2px] text-white lg:tracking-[-2.5px] ">
              Know what needs attention before it becomes a problem.
            </h2> */}
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.45 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <span className="h-px w-6 bg-[#0198ae]" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0198ae]">
                  Live business intelligence
                </span>
              </motion.div>

              <h3 className="text-[36px] lg:text-[40px] xl:text-[44px] text-center lg:text-left font-medium leading-[1.12] tracking-[-0.035em] text-white">
                Know what needs attention before it becomes a problem.
                {/* <span className="text-[#0198ae] font-semibold"> Pharmacy </span>
                Expertise */}
              </h3>
            </div>

            {/* Description */}
            <p className=" mt-2 xl:max-w-[570px] text-[16px] text-[#B6CAD9] ">
              Most pharmacy owners find out about a problem - a stockout, a
              slow-moving product, an underperforming branch - only after it's
              already cost them money. Our analytics dashboard flips that
              around. See the signals behind your daily operations.
            </p>

            {/* Benefits */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.18,
                  },
                },
              }}
              className=" mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 "
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 10,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className=" flex items-start gap-2 text-[15px] text-[#F1F7FB] "
                >
                  {/* Check */}
                  <span className=" mt-[1px] flex items-center justify-center shrink-0 h-[18px] w-[18px] rounded-full bg-[#124563] text-[11px] font-bold text-white  ">
                    ✓
                  </span>

                  <span className="">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
