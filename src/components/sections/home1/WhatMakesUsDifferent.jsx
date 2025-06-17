import React from 'react';

const WhatMakesUsDifferent = () => {
    return (
        <section className="bg-[linear-gradient(135deg, #dcdcdc, #f5f5f5);] py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">What Makes Us Different</h2>
                <p className="text-gray-700 mb-10">
                    See why top builders, architects & companies trust <span className="font-semibold text-gold">INVHUB</span> over local competitors.
                </p>

                <div className="grid md:grid-cols-3 gap-8 bg-[#1a1a1a] rounded-2xl shadow-lg p-6">
                    <div className="text-left font-semibold text-silver">
                        <p className="py-2 border-b border-gray-600">FEATURE</p>
                        <p className="py-2">Installation Tools</p>
                        <p className="py-2">Wire Material</p>
                        <p className="py-2">Safety Testing</p>
                        <p className="py-2">Clients</p>
                    </div>

                    <div className="text-left bg-[#262626] rounded-xl p-4">
                        <p className="text-xl text-gold font-semibold mb-4">INVHUB</p>
                        <ul className="space-y-3 text-sm text-white">
                            <li>✅ Certified Tools</li>
                            <li>✅ Imported (Europe)</li>
                            <li>✅ Global Testing Standards</li>
                            <li>✅ Clients: L&T, Adani, DRDO</li>
                        </ul>
                    </div>

                    <div className="text-left bg-[#121212] rounded-xl p-4 border border-gray-700">
                        <p className="text-xl text-red-400 font-semibold mb-4">Others</p>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>❌ Local Tools</li>
                            <li>❌ Local Materials</li>
                            <li>❌ Basic/No Testing</li>
                            <li>❌ Unverified Clients</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;
