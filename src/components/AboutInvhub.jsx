import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TestimonialSection from "../components/sections/home1/Testimonial2";



const sections = [
    {
        title: "Our Vision",
        content: [
            { type: "paragraph", text: "We work to set the standard in modern safety infrastructure, driven by innovation, reliability, and excellence." },
            { type: "paragraph", text: "Our goal is to redefine security and safety with advanced, aesthetically pleasing solutions designed for modern trends." }
        ]
    },
    {
        title: "Our Mission",
        content: [
            { type: "paragraph", text: "To protect what matters most to you by providing the latest safety products and services that are both effective and visually appealing." }
        ]
    },
    {
        title: "Our Values",
        content: [
            {
                type: "list",
                items: [
                    "Reliability: You can count on us for quality and consistency.",
                    "Customer Focus: Your safety and satisfaction are at the heart of everything we do."
                ]
            },
            {
                type: "paragraph",
                text: "Whether you're looking for the latest in security or want to enhance your space with stylish, sustainable solutions, INVHUB is here to deliver peace of mind."
            }
        ]
    }
];


const different = [
    {
        title: "Our Vision testing",
        content: `Our vision is to be the benchmark in providing modern safety infrastructure with a commitment to innovation, reliability, and excellence. We aim to redefine the standards of security and safety through advanced and aesthetic solutions tailored for evolving environments.`
    },
    {
        title: "Our Mission",
        content: `Our mission is to deliver world-class safety solutions with a focus on quality, transparency, and customer satisfaction. We continuously invest in technology and people to build long-lasting relationships and safer spaces.`
    },
    {
        title: "Our Values",
        content: `Integrity, innovation, accountability, and customer-centricity are the cornerstones of our business. We strive to stay ahead of industry trends, uphold trust, and deliver unmatched service and safety assurance.`
    }
];

const AboutInvhubSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="bg-white py-16 text-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-10">

                        <h2 className="text-4xl font-bold text-[#D4AF37] mb-2">
                            Explore Our Story
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            INVHUB Safety Solutions Pvt Ltd was founded with the vision of building a safer world. Since
                            our inception, we've pioneered safety innovations for both
                            industrial and residential spaces — enhancing security, style, and
                            sustainability across the nation.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-md divide-y divide-gray-300">
                        {sections.map((item, index) => (
                            <div key={index}>
                                <button
                                    className="w-full flex justify-between items-center text-left p-3 font-semibold text-lg hover:bg-gray-200 transition duration-200"
                                    onClick={() => toggleSection(index)}
                                >
                                    {item.title}
                                    <span className="text-[#D4AF37]">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>

                                {openIndex === index && (
                                    <div className="p-3 text-gray-700 bg-white space-y-2">
                                        {item.content.map((block, i) => {
                                            if (block.type === "paragraph") {
                                                return <p key={i}>{block.text}</p>;
                                            } else if (block.type === "list") {
                                                return (
                                                    <ul key={i} className="list-disc list-inside space-y-1">
                                                        {block.items.map((li, j) => (
                                                            <li key={j}>{li}</li>
                                                        ))}
                                                    </ul>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="bg-white py-10 mb-5 px-4 md:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Mr. Thirumala Reddy and J Arun Reddy
                    </h2>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                        <span className="text-primary font-semibold">Founders</span> – INVHUB PVT. LTD
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Mr. Thirumala Reddy and J Arun Reddy, founders of INVHUB PVT. LTD, have transformed INVHUB into a global brand with their innovative ideas and products. Pioneers of invisible grills in India, they combine a passion for innovation with strong business acumen.
                    </p>
                </div>
            </section>
            {/* <TestimonialSection /> */}
            <section className="bg-light py-16 text-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-10">

                        <h2 className="text-4xl font-bold text-[#D4AF37] mb-2">
                            Have Questions? We’ve Got Answers.
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            INVHUB Safety Solution was founded with the vision of building a safer world. Since
                            our inception, we've pioneered safety innovations for both
                            industrial and residential spaces — enhancing security, style, and
                            sustainability across the nation.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-md divide-y divide-gray-300">
                        {different.map((item, index) => (
                            <div key={index}>
                                <button
                                    className="w-full flex justify-between items-center text-left p-3 font-semibold text-lg hover:bg-gray-200 transition duration-200"
                                    onClick={() => toggleSection(index)}
                                >
                                    {item.title}
                                    <span className="text-[#D4AF37]">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="p-5 text-gray-700 bg-white">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutInvhubSection;
