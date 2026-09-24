import LegalPageLayout from "../components/common/LegalPageLayout";
import {
  FiAlertCircle,
  FiSettings,
  FiDatabase,
  FiGlobe,
  FiLock,
  FiRefreshCw,
  FiShare2,
  FiShield,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

export const metadata = {
  title: "Privacy Policy | Meditix",
  description:
    "Read the Meditix Privacy Policy to understand how we collect, use, store, protect, and manage information when you use our website and pharmacy management services.",
};

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "sharing", label: "How We Share Information" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "international", label: "International Processing" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Policy Updates" },
  { id: "contact", label: "Contact Us" },
];

const Section = ({ id, icon: Icon, number, title, children }) => {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-b border-[#E6EFF2] py-9 first:pt-0 last:border-b-0 last:pb-0"
    >
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F8FA] text-[#009BB3]">
          <Icon size={20} />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#009BB3]">
            {number}
          </span>
          <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-[#071426] sm:text-[28px]">
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-[15px] leading-7 text-[#5A6D85] sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
};

const BulletList = ({ children }) => (
  <ul className="space-y-3 pt-1">
    {children}
  </ul>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#009BB3]" />
    <span>{children}</span>
  </li>
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      type="privacy"
      badge="Your Privacy Matters"
      title="Privacy Policy"
      description="This Privacy Policy explains how Meditix collects, uses, stores, and protects information when you visit our website, request a demo, contact us, or use our pharmacy management services."
      lastUpdated="24 September 2026"
      sections={sections}
    >
      <Section
        id="introduction"
        icon={FiShield}
        number="01"
        title="Introduction"
      >
        <p>
          Welcome to Meditix. We respect your privacy and are committed to
          handling personal information responsibly and transparently.
        </p>

        <p>
          This Privacy Policy describes the types of information we may collect
          through our website, software platform, forms, communications, and
          related services. It also explains why we collect that information
          and the choices available to you.
        </p>

        <p>
          By accessing or using Meditix services, you acknowledge the practices
          described in this Privacy Policy.
        </p>
      </Section>

      <Section
        id="information-we-collect"
        icon={FiDatabase}
        number="02"
        title="Information We Collect"
      >
        <p>
          The information we collect depends on how you interact with Meditix.
          It may include information you provide directly and technical
          information generated when you use our website or services.
        </p>

        <h3 className="pt-2 text-lg font-semibold text-[#071426]">
          Information you provide
        </h3>

        <BulletList>
          <Bullet>
            Name, business name, designation, email address, and phone number.
          </Bullet>
          <Bullet>
            Pharmacy, clinic, hospital, or business information submitted when
            requesting a demo or contacting our team.
          </Bullet>
          <Bullet>
            Account and profile details provided when using the Meditix
            platform.
          </Bullet>
          <Bullet>
            Support requests, feedback, enquiries, and other communications
            sent to us.
          </Bullet>
          <Bullet>
            Billing or subscription-related information where applicable.
          </Bullet>
        </BulletList>

        <h3 className="pt-3 text-lg font-semibold text-[#071426]">
          Information collected automatically
        </h3>

        <BulletList>
          <Bullet>Browser type, device type, and operating system.</Bullet>
          <Bullet>
            Internet Protocol address and approximate location information.
          </Bullet>
          <Bullet>
            Website pages visited, referral sources, and interaction data.
          </Bullet>
          <Bullet>
            Login activity, service usage information, and diagnostic logs.
          </Bullet>
        </BulletList>
      </Section>

      <Section
        id="how-we-use-information"
        icon={FiUserCheck}
        number="03"
        title="How We Use Your Information"
      >
        <p>
          We use information only for legitimate business, operational,
          security, customer-service, and service-improvement purposes.
        </p>

        <BulletList>
          <Bullet>Provide and operate Meditix services.</Bullet>
          <Bullet>Create and manage customer accounts.</Bullet>
          <Bullet>Respond to enquiries and demo requests.</Bullet>
          <Bullet>
            Provide onboarding, technical support, and customer assistance.
          </Bullet>
          <Bullet>
            Monitor product performance and improve features and usability.
          </Bullet>
          <Bullet>
            Detect, investigate, and prevent fraudulent or unauthorized
            activity.
          </Bullet>
          <Bullet>
            Send service-related notifications and important account updates.
          </Bullet>
          <Bullet>
            Send promotional communication where permitted and where you have
            not opted out.
          </Bullet>
          <Bullet>Comply with applicable legal and regulatory obligations.</Bullet>
        </BulletList>
      </Section>

      <Section
        id="Settings"
        icon={FiSettings}
        number="04"
        title="Cookies & Tracking Technologies"
      >
        <p>
          Meditix may use cookies and similar technologies to keep our website
          functioning correctly, understand website usage, remember
          preferences, and improve the user experience.
        </p>

        <p>
          Some cookies may be essential for website functionality, while
          analytics or marketing technologies may be used to better understand
          how visitors interact with our website.
        </p>

        <p>
          You can manage cookies through your browser settings. Disabling
          certain cookies may affect some website features.
        </p>
      </Section>

      <Section
        id="sharing"
        icon={FiShare2}
        number="05"
        title="How We Share Information"
      >
        <p>
          We do not sell personal information. We may share information only
          where reasonably necessary to operate our business and provide our
          services.
        </p>

        <BulletList>
          <Bullet>
            With trusted hosting, infrastructure, analytics, communication,
            customer-support, and technology service providers.
          </Bullet>
          <Bullet>
            With professional advisers where necessary for legal, accounting,
            security, or compliance purposes.
          </Bullet>
          <Bullet>
            Where disclosure is required by applicable law, regulation,
            judicial process, or a valid governmental request.
          </Bullet>
          <Bullet>
            In connection with a merger, restructuring, acquisition, financing,
            or transfer of all or part of our business, subject to appropriate
            safeguards.
          </Bullet>
        </BulletList>

        <p>
          Service providers are expected to process information only for the
          services they provide to Meditix and in accordance with appropriate
          confidentiality and security requirements.
        </p>
      </Section>

      <Section
        id="security"
        icon={FiLock}
        number="06"
        title="Data Security"
      >
        <p>
          We use reasonable administrative, technical, and organizational
          measures designed to protect information against unauthorized access,
          alteration, loss, disclosure, or misuse.
        </p>

        <p>
          These measures may include access controls, authentication,
          encryption where appropriate, monitoring, backups, and internal
          security procedures.
        </p>

        <div className="mt-5 flex gap-3 rounded-2xl border border-[#D8EDF1] bg-[#F4FBFC] p-5">
          <FiAlertCircle className="mt-1 shrink-0 text-[#009BB3]" size={20} />
          <p className="text-sm leading-7">
            No online service or electronic storage method can be guaranteed
            to be completely secure. Users should also protect their account
            credentials and promptly notify Meditix of suspected unauthorized
            access.
          </p>
        </div>
      </Section>

      <Section
        id="retention"
        icon={FiRefreshCw}
        number="07"
        title="Data Retention"
      >
        <p>
          We retain personal information for as long as reasonably necessary
          to provide our services, maintain business and security records,
          resolve disputes, enforce agreements, and meet applicable legal or
          compliance requirements.
        </p>

        <p>
          Retention periods may vary depending on the nature of the
          information, the purpose for which it was collected, contractual
          requirements, and applicable obligations.
        </p>
      </Section>

      <Section
        id="your-rights"
        icon={FiUsers}
        number="08"
        title="Your Privacy Rights"
      >
        <p>
          Depending on your location and applicable requirements, you may be
          able to request certain actions relating to your personal
          information.
        </p>

        <BulletList>
          <Bullet>Request access to personal information we hold about you.</Bullet>
          <Bullet>Request correction of inaccurate or incomplete information.</Bullet>
          <Bullet>
            Request deletion of certain personal information where applicable.
          </Bullet>
          <Bullet>
            Withdraw consent where processing is based on your consent.
          </Bullet>
          <Bullet>
            Opt out of promotional email communications using the unsubscribe
            option included in those messages.
          </Bullet>
          <Bullet>
            Raise a question or concern about how your information is handled.
          </Bullet>
        </BulletList>

        <p>
          We may need to verify your identity before processing certain
          requests.
        </p>
      </Section>

      <Section
        id="international"
        icon={FiGlobe}
        number="09"
        title="International Data Processing"
      >
        <p>
          Our technology providers or service partners may process or store
          information in locations other than the country in which you are
          located.
        </p>

        <p>
          Where information is transferred across jurisdictions, we seek to
          use appropriate contractual, technical, and organizational safeguards
          consistent with applicable requirements.
        </p>
      </Section>

      <Section
        id="children"
        icon={FiShield}
        number="10"
        title="Children's Privacy"
      >
        <p>
          Meditix is a business-focused pharmacy management platform and is not
          intended to be used directly by children to create personal user
          accounts.
        </p>

        <p>
          If you believe a child has provided personal information to us
          directly without appropriate authorization, please contact us so we
          can review the matter.
        </p>
      </Section>

      <Section
        id="changes"
        icon={FiRefreshCw}
        number="11"
        title="Changes to This Privacy Policy"
      >
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, technology, business practices, or
          applicable requirements.
        </p>

        <p>
          When we make changes, the revised version will be posted on this page
          and the &quot;Last updated&quot; date will be changed accordingly.
        </p>
      </Section>

      <Section
        id="contact"
        icon={FiUserCheck}
        number="12"
        title="Contact Us"
      >
        <p>
          If you have questions, requests, or concerns about this Privacy
          Policy or the way Meditix handles information, please contact us
          through our website.
        </p>

        <a
          href="/contact"
          className="mt-2 inline-flex items-center gap-2 font-semibold text-[#009BB3] transition hover:text-[#007F94]"
        >
          Visit our Contact Us page →
        </a>
      </Section>
    </LegalPageLayout>
  );
}