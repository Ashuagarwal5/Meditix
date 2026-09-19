import React from "react";

// assets
import Hero from "./components/Hero";
import Services from "./components/Services";
import PharmacyFeatureCards from "./components/PharmacyFeatureCards";
import Expertise from "./components/Expertise";
import PharmacyScaleSection from "./components/PharmacyScaleSection";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Cta from "./components/Cta";
import FAQSection from "../components/common/FAQSection";

import homeFAQs from "../../assets/homeFAQs.webp";
// import homeFAQs from "../../";

const page = () => {
  const faqData = [
    {
      id: 1,
      question: "What is real estate ERP software?",
      answer:
        "Real estate ERP software brings project management, procurement, inventory, accounting, vendor management, and operational data into one centralized system.",
    },
    {
      id: 2,
      question: "Can I manage multiple construction sites?",
      answer:
        "Yes. You can manage multiple sites and maintain separate inventory, material requests, users, vendors, BOQs, purchase orders, and project information for each location.",
    },
    {
      id: 3,
      question: "Can site teams request materials?",
      answer:
        "Yes. Site teams can create material requests by selecting the required material, quantity, project site, description, and supporting images.",
    },
    {
      id: 4,
      question: "Can I manage vendors from the platform?",
      answer:
        "Yes. Vendors can be onboarded and managed centrally. You can maintain vendor details, track purchases, manage bids, and generate purchase orders.",
    },
    {
      id: 5,
      question: "Does the system support inventory transfers?",
      answer:
        "Yes. Materials can be transferred between different project sites while maintaining records of the source site, destination site, quantities, and transfer status.",
    },
    {
      id: 6,
      question: "Can I generate purchase orders?",
      answer:
        "Yes. Purchase orders can be generated after bid evaluation and negotiation, allowing your procurement workflow to stay organized and traceable.",
    },
  ];

  return (
    <div>
      <Hero />
      {/* <Services /> */}
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
