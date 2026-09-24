import LegalPageLayout from "../components/common/LegalPageLayout";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiCreditCard,
  FiFileText,
  FiKey,
  FiLock,
  FiRefreshCw,
  FiServer,
  FiShield,
  FiSlash,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

export const metadata = {
  title: "Terms & Conditions | Meditix",
  description:
    "Read the Meditix Terms and Conditions governing access to and use of our website and pharmacy management software services.",
};

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Our Services" },
  { id: "accounts", label: "User Accounts" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "customer-data", label: "Customer Data" },
  { id: "fees", label: "Fees & Payments" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "availability", label: "Service Availability" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to Terms" },
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

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      type="terms"
      badge="Terms of Service"
      title="Terms & Conditions"
      description="These Terms & Conditions govern your access to and use of the Meditix website, pharmacy management platform, software, and related services."
      lastUpdated="24 September 2026"
      sections={sections}
    >
      <Section
        id="acceptance"
        icon={FiCheckCircle}
        number="01"
        title="Acceptance of Terms"
      >
        <p>
          These Terms & Conditions apply to your access to and use of Meditix,
          including our website, software platform, dashboards, features,
          integrations, support services, and related offerings.
        </p>

        <p>
          By accessing, registering for, purchasing, or using Meditix services,
          you agree to these Terms and any additional terms that may apply to a
          specific subscription, order, or service.
        </p>

        <p>
          If you are using Meditix on behalf of a company, pharmacy, hospital,
          clinic, or another organization, you confirm that you are authorized
          to accept these Terms on its behalf.
        </p>
      </Section>

      <Section
        id="services"
        icon={FiServer}
        number="02"
        title="Our Services"
      >
        <p>
          Meditix provides software tools designed to help pharmacy businesses
          manage operations such as billing, inventory, workflows,
          prescriptions, procurement, branch management, reporting, payments,
          and related activities.
        </p>

        <p>
          Available functionality may vary depending on your selected plan,
          configuration, integrations, region, and services purchased.
        </p>

        <p>
          We may improve, update, modify, add, or discontinue individual
          features as our platform evolves, subject to applicable contractual
          commitments.
        </p>
      </Section>

      <Section
        id="accounts"
        icon={FiKey}
        number="03"
        title="User Accounts & Access"
      >
        <p>
          Certain Meditix features require an authorized user account. You are
          responsible for maintaining accurate account information and keeping
          login credentials confidential.
        </p>

        <BulletList>
          <Bullet>
            Use strong passwords and protect login credentials from
            unauthorized use.
          </Bullet>
          <Bullet>
            Do not share individual accounts unless the applicable account type
            is specifically designed for shared access.
          </Bullet>
          <Bullet>
            Ensure users have only the permissions reasonably required for
            their responsibilities.
          </Bullet>
          <Bullet>
            Notify Meditix promptly if you believe an account has been
            compromised.
          </Bullet>
          <Bullet>
            You are responsible for activity performed through accounts under
            your organization, except where prohibited by applicable law.
          </Bullet>
        </BulletList>
      </Section>

      <Section
        id="acceptable-use"
        icon={FiSlash}
        number="04"
        title="Acceptable Use"
      >
        <p>
          You agree to use Meditix only for lawful and authorized business
          purposes.
        </p>

        <p>You must not use the service to:</p>

        <BulletList>
          <Bullet>
            Access, copy, modify, or interfere with systems or data without
            authorization.
          </Bullet>
          <Bullet>
            Introduce malware, harmful code, automated attacks, or disruptive
            technologies.
          </Bullet>
          <Bullet>
            Attempt to bypass authentication, security controls, usage
            restrictions, or access permissions.
          </Bullet>
          <Bullet>
            Use the platform for fraudulent, misleading, unlawful, or abusive
            activity.
          </Bullet>
          <Bullet>
            Reverse engineer, decompile, or improperly reproduce the platform
            except where such restriction is prohibited by applicable law.
          </Bullet>
          <Bullet>
            Use another customer&apos;s account, confidential information, or
            data without authorization.
          </Bullet>
        </BulletList>

        <p>
          We may restrict access where reasonably necessary to protect Meditix,
          customers, users, or platform security.
        </p>
      </Section>

      <Section
        id="customer-data"
        icon={FiLock}
        number="05"
        title="Customer Data"
      >
        <p>
          You retain responsibility for information, records, files, and other
          content submitted to Meditix by or on behalf of your organization.
        </p>

        <p>
          You confirm that you have the rights, permissions, and lawful basis
          required to provide such data to Meditix and to instruct us to
          process it for the purpose of providing the services.
        </p>

        <p>
          Meditix may process customer data as reasonably necessary to provide,
          secure, maintain, support, and improve the contracted services,
          subject to applicable agreements and our Privacy Policy.
        </p>
      </Section>

      <Section
        id="fees"
        icon={FiCreditCard}
        number="06"
        title="Fees, Billing & Payments"
      >
        <p>
          Certain Meditix services may require payment of subscription,
          implementation, usage, integration, support, or other agreed fees.
        </p>

        <p>
          Pricing, billing cycles, taxes, payment terms, renewal conditions,
          and any applicable charges will be communicated through the relevant
          proposal, order form, subscription plan, invoice, or commercial
          agreement.
        </p>

        <p>
          You are responsible for providing accurate billing information and
          paying undisputed charges by the applicable due date.
        </p>
      </Section>

      <Section
        id="intellectual-property"
        icon={FiFileText}
        number="07"
        title="Intellectual Property"
      >
        <p>
          Meditix and its licensors retain all rights in the software,
          interfaces, source code, branding, designs, documentation, workflows,
          technology, and other intellectual property forming part of the
          Meditix services.
        </p>

        <p>
          Subject to your applicable subscription or agreement, Meditix grants
          authorized users a limited, non-exclusive, non-transferable right to
          use the services for internal business purposes during the applicable
          service period.
        </p>

        <p>
          Nothing in these Terms transfers ownership of Meditix intellectual
          property to you.
        </p>
      </Section>

      <Section
        id="third-party"
        icon={FiUsers}
        number="08"
        title="Third-Party Services & Integrations"
      >
        <p>
          Meditix may integrate with third-party products, payment providers,
          communication services, accounting systems, infrastructure
          providers, or other external services.
        </p>

        <p>
          Third-party services may be governed by their own terms, privacy
          policies, availability commitments, pricing, and technical
          limitations.
        </p>

        <p>
          Meditix is not responsible for changes, interruptions, or acts of
          independent third-party services outside our reasonable control.
        </p>
      </Section>

      <Section
        id="availability"
        icon={FiRefreshCw}
        number="09"
        title="Service Availability & Maintenance"
      >
        <p>
          We work to maintain a reliable and secure service, but uninterrupted
          or error-free availability cannot be guaranteed at all times.
        </p>

        <p>
          Access may occasionally be affected by planned maintenance, upgrades,
          internet failures, infrastructure issues, third-party interruptions,
          security incidents, emergencies, or circumstances outside our
          reasonable control.
        </p>

        <p>
          Where practical, we may provide advance notice of significant planned
          maintenance that is expected to materially affect service
          availability.
        </p>
      </Section>

      <Section
        id="disclaimers"
        icon={FiAlertTriangle}
        number="10"
        title="Important Disclaimers"
      >
        <p>
          Meditix is a pharmacy business and workflow management technology
          platform. It is intended to support operational processes and does
          not replace professional medical, pharmaceutical, legal, accounting,
          or regulatory judgment.
        </p>

        <p>
          Customers remain responsible for reviewing transactions,
          prescriptions, product information, inventory records, tax
          information, reports, access permissions, and other outputs before
          relying on them for operational or professional decisions.
        </p>

        <div className="mt-5 rounded-2xl border border-[#F2E1B6] bg-[#FFF9EB] p-5 text-sm leading-7 text-[#685933]">
          Meditix should not be used as the sole basis for making clinical or
          patient-care decisions. Qualified professionals remain responsible
          for decisions requiring professional judgment.
        </div>
      </Section>

      <Section
        id="liability"
        icon={FiShield}
        number="11"
        title="Limitation of Liability"
      >
        <p>
          To the extent permitted under applicable law, Meditix will not be
          responsible for indirect, incidental, special, consequential, or
          similar losses arising from circumstances outside our reasonable
          control or from unauthorized or improper use of the services.
        </p>

        <p>
          Any specific liability limits, warranties, service levels, or
          remedies agreed in a separately executed commercial agreement will
          apply according to that agreement.
        </p>

        <p>
          Nothing in these Terms excludes or limits liability where such
          liability cannot lawfully be excluded or limited.
        </p>
      </Section>

      <Section
        id="termination"
        icon={FiUserCheck}
        number="12"
        title="Suspension & Termination"
      >
        <p>
          You may stop using Meditix subject to your applicable subscription,
          notice period, order form, and contractual commitments.
        </p>

        <p>
          We may suspend or restrict access where reasonably necessary because
          of serious security risks, unlawful activity, material breach of
          these Terms, misuse of the service, or overdue amounts, subject to
          applicable agreements and requirements.
        </p>

        <p>
          Following termination, access to certain features or stored
          information may end according to applicable contractual and data
          retention arrangements.
        </p>
      </Section>

      <Section
        id="changes"
        icon={FiRefreshCw}
        number="13"
        title="Changes to These Terms"
      >
        <p>
          We may update these Terms periodically to reflect changes to our
          platform, services, business practices, security requirements, or
          applicable obligations.
        </p>

        <p>
          Updated Terms will be published on this page with a revised
          &quot;Last updated&quot; date. Material changes may also be
          communicated through appropriate channels where required.
        </p>
      </Section>

      <Section
        id="contact"
        icon={FiCheckCircle}
        number="14"
        title="Contact Us"
      >
        <p>
          If you have questions about these Terms & Conditions, your
          subscription, or use of the Meditix platform, contact our team through
          the Meditix website.
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