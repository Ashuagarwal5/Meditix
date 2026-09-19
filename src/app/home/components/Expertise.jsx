"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Icons
import { Check } from "lucide-react";

// assets
import homeAbout from "../../../assets/homeAbout.webp"; 

const points = [
  // "Trusted by independent pharmacies and growing chains across the country",
  "97% customer satisfaction rate",
  // "Dedicated onboarding & support team for every new pharmacy",
  "Continuous updates based on real user feedback",
  "Data security and backup built into the platform",
];

const Expertise = () => {
  return (
    <div>
      {/* About Section */}
      <section className="container mx-auto bg-white px-4 sm:px-6 lg:px-10 py-10  " >
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            <div className=" w-full overflow-hidden rounded-3xl">
              <Image
                src={homeAbout}
                alt="Medical professional working in a laboratory"
                width={550}
                height={750}
                className=" h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" flex flex-col items-center lg:items-start gap-4 "
          >
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
                  WHY PHARMACIES TRUST US
                </span>
              </motion.div>

              <h3 className="text-[36px] lg:text-[40px] xl:text-[44px] text-center lg:text-left font-medium leading-[1.12] tracking-[-0.035em] text-[#101828]">
                Built on Real
                <span className="text-[#0198ae] font-semibold"> Pharmacy </span>
                Expertise
              </h3>
            </div>

            <div className="space-y-3 text-[15px] text-center lg:text-justify leading-[1.55] text-[#667085] sm:text-[16px]">
              <p>
                Our platform isn't built in isolation by developers guessing at
                what a pharmacy needs - it's built alongside pharmacy owners and
                pharmacists who use it every day at the counter. Every workflow,
                from billing to expiry tracking, reflects how pharmacies
                actually operate on the ground.
              </p>

              <p className="hidden xl:block">
                We understand that switching software touches every part of your
                business - your staff, your suppliers, your customers, and your
                daily revenue. That's why we focus not just on features, but on
                making the transition smooth, supported, and worth it from day
                one.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2  text-center lg:text-left">
              {points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="flex items-center gap-3 text-[15px] text-[#344054] sm:text-[16px]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e0eef8]">
                    <Check
                      size={16}
                      strokeWidth={3.5}
                      className="text-[#268394]  "
                    />
                  </span>

                  {point}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex ">
              <Link
                href="/about"
                // className="flex items-center justify-center text-[17px] text-[#fff] px-4 py-1.5  rounded-[9px] bg-[#0198ae] hover:bg-[#82d5e8]   font-mediumtransition-all duration-300 hover:-translate-y-0.5hover:shadow-lg"
                className="flex items-center justify-center gap-3 text-[14px] font-semibold text-white py-3 px-5 rounded-lg bg-[#0198ae] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(12,121,207,0.8)] transition-all duration-300 "
              >
                {/* Know More About Us */}
                Book a Free Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
