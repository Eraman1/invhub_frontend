// components/WhyInvisibleGrill.jsx
import { useState } from 'react';

const benefits = [
    {
        title: 'Aesthetic Appeal',
        content: `Mesh doors offer a sleek, minimalistic design that blends effortlessly with modern and traditional home styles. They maintain visibility and airflow while adding a clean, unobtrusive look to your main doors or balconies.`,
    },
    {
        title: 'Maintenance and Durability',
        content: `Crafted from high-quality stainless steel or aluminum mesh, these doors are rust-resistant and built to withstand daily wear and tear. They require little maintenance and are easy to clean, ensuring long-lasting protection.`,
    },
    {
        title: 'Enhance Property Value',
        content: `Mesh doors boost your home’s functionality and security without compromising aesthetics. Their added safety and ventilation features make your property more attractive to potential buyers or tenants.`,
    },
    {
        title: 'Insect Protection',
        content: `Mesh doors act as a reliable barrier against mosquitoes, flies, and other insects, allowing you to enjoy fresh air indoors without worrying about pests.`,
    },
    {
        title: 'Improved Ventilation',
        content: `They promote better airflow throughout your home while keeping it secure. This helps maintain a cooler indoor environment and reduces dependency on air conditioning.`,
    },
    {
        title: 'Safety with Visibility',
        content: `Mesh doors provide an additional layer of security while allowing you to see who’s outside. Their transparent design offers peace of mind without sacrificing visibility.`,
    }
];

export default function WhyMeshDoor() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-[#f8f9fa] py-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <div className="border-l-4 border-yellow-600 pl-4 inline-block text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                        Why choose Mesh Door over Traditional Grills?
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
