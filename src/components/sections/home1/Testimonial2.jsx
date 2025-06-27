"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import { Star, Quote, ArrowLeft, ArrowRight, CheckCircle, Shield } from "lucide-react"
import { useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const testimonials = [
    {
        name: "Neha Verma",
        title: "Pune",
        company: "ArtSpace Digital",
        companyLogo: "/placeholder.svg?height=40&width=120",
        image: "/placeholder.svg?height=80&width=80",
        project: "Safety Management System",
        projectType: "Industrial Safety",
        rating: 5,
        review:
            "From the first consultation to the final installation, INVhub was incredibly professional and responsive. The team helped me choose the perfect solution for my balcony and handled everything seamlessly.",
        metrics: { incidents: "-85%", compliance: "100%", efficiency: "+60%" },
        tags: ["Safety", "Compliance", "Analytics"],
        verified: true,
        date: "2024",
    },
    {
        name: "Riya Sharma",
        title: "Safety Director",
        company: "Manufacturing Corp",
        companyLogo: "/placeholder.svg?height=40&width=120",
        image: "/placeholder.svg?height=80&width=80",
        project: "Risk Assessment Platform",
        projectType: "Safety Analytics",
        rating: 5,
        review:
            "I was genuinely impressed by the quality of the invisible grills. The stainless steel wires are sturdy, rust-proof, and still manage to look sleek. It’s rare to find products that combine safety and style so well. ",
        metrics: { "risk-reduction": "+75%", monitoring: "24/7", alerts: "Real-time" },
        tags: ["Risk Management", "Analytics", "Monitoring"],
        verified: true,
        date: "2024",
    },
    {
        name: "Marcus Johnson",
        title: "Operations Manager",
        company: "Industrial Solutions",
        companyLogo: "/placeholder.svg?height=40&width=120",
        image: "/placeholder.svg?height=80&width=80",
        project: "Safety Training Portal",
        projectType: "Training Platform",
        rating: 5,
        review:
            "They built us a comprehensive safety training portal that handles certification tracking beautifully. The user experience and compliance features are top-notch. Our team loves the intuitive interface.",
        metrics: { completion: "+90%", certification: "100%", engagement: "+80%" },
        tags: ["Training", "Certification", "E-Learning"],
        verified: true,
        date: "2024",
    },
    {
        name: "Sarah Chen",
        title: "HSE Manager",
        company: "Construction Ltd",
        companyLogo: "/placeholder.svg?height=40&width=120",
        image: "/placeholder.svg?height=80&width=80",
        project: "Incident Management System",
        projectType: "Safety Reporting",
        rating: 5,
        review:
            "Working with INVHUB was a game-changer for our incident management. They created an efficient reporting system that makes safety tracking comprehensive and accessible. Outstanding results!",
        metrics: { reporting: "+95%", resolution: "-50%", prevention: "+70%" },
        tags: ["Incident Management", "Reporting", "Prevention"],
        verified: true,
        date: "2024",
    },
]

export default function EnhancedTestimonial() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 py-24 px-4 overflow-hidden">
            {/* Background Effects */}
            {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div> */}

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">


                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-yellow-400 font-medium">Verified Safety Solutions</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient-x">
                            What Our Clients Say
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Trusted by industry leaders worldwide. See how we've helped businesses
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold">
                            {" "}
                            enhance their safety standards
                        </span>
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mt-8 text-sm">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">200+</div>
                            <div className="text-gray-500">Safety Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-400">99%</div>
                            <div className="text-gray-500">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-500">500+</div>
                            <div className="text-gray-500">Lives Protected</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        navigation={{
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet-custom",
                            bulletActiveClass: "swiper-pagination-bullet-active-custom",
                        }}
                        loop
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                centeredSlides: true,
                            },
                            1024: {
                                slidesPerView: 2,
                                centeredSlides: true,
                            },
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="group py-3">
                                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700 shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 hover:border-yellow-400/50 hover:-translate-y-2">
                                        {/* Company Logo & Verification */}
                                        <div className="flex items-center justify-between mb-6">
                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                                <span className="ml-2 text-gray-500 text-sm">({testimonial.rating}.0)</span>
                                            </div>
                                            {testimonial.verified && (
                                                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span>Verified</span>
                                                </div>
                                            )}
                                        </div>



                                        {/* Quote */}
                                        <div className="relative mb-8">
                                            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500/30" />
                                            <p className="text-lg md:text-xl leading-relaxed text-gray-100 pl-6 relative z-10">
                                                {testimonial.review}
                                            </p>
                                        </div>



                                        {/* Client Info & Project */}
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                            {/* Client */}
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <img
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt={testimonial.name}
                                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 group-hover:border-yellow-400 transition-colors duration-300"
                                                    />
                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white"></div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                                                    <div className="text-sm text-gray-300">{testimonial.title}</div>
                                                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                                                </div>
                                            </div>

                                            {/* Project Info */}
                                            <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 p-4 rounded-xl min-w-[200px]">
                                                <div className="text-center">
                                                    <div className="text-sm text-yellow-400 mb-1">{testimonial.projectType}</div>
                                                    <div className="font-semibold text-white">{testimonial.project}</div>
                                                    <div className="flex items-center justify-center gap-2 mt-2">
                                                        {testimonial.tags.map((tag, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs bg-gray-700 text-yellow-200 px-2 py-1 rounded border border-gray-600"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-yellow-500/25">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-yellow-500/25">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">Ready to enhance your safety standards?</p>
                    <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                        Get Safety Solutions
                    </button>
                </div>
            </div>

            <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 215, 0, 0.3);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          transform: scale(1.2);
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
        </section>
    )
}
