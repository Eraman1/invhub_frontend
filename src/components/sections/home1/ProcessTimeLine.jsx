export default function ProcessTimeline() {
    const steps = [
        { title: "Discover", number: "01" },
        { title: "Strategize", number: "02" },
        { title: "Visualize", number: "03" },
        { title: "Execute", number: "04" },
        { title: "Deliver", number: "05" },
        { title: "Warranty", number: "06" },
    ];

    return (
        <section className="bg-gradient-to-br from-[#dcdcdc] to-[#f5f5f5] py-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-14">
                <span className="text-yellow-500">Our Process:</span> Making Your Space Safer & Smarter
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg rounded-xl px-6 py-10 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg shadow-md">
                            {step.number}
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
