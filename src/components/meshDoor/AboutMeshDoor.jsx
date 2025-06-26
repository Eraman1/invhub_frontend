// components/InvisibleGrillInfo.tsx
import React from "react";

export default function AboutMeshDoor() {
    return (
        <section className="bg-white text-gray-800 px-6 py-12 md:px-20 md:py-16 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Content */}
                <div>
                    <div className="border-l-4 border-yellow-600 pl-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            What is MeshDoor?
                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At <span className="text-yellow-700 font-semibold">INVHUB Safety Solutions Pvt. Ltd.</span>, we specialize in premium mesh door solutions that offer the perfect balance of <strong>ventilation</strong> and <strong>security</strong>.
                        Our mesh doors are built using high-quality stainless steel or aluminum mesh, ensuring durability and modern appeal.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Unlike conventional doors that restrict airflow or require constant maintenance, INVHUB’s mesh doors are <strong>sleek, rust-resistant, and highly functional</strong>. They allow fresh air to circulate while keeping insects and dust out—ideal for urban and suburban homes alike.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether it's for a home, villa, or commercial space, our mesh doors enhance comfort, boost aesthetics, and offer reliable protection in every environment.
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
