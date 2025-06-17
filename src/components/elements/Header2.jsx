import { Link } from "react-router-dom";
import Menu from "../Menu";
import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";
import { Button } from "flowbite-react";
import headerLogo from "/assets/images/logo.png";
import MobileMenu from "../MobileMenu";

export default function Header2({ scroll, handlePopup }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Conditionally add the "mobile-menu-visible" class to the header */}
      <header
        className={`main-header-two ${isSticky ? "sticky" : "sticky"} ${isMobileMenuOpen ? "mobile-menu-visible" : ""
          }`}
      >
        {/*  main-menu-two__top for backgroud */}
        {/* main-menu-two__top for background */}
        <div
          className={`hidden lg:block transition-all duration-500 ease-in-out transform ${isSticky ? "opacity-0 scale-y-0 h-0 overflow-hidden" : "opacity-100 scale-y-100"} origin-top`}
        >

          <div className="container">
            <div className="main-menu-two__top-inner">
              <div className="main-menu-two__top-left">
                <div className="main-menu-two__social">
                  <Link to="https://www.facebook.com/" aria-label="facebook-icon">
                    <i className="icon-facebook" style={{ color: "#1877F2" }}></i>

                  </Link>
                  <Link to="https://www.instagram.com/" aria-label="instagram-icon">
                    <i className="icon-instagram" style={{ color: "#E1306C" }}></i>

                  </Link>
                </div>
                <p className="main-menu-two__text">Welcome to Invhub</p>
              </div>
              <ul className="list-unstyled main-menu-two__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-location" style={{ color: "#FF0000" }}></i>
                  </div>
                  <div className="text">
                    <p>H.No:-2-2/115/1/A/1 Plot.No:-54/p Suryodaya colony Bandlaguda Jagir Hyderabad, 500086</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-envelope" style={{ color: "#0A66C2" }}></i>


                  </div>
                  <div className="text">
                    <p>
                      <Link to="mailto:info.invhub.in">
                        info@invhub.in
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-two  bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="main-menu-two__wrapper ">
            <div className="container">
              <div className="main-menu-two__wrapper-inner ">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link to="/">
                      <img
                        className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto transition-all duration-300"
                        src={headerLogo}
                        alt="Logo"
                      />
                    </Link>
                  </div>

                  <Button
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black  rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 d-md-none   px-1 text-sm "
                    onClick={() => setModalOpen(true)}
                  >
                    Claim Warranty
                  </Button>
                  <div className="d-md-none">
                    {/* Mobile menu toggle button */}
                    <button onClick={handleMobileMenu} aria-label="Toggle mobile menu">
                      <i
                        className={`fa text-2xl ${isMobileMenuOpen ? "fa-times" : "fa-bars"
                          }`}
                      ></i>
                    </button>
                  </div>
                  <div className="d-none d-md-block">
                    <Menu />
                  </div>
                </div>
                <div className="main-menu-two__right">
                  <div className="main-menu-two__call-and-btn-box">
                    <div className="main-menu-two__call">
                      <div className="main-menu-two__call-icon">
                        <a href="tel:+8002272633" className="flex justify-center items-center"><span className="icon-phone-call"></span></a>

                      </div>
                      <div className="main-menu-two__call-number">
                        <p>Toll Free</p>
                        <h5>
                          <Link to="tel:+918008916868">+91-8008916868</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="main-menu-two__btn-box">
                      {/* <Button

                        className="main-menu-two__btn thm-btn h-12 px-2"
                        onClick={() => setModalOpen(true)}
                      >
                        Claim Warranty
                      </Button> */}
                      <button onClick={() => setModalOpen(true)} className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                        Claim Warranty
                      </button>
                      <ContactModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Conditionally render MobileMenu when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isSidebar={isMobileMenuOpen}
        />
      )}
    </>
  );
}
