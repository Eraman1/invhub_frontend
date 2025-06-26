// components/InvisibleGrills.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

const images = [
    "/images/invisible1.png",
    "/images/invisible2.png",
    "/images/invisible3.png",
];

export default function HeroSection() {
    return (
        <section className="bg-[#f8f9fa] text-gray-800 py-24 px-6 md:px-20 font-sans">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
                Home <span className="mx-2 text-yellow-600">•</span> Invisible Grills
            </nav>

            {/* Title */}
            <h1 className="text-5xl font-serif text-yellow-700 font-semibold mb-4">Invisible Grills</h1>
            <p className="text-lg text-gray-600 mb-10">Please review our services</p>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Text */}
                <div className="space-y-2">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        INVHUB Safety Solutions Pvt. Ltd. offers invisible grills that combine aesthetics with safety. These transparent yet sturdy installations are ideal for balconies, windows, and high-rises.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Experience peace of mind without compromising your view. Explore some of our premium installations in the slider.
                    </p>
                </div>

                {/* Image Slider */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        effect="fade"
                        loop
                        autoplay={{ delay: 4000 }}
                        className="w-full h-80"
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={src}
                                    alt={`Invisible grill ${idx + 1}`}
                                    className="w-full h-80 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
