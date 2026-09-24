"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AlternatingSection = ({
  items = [],
  sectionTitle,
  sectionHighlight,
  sectionDescription,
}) => {
  // Supports:
  // highlight: "Supply Network"
  // highlight: ["Entire Procurement", "Logistics Process"]
  const renderHighlightedTitle = (title, highlight) => {
    if (!highlight) return title;

    const highlights = Array.isArray(highlight) ? highlight : [highlight];

    const escapedHighlights = highlights
      .filter(Boolean)
      .map((text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

    if (!escapedHighlights.length) return title;

    const regex = new RegExp(`(${escapedHighlights.join("|")})`, "gi");

    return title.split(regex).map((part, index) => {
      const isHighlighted = highlights.some(
        (item) => item.toLowerCase() === part.toLowerCase(),
      );

      return isHighlighted ? (
        <span key={index} className="font-medium text-[#0198ae]">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        {(sectionTitle || sectionDescription) && (
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            {sectionTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="
                  font-fraunces
                  text-[30px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#142536]
                  sm:text-[38px]
                  lg:text-[44px]
                "
              >
                {/* {sectionTitle} */}
                {renderHighlightedTitle(sectionTitle, sectionHighlight)}
              </motion.h2>
            )}

            {sectionDescription && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="
                  font-nunito
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-[#687987]
                  sm:text-[16px]
                "
              >
                {sectionDescription}
              </motion.p>
            )}
          </div>
        )}

        {/* Alternating Rows */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-10">
          {items.map((item, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <div
                key={item.id || index}
                className="
                  grid
                  grid-cols-1
                  items-center
                  gap-8
                  lg:grid-cols-2
                  lg:gap-16
                  xl:gap-20
                "
              >
                {/* ================= IMAGE ================= */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageOnLeft ? -45 : 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className={imageOnLeft ? "lg:order-1" : "lg:order-2"}
                >
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      bg-[#F3F7F8]
                    "
                  >
                    <div className="relative aspect-[1.55/1] w-full">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.025]
                        "
                      />
                    </div>
                  </div>
                </motion.div>

                {/* ================= CONTENT ================= */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageOnLeft ? 45 : -45,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className={`
                    ${imageOnLeft ? "lg:order-2" : "lg:order-1"}
                    flex
                    flex-col
                    justify-center
                  `}
                >
                  {/* Title */}
                  <h3
                    className="
                    font-fraunces
                      max-w-[620px]
                      text-[30px]
                      font-medium
                      leading-[1.12]
                      tracking-[-0.025em]
                      text-[#071B36]
                      sm:text-[34px]
                      lg:text-[37px]
                      xl:text-[40px]
                    "
                  >
                    {renderHighlightedTitle(item.title, item.highlight)}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p
                      className="
                      font-nunito
                        mt-4
                        max-w-[650px]
                        text-[15px]
                        leading-[1.85]
                        text-[#536B80]
                        sm:text-[16px]
                        text-justify
                      "
                    >
                      {item.description}
                    </p>
                  )}

                  {/* Bullet Points */}
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.08 + bulletIndex * 0.07,
                            ease: "easeOut",
                          }}
                          viewport={{
                            once: true,
                            amount: 0.5,
                          }}
                          className="flex items-start gap-3"
                        >
                          {/* Check */}
                          <div
                            className="
                              mt-[2px]
                              flex
                              h-[25px]
                              w-[25px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#EAF9FB]
                            "
                          >
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              className="h-3.5 w-3.5 text-[#0198ae]"
                            >
                              <path
                                d="M4 10L8 14L16 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <span
                            className="
                            font-nunito
                              text-[14px]
                              leading-6
                              text-[#243B53]
                              sm:text-[15px]
                            "
                          >
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlternatingSection;
