import React from "react";

const Process = () => {
  return (
    <>
      {/* Process One Start */}
      <section className="process-one">
        <div
          className="process-one__bg jarallax"
          style={{
            backgroundImage: "url(assets/images/shapes/800-battery-03.png)",
            backgroundPosition: "center",
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container">
          <div className="section-title-three text-center sec-title-animation animation-style1">
            <div className="section-title-three__tagline-box justify-content-center">
              <div className="section-title-three__tagline-shape"></div>
              <span className="section-title-three__tagline">
                Why Choose Us?
              </span>
              <div className="section-title-three__tagline-shape"></div>
            </div>
            <h2 className="section-title-three__title title-animation">
              Providing durable and aesthetically designed safety solutions to ensure maximum protection for your family, pets, and property.
            </h2>
          </div>
          <div className="row">
            {/* Process One Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-ac1"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">Clear Views, Maximum Safety</h3>
                <small className="text-gray-400">Our Invisible Grills for Balconies offer unobstructed views of your surroundings while ensuring complete safety for children, pets, and family members.</small>
              </div>
            </div>
            {/* Process One Single End */}

            {/* Process One Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-send"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">
                  Quick & Professional Installation
                </h3>
                <small className="text-gray-400">We use high-quality stainless steel cables, weather-resistant mesh, and durable Balcony Safety Nets to protect against falls, pests, and unwanted birds.</small>
              </div>
            </div>
            {/* Process One Single End */}

            {/* Process One Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-setting"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">Quick & Professional Installation</h3>
                <small className="text-gray-400">Our expert team ensures a clean and hassle-free installation without damaging your walls, windows, or balconies.</small>
              </div>
            </div>
            {/* Process One Single End */}

            {/* Process One Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-services"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">
                  Trusted by 1000+ Customers
                </h3>
                <small className="text-gray-400">We have successfully secured over 1000+ homes, apartments, and commercial spaces across India, gaining the trust of homeowners, builders, and architects.</small>
              </div>
            </div>
            {/* Process One Single End */}
            {/* Process One Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-services"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">
                  Affordable, Long- Lasting Solutions
                </h3>
                <small className="text-gray-400">Our products are designed to offer premium protection at affordable prices, ensuring you get maximum value for your investment.</small>
              </div>
            </div>
            {/* Process One Single End */}
            {/* Process One Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-services"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">
                  Customized fit for every space
                </h3>
                <small className="text-gray-400">We customize our safety solutions to match your home, balcony, or windows, ensuring they look good and keep you safe.</small>
              </div>
            </div>
            {/* Process One Single End */}
          </div>
        </div>
      </section>
      {/* Process One End */}
    </>
  );
};

export default Process;
