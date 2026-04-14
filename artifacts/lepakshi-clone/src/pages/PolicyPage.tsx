import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams } from "wouter";

const policies: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  "shipping-policy": {
    title: "Shipping Policy",
    sections: [
      {
        heading: "Delivery Across India",
        body: "We ship to all states and union territories across India. Orders are dispatched within 1–3 business days of payment confirmation. Delivery typically takes 5–7 business days depending on your location.",
      },
      {
        heading: "Shipping Charges",
        body: "Shipping is free on all orders above ₹999. For orders below ₹999, a flat shipping charge of ₹60 is applied. Shipping charges are displayed clearly at checkout before payment.",
      },
      {
        heading: "Packaging",
        body: "All sarees and lehengas are securely packed to prevent damage in transit. Delicate garments are individually wrapped in tissue paper and placed in protective packaging. We take great pride in delivering your order in perfect condition.",
      },
      {
        heading: "Tracking Your Order",
        body: "Once your order is dispatched, you will receive a tracking number via SMS and email. You can use this tracking number to monitor your delivery status through the courier partner's website.",
      },
      {
        heading: "Delays & Exceptions",
        body: "Delivery timelines may vary during peak seasons, public holidays, or due to unforeseen circumstances. In case of significant delays, our customer support team will proactively contact you with an update.",
      },
    ],
  },
  "refund-policy": {
    title: "Refund & Return Policy",
    sections: [
      {
        heading: "7-Day Return Window",
        body: "We accept returns within 7 days of delivery. To be eligible for a return, the item must be unused, unwashed, and in its original condition with all tags intact. Items that show signs of use or damage will not be accepted.",
      },
      {
        heading: "How to Initiate a Return",
        body: "To initiate a return, contact us via Instagram DM or WhatsApp within 7 days of receiving your order. Share your order details and reason for return, along with photos of the product. Our team will guide you through the process.",
      },
      {
        heading: "Refund Process",
        body: "Once we receive and inspect the returned item, we will process your refund within 5–7 business days. Refunds are issued to the original payment method. Shipping charges are non-refundable unless the return is due to a defective or incorrect product.",
      },
      {
        heading: "Exchange Policy",
        body: "We offer exchanges for a different color or design of equal or higher value (with top-up payment). Exchange requests must also be made within 7 days of delivery.",
      },
      {
        heading: "Non-Returnable Items",
        body: "Custom-order items, sale/offer zone products, and items purchased during special promotions may not be eligible for returns. This will be clearly indicated at the time of purchase.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you place an order or create an account, we collect your name, email address, phone number, and delivery address. We may also collect browsing data through cookies to improve your shopping experience.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used to process orders, send delivery updates, and provide customer support. With your consent, we may also use your contact details to share news about new arrivals and exclusive offers.",
      },
      {
        heading: "Data Security",
        body: "We take the security of your personal data seriously. All payment information is processed through secure, encrypted payment gateways. We do not store your card details on our servers.",
      },
      {
        heading: "Third-Party Sharing",
        body: "We do not sell or rent your personal information to third parties. We share only the necessary data (name, address) with our courier partners to fulfill your delivery.",
      },
      {
        heading: "Cookies",
        body: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You may disable cookies through your browser settings, though this may affect certain functionalities of the website.",
      },
      {
        heading: "Contact for Privacy Concerns",
        body: "If you have any questions about how we handle your data, please contact us through our Instagram handles or via the contact form on our website. We will respond within 2 business days.",
      },
    ],
  },
};

export function PolicyPage() {
  const params = useParams<{ slug: string }>();
  const policy = policies[params.slug ?? ""] ?? {
    title: "Policy",
    sections: [{ heading: "Coming Soon", body: "This policy page is being updated. Please check back later." }],
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="font-heading text-3xl sm:text-4xl font-normal text-white">{policy.title}</h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-10">
            {policy.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading text-xl font-normal text-white mb-3">{section.heading}</h2>
                <p className="text-white/60 text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/35">
            <p>Last updated: April 2026. For questions, reach us on Instagram @srinilayametro.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
