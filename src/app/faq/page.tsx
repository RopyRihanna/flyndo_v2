export default function FAQPage() {
  const faqs = [
    {
      question: "How do I find the best flight deals?",
      answer: "Our platform automatically searches for the best deals across multiple airlines. We recommend being flexible with your travel dates, setting up price alerts, and booking in advance for the best prices."
    },
    {
      question: "Can I cancel or modify my flight booking?",
      answer: "Cancellation and modification policies vary by airline and fare type. We recommend checking the specific terms and conditions of your ticket before booking. Most airlines allow changes with a fee."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various local payment methods depending on your country."
    },
    {
      question: "How do I get my flight confirmation?",
      answer: "Once your booking is confirmed, we'll send your flight confirmation and e-ticket directly to your email address. You can also find your booking details in your account dashboard."
    },
    {
      question: "Do you offer price matching?",
      answer: "Yes, we offer a Best Price Guarantee. If you find a lower price for the same flight within 24 hours of booking, we'll refund the difference."
    },
    {
      question: "What happens if my flight is cancelled?",
      answer: "If your flight is cancelled by the airline, you're entitled to either a full refund or rebooking on the next available flight. Our customer service team will assist you with the process."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance options that cover flight cancellations, medical emergencies, lost baggage, and more. You can add insurance during the booking process."
    },
    {
      question: "How early should I arrive at the airport?",
      answer: "We recommend arriving 2-3 hours before international flights and 1-2 hours before domestic flights. This allows time for check-in, security, and any unexpected delays."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Find answers to common questions about our services and flight bookings.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}