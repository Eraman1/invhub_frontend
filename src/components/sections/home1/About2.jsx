"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Shield, Award, Users, Eye, Lock, ArrowRight, Star, MapPin, Phone, Mail } from "lucide-react"

export default function EnhancedAbout({ isAboutPage = false }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const stats = [
        { number: "1000+", label: "Protected Homes", icon: Shield },
        { number: "2018", label: "Certified Since", icon: Award },
        { number: "100%", label: "Client Satisfaction", icon: CheckCircle },
        { number: "24/7", label: "Support Available", icon: Users },
    ]

    const features = [
        {
            icon: Eye,
            title: "Invisible Protection",
            description: "Maintain your beautiful view while ensuring complete safety",
        },
        {
            icon: Shield,
            title: "Maximum Security",
            description: "Advanced safety solutions without compromising aesthetics",
        },
        {
            icon: Lock,
            title: "Sliding Security Doors",
            description: "Premium sliding security doors available across India",
        },
        {
            icon: Shield,
            title: "Maximum Security",
            description: "Advanced safety solutions without compromising aesthetics",
        },
    ]

    const services = [
        { name: "Invisible Grills", image: "/placeholder.svg?height=150&width=200" },
        // { name: "Mosquito Nets", image: "/placeholder.svg?height=150&width=200" },
        { name: "Mesh Door", image: "/placeholder.svg?height=150&width=200" },

    ]

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div> */}

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Enhanced Visual Content */}


                    {/* Right Side - Content */}
                    <div
                        className={`relative transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                    >
                        {/* Main Hero Image with Overlay Content */}
                        <div className="relative mb-8">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                                <img
                                    src="assets/images/forAbout.jpg"
                                    alt="INVHUB Safety Solutions - Invisible Grills"
                                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Overlay Content */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                                                <Shield className="w-6 h-6 text-black" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg">Premium Safety Solutions</h3>
                                                <p className="text-gray-200 text-sm">Protecting homes across India</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-200">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span>5.0 Rating</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>Hyderabad</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Gallery */}
                        {/* <div className="grid grid-cols-2 gap-4 mb-8">
                            {services.map((service, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                                        <img
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.name}
                                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white text-xs font-medium text-center">{service.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        {/* Stats */}


                        {/* CTA Button */}
                        {!isAboutPage && (
                            <div className="flex gap-4">
                                <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                    Learn More About Us
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                {/* <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300">
                                    Our Services
                                </button> */}
                            </div>
                        )}

                        {/* Two Column Layout */}
                        {/* <div className="grid grid-cols-2 gap-6">
                            Certification Badge - Enhanced
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-xl border border-gray-700 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full -translate-y-10 translate-x-10"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-black" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">Certified Company</h3>
                                    <p className="text-gray-300 text-sm mb-3">Since 2018</p>
                                    <div className="flex justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div> */}

                        {/* Contact Info Card */}
                        {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Phone className="w-6 h-6 text-black" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">Get Quote</h4>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Phone className="w-4 h-4 text-yellow-500" />
                                        <span>+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Mail className="w-4 h-4 text-yellow-500" />
                                        <span>info@invhub.com</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="w-4 h-4 text-yellow-500" />
                                        <span>Hyderabad, India</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full animate-bounce delay-500"></div>
                        <div className="absolute top-1/2 -right-5 w-8 h-8 bg-gradient-to-r from-amber-400/30 to-yellow-500/30 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute -bottom-5 left-1/3 w-6 h-6 bg-gradient-to-r from-yellow-500/30 to-amber-400/30 rounded-full animate-bounce delay-700"></div>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                    >

                        {/* Section Header */}
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-4">
                                <Shield className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm text-yellow-400 font-medium">About INVHUB</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                <span className="text-gray-900">Protect Your Home</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                                    Without Compromising the View
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At <span className="font-semibold text-gray-900">INVHUB</span>, we stress safety while maintaining
                                beauty. We specialize in
                                <span className="text-yellow-600 font-medium">
                                    {" "}
                                    Invisible Grills, Mesh Door, and Sliding Security Doors
                                </span>
                                , which provide protection while maintaining your view.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                Inspired by global designs, our Invisible Safety Grills provide strength, visibility, and style. We have
                                protected over <span className="font-bold text-yellow-600">1000 houses and businesses</span>, making us
                                a trusted choice for architects, designers, and homeowners looking for long-lasting, visually appealing
                                safety solutions.
                            </p>
                        </div>




                    </div>
                </div>
                {/* Features */}
                <div className="grid gap-4 mb-8 py-5">
                    <h2 className="text-4xl md:text-5xl text-center font-bold mb-6 leading-tight">
                        <span className="text-gray-900">Why Choose </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                            InvHub
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-2 bg-white/50 rounded-xl border border-gray-200 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                <stat.icon className="w-5 h-5 text-black" />
                            </div>
                            <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                            <div className="text-xs text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
                {/* Bottom Image with Stats Overlay */}
                <div className="mt-6 relative">
                    <div className="relative overflow-hidden group">
                        {/* <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 leading-tight">
                            <span className="text-gray-900">Protect Your Home</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                                Across India
                            </span>
                        </h2> */}
                        <div className="px-4">
                            <img
                                src="/assets/images/invhub_website_map.png"
                                alt="INVHUB Installation Process"
                                className="max-w-[600px] mx-auto w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div> */}

                        {/* Stats Overlay */}
                        {/* <div className="absolute inset-0 flex items-center">
                                    <div className="grid grid-cols-3 gap-4 w-full px-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-yellow-400">1000+</div>
                                            <div className="text-xs text-white">Happy Clients</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-yellow-400">6+</div>
                                            <div className="text-xs text-white">Years Experience</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-yellow-400">24/7</div>
                                            <div className="text-xs text-white">Support</div>
                                        </div>
                                    </div>
                                </div> */}
                    </div>
                </div>
                {/* Bottom Section - Additional Info */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted Across India</h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
                            Whether you require sliding security doors in Hyderabad or any other city, we offer dependable solutions
                            throughout India with our premium safety products.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                                Invisible Grills
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                                Mesh Door
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                                Security Doors
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                                Hyderabad, India
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
