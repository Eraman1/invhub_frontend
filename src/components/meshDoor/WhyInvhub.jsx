import { useState } from "react";

const reasons = [
    {
        title: "1. Superior Build Quality",
        content:
            "INVHUB’s mesh doors are crafted from high-grade stainless steel or aluminum mesh, ensuring long-lasting durability, rust resistance, and reliable protection against wear and tear.",
    },
    {
        title: "2. Elegant and Functional Design",
        content:
            "Our mesh doors are designed to complement any home or office aesthetic. They offer a clean, modern look while allowing natural light and airflow to pass through effortlessly.",
    },
    {
        title: "3. Enhanced Security and Safety",
        content:
            "With tightly woven mesh and sturdy frames, our doors provide an extra layer of security without compromising ventilation. Ideal for families with children and pets.",
    },
    {
        title: "4. Precision Installation",
        content:
            "Each door is installed by skilled technicians using precision tools, ensuring a perfect fit, smooth operation, and long-term performance without compromise.",
    },
    {
        title: "5. Responsive Customer Support",
        content:
            "Our dedicated support team is here to assist you throughout the process—from product selection to after-installation care. Your satisfaction is our priority.",
    },
    {
        title: "6. All-in-One Protection Solution",
        content:
            "INVHUB mesh doors offer the perfect balance of aesthetics, insect protection, ventilation, and security—making them an ideal upgrade for modern living.",
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
                        Why only <span className="text-yellow-600">INVHUB Safety Solutions</span> Private Limited Mesh Door
                    </h2>
                    <p className="text-gray-600 md:w-1/2 mt-4 md:mt-0">
                        Choosing INVHUB’s mesh doors means investing in enhanced security, sleek design, and long-lasting quality. From durable materials to expert installation and dedicated support, here’s why our mesh doors are the smart choice for modern homes and offices.
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
