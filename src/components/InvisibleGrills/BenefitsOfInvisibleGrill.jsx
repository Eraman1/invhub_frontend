export default function BenefitsOfInvisibleGrill() {
    const benefits = [
        "Enhanced Safety",
        "Aesthetic Appeal",
        "Durability",
        "Low maintenance",
        "Customization options",
        "Versatility",
        "Compliance with Regulation",
        "Increased Property Value",
        "Eco Friendly Sustainable Materials",
        "Integration with Architectural Designs",
        "Professional Installation",
    ];

    return (
        <section className="bg-white py-14 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight flex items-center gap-4">
                        <span className="inline-block w-8 h-1 bg-yellow-600 rounded-full"></span>
                        BENEFITS OF INVISIBLE GRILL
                    </h2>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>

                <p className="mt-8 text-gray-600 text-md leading-relaxed">
                    Invisible grills offer a combination of safety, aesthetics, durability, and customization options, making them an ideal choice for securing windows and balconies in modern buildings.
                </p>
            </div>
        </section>
    );
}
  