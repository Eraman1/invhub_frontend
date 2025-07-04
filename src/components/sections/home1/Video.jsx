'use client'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ContactModal } from '../../elements/ContactModal';

export default function Video() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/*Video One Start*/}
            <section className="video-one">
                <div className="video-one__sahpe-1">
                    <img src="assets/images/shapes/video-one-shape-1.png" alt="" />
                </div>
                <div className="video-one__bg wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"
                    style={{ backgroundImage: 'url(assets/images/meshDoor.jpg)' }} >

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6"></div>
                        <div className="col-xl-6">
                            <div className="video-one__right wow fadeInRight" data-wow-delay="300ms">
                                <div className="section-title text-left">
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">

                                        <span className="text-sm text-yellow-400 font-medium">Contact with us</span>
                                    </div>
                                    <h6 className="text-2xl md:text-5xl font-bold mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 animate-gradient-x">
                                            Choose Our 24/7 reliable services
                                        </span>
                                    </h6>
                                </div>
                                <p className="video-one__text-1">At 800 B Battery, we specialize in reliable car battery services, from emergency roadside assistance to onsite battery replacement. We are committed to providing fast, professional, and hassle-free solutions to keep your vehicle running smoothly.</p>
                                <p className="video-one__text-2">Our team understands that your time and safety are important, which is why we focus on delivering prompt service with expert advice. Whether you need a new battery or quick support in a roadside emergency, we’re here to help you get back on the road with ease.</p>
                                <div className="about-two__points-box">
                                    <ul className="about-two__points-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-like"></span>
                                            </div>
                                            <h3 className="about-two__title"><Link to="products">Genuine Car Batteries</Link></h3>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-services"></span>
                                            </div>
                                            <h3 className="about-two__title"><Link to="/contact-us">Emergency Roadside Assistance</Link></h3>
                                        </li>
                                    </ul>
                                    {/* <ul className="about-two__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-like"></span>
                                        </div>
                                        <h3 className="about-two__title"><Link to="javascript:void(0);">Onsite Battery Replacement</Link></h3>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-services"></span>
                                        </div>
                                        <h3 className="about-two__title"><Link to="contact">Extended Battery Life</Link></h3>
                                    </li>
                                </ul> */}
                                </div>
                                <div className="video-one__btn-box">
                                    <Link to={"tel:+971509344668"} className="video-one__btn thm-btn">Call Now</Link>
                                    <Link to="/contact-us" className="video-one__btn-two thm-btn" onClick={() => setModalOpen(true)}>Free estimate</Link>
                                    <ContactModal
                                        isOpen={isModalOpen}
                                        onClose={() => setModalOpen(false)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
