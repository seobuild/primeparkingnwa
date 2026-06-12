import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Prime Parking NWA vehicle storage facility in Rogers, AR.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
          <p>
            By renting a parking or storage space at Prime Parking NWA, you agree to these terms.
            Please read them carefully before signing your rental agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Rental Terms</h2>
          <p>
            All rentals are on a month-to-month basis unless otherwise agreed. Rent is due on the date
            specified in your rental agreement. Failure to pay may result in late fees or termination of your rental.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Prohibited Items</h2>
          <p>
            Hazardous materials, flammable substances, illegal items, and living organisms are strictly prohibited.
            All vehicles and equipment must be in good working condition with no leaking fluids.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Liability</h2>
          <p>
            Prime Parking NWA is not responsible for loss or damage to stored property.
            We recommend that all tenants maintain their own insurance coverage for their vehicles and equipment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Facility Rules</h2>
          <p>
            Tenants must follow all posted facility rules, including speed limits, designated parking areas,
            and access procedures. The facility is monitored by video surveillance for security purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p>
            For questions about these terms, please call us at{" "}
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
