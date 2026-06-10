import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Parking NWA",
  description: "Privacy policy for Prime Parking NWA vehicle storage services in Rogers, AR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including your name, email address, phone number,
            billing information, and vehicle details when you rent a storage space or contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
          <p>
            We use your information to provide our parking and storage services, process payments,
            communicate with you about your account, and improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with service providers
            who assist us in operating our business, or when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access,
            use, or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please call us at{" "}
            <a href="tel:4796407396" className="text-[#1a365d] hover:underline">
              (479) 640-7396
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
