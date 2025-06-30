import { Link } from "react-router-dom";
import ctaImage from "/assets/images/for_cta.png";
export default function Cta() {
  return (
    <>
      {/*CTA One Start*/}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner wow fadeInUp" data-wow-delay="300ms">
            <div className="cta-one__img">
              <img src={ctaImage} alt="" />
            </div>
            <div className="section-title text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-yellow-400 font-medium">Contact Now</span>
              </div>
              <div className="section-title__title-box sec-title-animation animation-style2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient-x">
                    Get quick solution
                  </span>
                </h2>
              </div>
            </div>
            <p className="cta-one__text">
              Discover reliable grill services with Invhub. <br />
              We provide fast, affordable, and expert assistance to keep <br />{" "}
              you on the road.
            </p>
            <div className="cta-one__btn-and-call-box">
              <div className="cta-one__btn-box">
                <Link to={"/contact-us"} className="cta-one__btn thm-btn">
                  Enquire Now
                </Link>
              </div>
              <div className="cta-one__call-box">
                <div className="icon">
                  <a href="tel:+918008916868" className="flex justify-center items-center">
                    <span className="icon-call"></span>
                  </a>

                </div>
                <div className="content">
                  <p>Toll Free</p>
                  <h4>
                    <Link to="tel:+918008916868">+91-8008916868</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*CTA One End*/}
    </>
  );
}
