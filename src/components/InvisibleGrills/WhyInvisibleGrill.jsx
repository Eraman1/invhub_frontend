// components/WhyInvisibleGrill.jsx
import { useState } from 'react';

const benefits = [
    {
        title: 'Aesthetic Appeal',
        content: `Invisible grills provide a sleek and modern appearance to any building. Unlike bulky iron grills, these high-tensile stainless steel wires are almost invisible, maintaining unobstructed views and enhancing the overall elegance of your balcony or windows.`,
    },
    {
        title: 'Maintenance and Durability',
        content: `Our grills are rust-resistant, weatherproof, and made with premium stainless steel for long-term performance. They require minimal cleaning and are highly durable, ensuring safety without ongoing maintenance hassles.`,
    },
    {
        title: 'Enhance Property Value',
        content: `Invisible grills increase the aesthetic and safety value of your home, making it more appealing to buyers and tenants. They provide an upscale look that complements modern architecture and increases your property’s worth.`,
    },
];

export default function WhyInvisibleGrill() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-[#f8f9fa] py-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <div className="border-l-4 border-yellow-600 pl-4 inline-block text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                        Why choose Invisible Grill over Traditional Grills?
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${activeIndex === index ? 'border-yellow-600' : 'border-gray-300'
                            } rounded-md shadow-sm transition-all duration-300`}
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left px-6 py-4 flex justify-between items-center"
                        >
                            <span className="text-lg font-medium text-gray-800">{item.title}</span>
                            <span className="text-yellow-600 text-xl">
                                {activeIndex === index ? '−' : '+'}
                            </span>
                        </button>

                        {activeIndex === index && (
                            <div className="px-6 pb-4 text-gray-600 text-sm">{item.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
