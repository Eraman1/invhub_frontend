import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TestimonialSection from "../components/sections/home1/Testimonial2";



const sections = [
    {
        title: "Our Vision",
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
                            INVHUB was founded with the vision of building a safer world. Since
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
                                    <div className="p-5 text-gray-700 bg-white">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <TestimonialSection />
            <section className="bg-light py-16 text-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-10">

                        <h2 className="text-4xl font-bold text-[#D4AF37] mb-2">
                            Have Questions? We’ve Got Answers.
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            INVHUB was founded with the vision of building a safer world. Since
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
