import { Link, useLocation } from 'react-router-dom';

export default function About() {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    return (
        <>
            {/*About One Start */}
            <section className="about-one about-four">
                <div className="about-one__shape-one float-bob-y">
                    <img src="assets/images/shapes/about-one-shape-1.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="about-one__img-box-1">
                                            <div className="about-one__img-1">
                                                <img src="assets/images/about-1.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="about-one__cirtified">
                                            <div className="icon">
                                                <span className="icon-certified"></span>
                                            </div>
                                            <h3>We are certified<br /> company since 2018</h3>
                                        </div>
                                        <div className="about-one__img-box-2">
                                            <div className="about-one__img-2">
                                                <img src="assets/images/about-2.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">About Us</span>
                                    </div>
                                    <div className="section-title__title-box sec-title-animation animation-style2">
                                        <h2 className="section-title__title title-animation">Protect Your Home
                                            Without Compromising the View</h2>
                                    </div>
                                </div>
                                <p className="about-one__text-1">At INVHUB Safety Solutions Pvt. Ltd., we stress safety while maintaining beauty. We specialize in Invisible Grills, Pleated Mosquito Nets, and Sliding Security Door, which provide protection while maintaining your view. Whether you require sliding security door in Hyderabad or another city, we offer dependable solutions throughout India.</p>
                                <p className="about-one__text-2">Inspired by global designs, our Invisible Safety Grills provide strength, visibility, and style. We have protected over 1000 houses and businesses, making us a trusted choice for architects, designers, and homeowners looking for long-lasting, visually appealing safety solutions.</p>


                                {!isAboutPage && (
                                    <div className="about-one__btn-box">
                                        <Link to={`/about`} className="about-one__btn thm-btn text-white">About Us More</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About One End */}

        </>
    );
}
