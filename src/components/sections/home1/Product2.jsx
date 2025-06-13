// components/ServicesSection.jsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid } from "lucide-react"

const products = [
    {
        title: "Business Strategy",
        description: "We help you define a clear business strategy to grow fast.Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.",
        images: [
            "assets/images/glamorous-curly-lady.jpg",
            "assets/images/Convert-your-Balcony.webp",
            "assets/images/glamorous-curly-lady.jpg",

        ],
    },
    {
        title: "Web Development",
        description: "Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.",
        images: [
            "assets/images/glamorous-curly-lady.jpg",
            "assets/images/Convert-your-Balcony.webp",
            "assets/images/glamorous-curly-lady.jpg",
        ],
    },
    {
        title: "Web Development",
        description: "Modern, fast, and secure websites using React and Tailwind. Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.Modern, fast, and secure websites using React and Tailwind.",
        images: [
            "assets/images/glamorous-curly-lady.jpg",
            "assets/images/Convert-your-Balcony.webp",
            "assets/images/glamorous-curly-lady.jpg",
        ],
    },
    // Add more services as needed
];

export default function ProductSection() {
    const [carouselIndex, setCarouselIndex] = useState({});

    // Auto-rotate images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prev) => {
                const updated = {};
                products.forEach((_, i) => {
                    updated[i] = (prev[i] ?? 0) + 1;
                });
                return updated;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const getImageIndex = (serviceIdx, imagesLength) =>
        (carouselIndex[serviceIdx] ?? 0) % imagesLength;

    const gridCols =
        products.length === 1
            ? "grid-cols-1 place-items-center"
            : products.length === 2
                ? "grid-cols-1 md:grid-cols-2 place-items-center"
                : "grid-cols-1 md:grid-cols-3";

    return (
        <section className="py-16 bg-gradient-to-br from-[#0f0f0f] via-[#e0c47a] to-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
                        <LayoutGrid className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-yellow-400 font-medium">Products</span>
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Products
                </h2>
                <div className={`grid ${gridCols} gap-8`}>
                    {products.map((product, idx) => {
                        const currentImage =
                            product.images[getImageIndex(idx, product.images.length)];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-xl p-3 rounded-2xl shadow-lg w-full max-w-md border border-gray-700 hover:scale-105 transition-transform duration-300"
                            >
                                <div className="mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={currentImage}
                                        alt={`${product.title} carousel`}
                                        className="w-full h-[250px] object-cover rounded-lg transition duration-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400 text-center mb-4">
                                    {product.description}
                                </p>
                                <div className="text-center">
                                    <Link to={`/service`} className="services-two__learn-more text-white">
                                        View Details<span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
