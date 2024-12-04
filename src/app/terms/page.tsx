export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: March 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using FlightDeals, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Use of Services</h2>
              <p className="text-gray-600 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with other users' access to the service</li>
                <li>Submit false or misleading information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Booking and Payments</h2>
              <p className="text-gray-600 mb-4">
                When making a booking through our platform:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>You agree to pay all charges at the prices listed</li>
                <li>You understand that airlines' terms and conditions apply</li>
                <li>Refunds and changes are subject to airline policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on FlightDeals, including text, graphics, logos, and software, is our property and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                We strive to provide accurate information but cannot guarantee the accuracy of flight prices and availability. We are not liable for any losses or damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@flightdeals.com" className="text-blue-600 hover:text-blue-700">
                  legal@flightdeals.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}