// components/InvisibleGrills.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

const images = [
    "/assets/images/meshdoor0.png",
    "/assets/images/meshdoor1.png",
    "/assets/images/meshdoor2.png",
];

export default function HeroSection() {
    return (
        <section className="bg-[#f8f9fa] text-gray-800 py-24 px-6 md:px-20 font-sans">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
                Home <span className="mx-2 text-yellow-600">•</span> Mesh Door
            </nav>

            {/* Title */}
            <h1 className="text-5xl font-serif text-yellow-700 font-semibold mb-4">Mesh Door</h1>
            <p className="text-lg text-gray-600 mb-10">Please review our services</p>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Text */}
                <div className="space-y-2">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        INVHUB Safety Solutions Pvt. Ltd. provides premium mesh doors that blend security with ventilation. These durable yet stylish doors are perfect for homes, offices, and commercial spaces.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Enjoy fresh air and protection from insects without compromising on aesthetics. Explore some of our mesh door installations in the slider.
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
