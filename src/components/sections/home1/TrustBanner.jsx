import React from 'react';
// import Logo from './path-to-logo.png'; // Update with actual path
import BannerImage from './../../../../public/assets/images/newBanner.jpg'; // Update with actual path

const TrustBanner = () => {
    return (
        <section className="bg-[#fef8f4] py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-md">
            {/* Left Side - Image */}
            <div className="md:w-1/2 w-full mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                        src={BannerImage}
                        alt="Couple on balcony"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 w-full p-3 sm:p-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1e293b] leading-tight mb-4">
                    Discover Why India’s Top Builders Trust{' '}
                    <span className="text-[#007BBD] font-bold">Invhub</span> For Invisible Grill Solutions.
                </h2>

                <button className="bg-[#1cabf2]  text-white px-6 py-3 rounded-full shadow hover:bg-[#005f95] transition duration-300 text-sm font-semibold">
                    BOOK A CONSULTATION
                </button>


            </div>
        </section>
    );
};

export default TrustBanner;
