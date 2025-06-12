import { useState } from "react";

export default function HeroSection() {
    const [showVideo, setShowVideo] = useState(false);

    const openVideo = () => setShowVideo(true);
    const closeVideo = () => setShowVideo(false);

    return (
        <section
            className="relative pt-12 text-[#1a1a1a] bg-gradient-to-br from-[#f5f7fa] to-[#e4e7ec] bg-cover bg-center"
            style={{
                backgroundImage: "url('assets/images/shapes/page-header-shape-1.png')",
            }}
        >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
                {/* Left - Image with Play Button */}
                <div className="relative w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="assets/images/demo_img.jpg"
                        alt="Demo"
                        className="rounded-lg w-full h-auto"
                    />
                    <button
                        onClick={openVideo}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition duration-300"
                    >
                        <div className="bg-gray-200 p-3 rounded-full shadow-lg hover:scale-105 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-gray-800"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Right - Text Content */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
                        Discover Why India’s Top Builders Trust{" "}
                        <span className="text-yellow-500">Invhub</span> For Invisible Grill
                        Solutions.
                    </h2>
                    <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg">
                        BOOK A CONSULTATION
                    </button>
                </div>
            </div>

            {showVideo && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
                    style={{ zIndex: 9999 }}
                >
                    <div className="relative w-full max-w-3xl aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Demo Video"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        ></iframe>

                        {/* Close Button */}
                        <button
                            onClick={closeVideo}
                            className="absolute -top-6 right-0 text-white text-4xl font-bold hover:text-yellow-400 transition"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}
