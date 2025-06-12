import { Link } from 'react-router-dom';
export default function ServiceHighlight() {
    return (
        <>
            {/*Services One Start */}
            <section className="services-one">
                <div className="container">
                    <div className="services-one__inner bg-gradient-to-r from-gray-800 to-gray-900">
                        <ul className="services-one__service-list list-unstyled">
                            <li className="wow fadeInLeft" data-wow-delay="100ms">
                                <div className="services-one__single">
                                    <div className="services-one__icon">
                                        <span className="icon-affordable-price"></span>
                                    </div>
                                    <h3 className="services-one__title"><Link to="pricing" className='text-white'>Affordable Price</Link></h3>
                                    <p className="text-gray-400">We offer competitive pricing for <br /> high-quality car batteries and services.</p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="200ms">
                                <div className="services-one__single">
                                    <div className="services-one__icon">
                                        <span className="icon-setting"></span>
                                    </div>
                                    <h3 className="services-one__title"><Link to="about" className='text-white'>100% Guarantee</Link></h3>
                                    <p className="text-gray-400">All our batteries come with a 100% guarantee <br /> for performance and reliability.</p>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="300ms">
                                <div className="services-one__single">
                                    <div className="services-one__icon">
                                        <span className="icon-services"></span>
                                    </div>
                                    <h3 className="services-one__title"><Link to="contact" className='text-white'>24/7 Our Service</Link></h3>
                                    <p className="text-gray-400">Available 24/7 for emergency battery replacement <br /> and roadside assistance.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Services One End */}

        </>
    )
}
