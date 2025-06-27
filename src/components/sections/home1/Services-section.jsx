
import { Shield, Grid, Lock, Eye, CheckCircle, Star, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react"
import { useState } from "react"

const meshDoorTypes = ["Sliding Mesh Doors", "Hinged Mesh Doors", "Folding Mesh Doors", "Automatic Mesh Doors"]

const invisibleGrillTypes = [
    "Balcony Safety Grills",
    "Window Safety Grills",
    "Staircase Safety Grills",
    "Terrace Safety Grills",
]

const meshDoorFeatures = ["Enhanced Security", "Pest Control", "Natural Ventilation", "Easy Maintenance"]

const invisibleGrillFeatures = ["Child Safety", "Unobstructed Views", "Weather Resistant", "Modern Aesthetics"]

const meshDoorImages = [
    {
        src: "/assets/images/meshdoor0.png",
        alt: "Modern Sliding Mesh Door Installation",
        title: "Sliding Mesh Door",
    },
    {
        src: "/assets/images/meshdoor1.png",
        alt: "Premium Hinged Mesh Door Design",
        title: "Hinged Mesh Door",
    },
    {
        src: "/assets/images/meshdoor2.png",
        alt: "Automatic Mesh Door System",
        title: "Automatic Mesh Door",
    },
]

const invisibleGrillImages = [
    {
        src: "/assets/images/invisible0.jpg",
        alt: "Balcony Invisible Safety Grill",
        title: "Balcony Safety Grill",
    },
    {
        src: "/assets/images/invisible1.png",
        alt: "Window Invisible Grill Installation",
        title: "Window Safety Grill",
    },
    {
        src: "/assets/images/invisible2.jpg",
        alt: "Terrace Invisible Safety Solution",
        title: "Terrace Safety Grill",
    },
]

function ImageCarousel({ images, serviceType }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative mb-6">
            <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100">
                <img
                    src={images[currentIndex].src || "/placeholder.svg"}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{images[currentIndex].title}</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
                <ChevronLeft className="h-4 w-4 text-gray-700" />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
                <ChevronRight className="h-4 w-4 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-amber-500" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default function ServicesSection() {
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
                        <LayoutGrid className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-yellow-400 font-medium">Services</span>
                    </div>
                </div>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Safety Solutions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Protecting your space with innovative mesh doors and invisible grills designed for modern living
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Mesh Door Service */}
                    <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900  p-6 pb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-amber-500 rounded-full">
                                    <Grid className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-100">Mesh Doors</h3>
                            </div>
                            <p className="text-gray-300 text-base">
                                Premium quality mesh doors that combine security, ventilation, and style for residential and commercial
                                spaces.
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            {/* Image Carousel */}
                            <ImageCarousel images={meshDoorImages} serviceType="mesh-door" />

                            {/* Types */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Star className="h-4 w-4 text-amber-500" />
                                    Available Types
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {meshDoorTypes.map((type, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-1 text-xs border border-amber-200 rounded-full text-gray-700 hover:bg-amber-50 transition-colors duration-200"
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6 flex-1">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-amber-500" />
                                    Key Features
                                </h4>
                                <div className="space-y-2">
                                    {meshDoorFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button fixed at bottom */}
                            <div className="mt-auto">
                                <a href="/mesh-door" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                                    <Shield className="h-4 w-4" />
                                    Learn More About Mesh Doors
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Invisible Grill Service */}
                    <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900  p-6 pb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-amber-500 rounded-full">
                                    <Eye className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-100">Invisible Grills</h3>
                            </div>
                            <p className="text-gray-300 text-base">
                                Transparent safety solutions that provide maximum protection without compromising your view or
                                aesthetics.
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            {/* Image Carousel */}
                            <ImageCarousel images={invisibleGrillImages} serviceType="invisible-grill" />

                            {/* Types */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Star className="h-4 w-4 text-amber-500" />
                                    Available Types
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {invisibleGrillTypes.map((type, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-1 text-xs border border-amber-200 rounded-full text-gray-700 hover:bg-amber-50 transition-colors duration-200"
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6 flex-1">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-amber-500" />
                                    Key Features
                                </h4>
                                <div className="space-y-2">
                                    {invisibleGrillFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button fixed at bottom */}
                            <div className="mt-auto">
                                <a href="/invisible-grills" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                                    <Lock className="h-4 w-4" />
                                    Learn More About Invisible Grills
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Secure Your Space?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Contact INVHUB Safety Solutions today for a free consultation and custom quote for your mesh door or
                            invisible grill requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors duration-200">
                                Get Free Quote
                            </button>
                            <button className="px-6 py-3 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors duration-200">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
