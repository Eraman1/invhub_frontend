import React from "react";

const VisitSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[85vh] flex items-center justify-center"
            style={{
                backgroundImage: "url('/path-to/hero-bg.png')", // replace with your actual image path
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
            <div className="relative text-center text-white max-w-3xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Your Space Deserves <span className="text-[#D4AF37]">InvHub.</span>
                </h1>
                <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto my-4"></div>
                <p className="text-lg md:text-xl mb-8">
                    Let’s Make It Safer, Sleeker, and Smarter — Together.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                        SCHEDULE A SITE VISIT
                    </button>
                    <button className="bg-[#C7A1A1] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b08989] transition">
                        REQUEST A QUOTE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisitSection;