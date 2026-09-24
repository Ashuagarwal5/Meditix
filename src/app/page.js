"use client";

import React from "react";
import Hero from "./home/components/Hero";
import PharmacyFeatureCards from "./home/components/PharmacyFeatureCards";
import Expertise from "./home/components/Expertise";
import PharmacyScaleSection from "./home/components/PharmacyScaleSection";
import HowItWorks from "./home/components/HowItWorks";
import Benefits from "./home/components/Benefits";
import Cta from "./home/components/Cta";
import FAQSection from "./components/common/FAQSection";

// assets0
import homeFAQs from "../assets/homeFAQs.webp";

const page = () => {
  const faqData = [
    {
      id: 1,
      question: "What is pharmacy management software?",
      answer:
        "Pharmacy management software is a digital system that helps pharmacies handle billing, inventory tracking, e-prescriptions, supplier orders, and reporting from one platform, replacing manual registers and spreadsheets with real-time, error-free operations.",
    },
    {
      id: 2,
      question: "Is this pharmacy software suitable for a single, independent pharmacy?",
      answer:
        "Yes. Our pharmacy management software is built to scale; it works just as well for a single-counter independent pharmacy as it does for a multi-branch chain or hospital pharmacy, without requiring complex setup.",
    },
    {
      id: 3,
      question: "Can I manage multiple pharmacy branches from one dashboard?",
      answer:
        "Yes. Our multi-branch pharmacy management software lets you monitor stock, transfer inventory, compare branch performance, and manage staff access across all your outlets from a single, centralized dashboard.",
    },
    {
      id: 4,
      question: "Does this software help with inventory and expiry tracking?",
      answer:
        "Yes. Our pharmacy inventory management system tracks stock levels in real time, sends low-stock alerts, and flags expiry risks early so you can act before products become write-offs.",
    },
    {
      id: 5,
      question: "Can I digitize and manage prescriptions with this software?",
      answer:
        "Yes. Our e-prescription management system lets you digitize, verify, and store prescription records, giving you complete, searchable history, especially useful for repeat and chronic medications.",
    },
    {
      id: 6,
      question: "How long does it take to set up this pharmacy management software?",
      answer:
        "Our onboarding team assists with full data migration, tax and role setup, and product configuration, so most pharmacies can be up and running within days, not weeks.",
    },
    {
      id: 7,
      question: "Is my pharmacy's data secure with this software?",
      answer:
        "Yes. Our pharmacy management platform includes built-in data security, automatic backups, and role-based access controls to keep your business and patient data protected at all times.",
    },
  ];

  return (
    <div>
      <Hero /> 
      <PharmacyFeatureCards />
      <Expertise />
      <PharmacyScaleSection />
      <HowItWorks />
      <Benefits />
      <Cta />
      <FAQSection
        badge="Help & Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our real estate ERP platform, inventory management, procurement, and project operations."
        image={homeFAQs}
        imageAlt="Real estate ERP support"
        faqs={faqData}
      /> 
    </div>
  );
};

export default page;

// export default function Home() {
//   return (
//     <main>
//       <h1>Hello Meditix</h1>
//     </main>
//   );
// }
