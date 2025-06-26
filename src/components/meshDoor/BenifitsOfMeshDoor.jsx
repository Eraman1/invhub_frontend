export default function BenefitsOfMeshDoor() {
    const benefits = [
        "Insect Protection",
        "Improved Ventilation",
        "Enhanced Security",
        "Aesthetic and Sleek Design",
        "Rust and Weather Resistance",
        "Low Maintenance",
        "Custom Fit for Any Door Size",
        "Child and Pet Friendly",
        "UV Protection Options",
        "Durable Mesh Materials",
        "Professional Installation",
    ];

    return (
        <section className="bg-white py-14 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight flex items-center gap-4">
                        <span className="inline-block w-8 h-1 bg-yellow-600 rounded-full"></span>
                        BENEFITS OF MESH DOOR
                    </h2>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>

                <p className="mt-8 text-gray-600 text-md leading-relaxed">
                    Mesh doors are a perfect blend of safety, comfort, and design. They keep insects out, allow fresh air in, and provide additional security—making them an excellent upgrade for homes and workspaces alike.
                </p>
            </div>
        </section>
    );
}
