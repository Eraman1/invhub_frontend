import { useState } from "react";

const faqs = [
    {
        question: "What services does INVHUB provide?",
        answer: "We provide advanced safety solutions tailored to industrial and commercial environments, including surveillance, monitoring, and protection systems.",
    },
    {
        question: "How can I contact support?",
        answer: "You can reach us via our support email or phone number listed in the Contact Us section of our website.",
    },
    {
        question: "Do you offer installation services?",
        answer: "Yes, we provide on-site installation and configuration services for all our safety systems.",
    },
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
