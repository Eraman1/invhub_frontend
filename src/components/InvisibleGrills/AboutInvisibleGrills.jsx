// components/InvisibleGrillInfo.tsx
import React from "react";

export default function AboutInvisibleGrills() {
    return (
        <section className="bg-white text-gray-800 px-6 py-12 md:px-20 md:py-16 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Content */}
                <div>
                    <div className="border-l-4 border-yellow-600 pl-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            What is Invisible Grill?
                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At <span className="text-yellow-700 font-semibold">INVHUB Safety Solutions Pvt. Ltd.</span>, we specialize in cutting-edge invisible grill installations that offer both <strong>safety</strong> and <strong>style</strong>.
                        These grills are crafted from high-tensile stainless steel wires and provide a virtually transparent shield for your balconies and windows.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Unlike traditional metal grills that are bulky and obstruct views, INVHUB's invisible grills are <strong>sleek, discreet, and secure</strong>. They blend seamlessly into modern architecture,
                        offering a panoramic view without compromising on protection.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether it's a high-rise apartment, villa, or office space, our invisible grill systems bring a contemporary aesthetic and peace of mind to every setting.
                    </p>
                </div>

                {/* Right: Contact Form */}
                <div>
                    <div className="border-l-4 border-yellow-600 pl-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            Contact
                        </h2>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                        />
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="Your Location"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
