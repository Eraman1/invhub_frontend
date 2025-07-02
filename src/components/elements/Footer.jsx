import { Link } from "react-router-dom";
import Cta from "../sections/home1/Cta";
import { useEffect, useState } from "react";
import FixedRightSidebar from "./FloatingIcons";
import footerLogo from "/assets/images/logo.png";
import QrCode from "/assets/images/GmapCode.jpeg";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Footer() {
  const [userServices, setUserServices] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  // const router = useRouter()
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/service/getservices?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setUserServices(data.services);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/product/getproducts?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setUserProducts(data.products);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Cta />

      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-x">
          <img src="assets/images/shapes/services-two-shape-1.png" alt="" />
        </div>
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="site-footer__top">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Column 1: Logo and About */}
                <div>
                  <div className="mb-4">
                    <Link to="/">
                      <img className="w-50" src={footerLogo} alt="logo" />
                    </Link>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    At INVhub Safety Solution Pvt Ltd, we stress safety while maintaining beauty.
                    We specialize in Invisible Grills, Pleated Mosquito Nets, and Sliding Security Door—
                    providing protection while preserving your view.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <Link to="https://www.facebook.com" aria-label="Facebook">
                      <i className="icon-facebook text-xl hover:text-blue-500 transition"></i>
                    </Link>
                    <Link to="https://www.instagram.com/" aria-label="Instagram">
                      <i className="icon-instagram text-xl hover:text-pink-500 transition"></i>
                    </Link>
                  </div>
                </div>

                {/* Column 2: Our Company Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-2">Our Company</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link className="hover:text-gray-200" to="/">Home</Link></li>
                    <li><Link className="hover:text-gray-200" to="/about">About Us</Link></li>
                    <li><Link className="hover:text-gray-200" to="/services">Services</Link></li>
                    <li><Link className="hover:text-gray-200" to="/products">Products</Link></li>
                    <li><Link className="hover:text-gray-200" to="/blogs">Blog</Link></li>
                    <li><Link className="hover:text-gray-200" to="/contact-us">Contact</Link></li>
                  </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                  <h3 className="text-lg text-gray-200 font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
                  <ul className="space-y-2 text-sm">
                    {userServices?.map((service, index) => (
                      <li key={index}>
                        <Link className="hover:text-gray-200" to={`/service/${service.slug}`}>{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200 border-b border-gray-700 pb-2">Contact Us</h3>
                  <div className="text-sm space-y-4">
                    {/* Office Address */}
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p>H.No:-2-2/115/1/A/1, Plot.No:-54/p, Suryodaya Colony, Bandlaguda Jagir, Hyderabad, 500086</p>
                      <p className="mt-1">
                        <a href="tel:+918008916868" className="block hover:text-gray-200">Phone: +91-8008916868</a>
                        <a href="mailto:info@invhub.in" className="hover:text-gray-200">Email: info@invhub.in</a>
                      </p>
                    </div>

                    {/* Experience Center */}
                    <div className="pt-4 border-t border-gray-700">
                      <p className="font-semibold">Experience Center</p>
                      <p>P.No:191, Road No 4, Venkateshwara Colony, Hastinapuram, Hyderabad 500079</p>
                      <p className="mt-1">
                        <a href="tel:+919966761117" className="block hover:text-gray-200">Phone: +91-9966761117</a>
                        <a href="mailto:info@invhub.in" className="hover:text-gray-200">Email: info@invhub.in</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner mb-4 mb-md-0">
              <p className="site-footer__bottom-text mb-5 mb-md-0">
                Copyright © 2025 by Invhub Safety Solution Pvt Ltd. All rights reserved.
                Developed by{" "}
                <span>
                  {" "}
                  <Link target="_blank" to="https://www.webmatictechnology.com/">
                    Webmatic Technology Pvt. Ltd.
                  </Link>
                </span>
              </p>
              <ul className="list-unstyled site-footer__bottom-menu">
                {/* <li><Link to="contact">Support</Link></li>
                            <li><Link to="about">Terms and Condition</Link></li>
                            <li><Link to="about">Privacy and Policy</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
        <FixedRightSidebar />
      </footer>
    </>
  );
}
