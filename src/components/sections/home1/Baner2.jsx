"use client"

import { Helmet } from "react-helmet-async"
import { ContactFormModal } from "../../elements/ContactFormModal"
import { useEffect, useState } from "react"

export default function Banner() {
  const [bannerImage, setBannerImage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const apiUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        // Fetch the banner image from the server or a static URL
        const response = await fetch(`${apiUrl}/api/slider/getSliders`, {
          method: "GET",
        })
        if (response.ok) {
          const data = await response.json()
          setBannerImage(data)
        } else {
          console.error("Failed to fetch banner image")
        }
      } catch (error) {
        console.error("Error fetching banner image:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBannerImage()
  }, [])

  console.log("Banner data:", bannerImage)

  // Auto-play functionality
  useEffect(() => {
    // Check if bannerImage is an array (direct API response) or has a sliders property
    const sliders = Array.isArray(bannerImage) ? bannerImage : bannerImage?.sliders || []
    if (!isAutoPlaying || !sliders.length) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliders.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, bannerImage])

  const nextSlide = () => {
    // Check if bannerImage is an array (direct API response) or has a sliders property
    const sliders = Array.isArray(bannerImage) ? bannerImage : bannerImage?.sliders || []
    if (!sliders.length) return
    setCurrentSlide((prev) => (prev === sliders.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    // Check if bannerImage is an array (direct API response) or has a sliders property
    const sliders = Array.isArray(bannerImage) ? bannerImage : bannerImage?.sliders || []
    if (!sliders.length) return
    setCurrentSlide((prev) => (prev === 0 ? sliders.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Fallback images (your existing ones)
  const mobileBannerImage =
    "https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/f3e5ee1f-6c25-46ce-d465-d35e06da4d00/public"
  const desktopBannerImage = "assets/images/newBanner.jpg"

  // Get the sliders array, handling both direct array response and object with sliders property
  const sliders = Array.isArray(bannerImage) ? bannerImage : bannerImage?.sliders || []

  // Show loading state
  if (loading) {
    return (
      <>
        <Helmet>
          <link rel="preload" href={mobileBannerImage} as="image" />
          <link rel="preload" href={desktopBannerImage} as="image" />
        </Helmet>

        {/* Mobile Banner Loading */}
        <section className="md:hidden relative flex flex-col">
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-gray-200 animate-pulse w-full h-full"></div>
          </div>
        </section>

        {/* Desktop Banner Loading */}
        <section className="hidden md:block">
          <div className="bg-gray-200 animate-pulse" style={{ height: "500px" }}></div>
        </section>
      </>
    )
  }

  // If no sliders are available, show fallback images
  if (!sliders.length) {
    return (
      <>
        <Helmet>
          <link rel="preload" href={mobileBannerImage} as="image" />
          <link rel="preload" href={desktopBannerImage} as="image" />
        </Helmet>

        {/* Mobile Banner */}
        <section className="md:hidden relative flex flex-col">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={mobileBannerImage || "/placeholder.svg"}
              alt="Mobile Banner"
              className="object-cover"
              width="100%"
              height="210"
              loading="lazy"
            />
          </div>
        </section>

        {/* Desktop Banner */}
        <section className="hidden md:block">
          <div
            className="flex justify-between items-center"
            style={{
              backgroundImage: `url(${desktopBannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          ></div>
        </section>
      </>
    )
  }

  // Show dynamic sliders
  return (
    <>
      <Helmet>
        {/* Preload the first slider image for better performance */}
        {sliders[0]?.image && <link rel="preload" href={sliders[0].image} as="image" />}
      </Helmet>

      {/* Mobile Banner */}
      <section className="md:hidden relative flex flex-col">
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliders.map((slider, index) => (
              <div key={slider._id} className="min-w-full h-full relative">
                <img
                  src={slider.image || "/placeholder.svg"}
                  alt={slider.title}
                  className="object-cover w-full h-full"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="text-xl font-bold mb-2">{slider.title}</h2>
                    <p className="text-sm mb-3">{slider.subtitle}</p>
                    {slider.button_link && slider.button_link !== "no link" && (
                      <a
                        href={slider.button_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots for mobile */}
          {sliders.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sliders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Desktop Banner */}
      <section className="hidden md:block mt-5">
        <div
          className="relative overflow-hidden"
          style={{ height: "500px", marginTop: "140px" }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliders.map((slider, index) => (
              <div
                key={slider._id}
                className="min-w-full h-full relative"
              >
                <img
                  src={slider.image || "/placeholder.svg"} />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="container flex justify-between items-center banner_section">
                    <div className="main-slider-three__content banner_content max-w-2xl text-white">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">{slider.title}</h1>
                      <p className="text-xl mb-6">{slider.subtitle}</p>
                      {slider.button_link && slider.button_link !== "no link" && (
                        <a
                          href={slider.button_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                    {/* <div className="main-slider-three__content banner_form">
                      <ContactFormModal sourcePage="desktop" />
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          {sliders.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Navigation dots */}
          {sliders.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {sliders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Slide counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {sliders.length}
          </div>
        </div>
      </section>
    </>
  )
}
