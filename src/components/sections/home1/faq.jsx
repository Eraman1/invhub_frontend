import { useState } from "react";

const faqs = [
    {
        question: "What products do INVhub offer?",
        answer:
            "We specialize in Invisible Grills and Mesh Doors that enhance safety without compromising aesthetics.",
    },
    {
        question: "Are INVhub’s safety solutions suitable for all home types?",
        answer:
            "Yes, our solutions are custom-designed to fit apartments, villas and even commercial spaces.",
    },
    {
        question: "How safe are INVhub’s Invisible Grills for children and pets?",
        answer:
            "Our grills use high-tensile stainless steel wire and are spaced to prevent children or pets from slipping through.",
    },
    {
        question: "Will the installation damage my walls or structure?",
        answer:
            "No, it will not damage the structure, as our team uses certified tools and clean methods to ensure zero damage during installation.",
    },
    {
        question: "Do your products come with a warranty?",
        answer:
            "Yes, we provide a warranty on all products to ensure long-lasting protection and customer satisfaction.",
    },
    {
        question: "How long does the installation process take?",
        answer:
            "Most installations are completed within a few hours, depending on the size and complexity of the space.",
    },
    {
        question: "How can I get a price quote?",
        answer:
            "You can contact us via our website, WhatsApp, or phone for a quick, free consultation and quote.",
    }
];
  

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-yellow-600 text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl bg-white shadow-sm"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
