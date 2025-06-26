import { useState } from "react";

const reasons = [
    {
        title: "1. Quality And Durability",
        content:
            "INVHUB’s invisible grills are made of high-tensile stainless steel, offering maximum strength and rust resistance. They are engineered to last for years with minimal maintenance.",
    },
    {
        title: "2. Aesthetic Appeal",
        content:
            "With near-invisible wires, our grills ensure you enjoy uninterrupted views while maintaining a sleek, modern aesthetic that blends with any architecture.",
    },
    {
        title: "3. Safety Compliance",
        content:
            "We follow strict safety standards to protect your children, pets, and loved ones. Each installation is tested for tension and durability.",
    },
    {
        title: "4. Professional Installation",
        content:
            "Our trained professionals ensure clean, accurate, and efficient installations using specialized equipment and techniques.",
    },
    {
        title: "5. Customer Service And Support",
        content:
            "At INVHUB, we pride ourselves on prompt support and clear communication—from consultation to post-installation service.",
    },
    {
        title: "6. Comprehensive Solution",
        content:
            "From consultation to design and installation, INVHUB offers a full-service package tailored to meet your building’s unique needs.",
    },
];

export default function WhyInvhubSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-14 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-tight">
                        Why only <span className="text-yellow-600">INVHUB Safety Solutions</span> Private Limited Invisible Grills
                    </h2>
                    <p className="text-gray-600 md:w-1/2 mt-4 md:mt-0">
                        Choosing INVHUB's invisible grills can be beneficial for several reasons, including our strong reputation, top-quality products, and excellent customer service. Here’s why you should choose us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((item, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                            >
                                <span className="text-gray-800 font-medium">{item.title}</span>
                                <span className="text-yellow-600 text-xl">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
