import { useState } from "react";

const items = [
    {
        title: "Material Specifications",
        image: "/images/grill-material.jpg", // update with your actual image path
        points: [
            "High-tensile stainless steel wires",
            "Rust and corrosion-resistant",
            "UV-protected coatings",
        ],
    },
    {
        title: "Applications",
        image: "/images/grill-application.jpg",
        points: [
            "Balconies & windows in high-rise buildings",
            "Schools & institutions",
            "Hospitals & hotels",
        ],
    },
    {
        title: "Solutions",
        image: "/images/grill-solutions.jpg",
        points: [
            "Child safety",
            "Pet protection",
            "Anti-burglary design with elegance",
        ],
    },
];

export default function GrillFeatureCards() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="bg-[#f8f9fa] py-16 px-4 md:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl shadow-lg group transition-transform duration-300 transform hover:scale-[1.02]"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute bottom-0 w-full bg-white p-4 rounded-t-xl transition-all duration-300 shadow-xl">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <span className="text-xl text-yellow-600">&raquo;&raquo;</span>
                                    <span>{item.title}</span>
                                </h3>
                                {hoveredIndex === index && (
                                    <ul className="mt-3 text-gray-700 text-sm list-disc list-inside space-y-1">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
