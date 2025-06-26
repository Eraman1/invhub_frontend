import { useState, useEffect } from "react";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { Alert, Button } from "flowbite-react";
import { ContactFormContactPage } from "../components/elements/ContactFormContactPage";
import { Helmet } from "react-helmet-async";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Funfacts from "../components/sections/home1/Funfacts";
const apiUrl = import.meta.env.VITE_BASE_URL;

export default function Contact() {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const sourcePage = location.pathname;
  const { serviceSlug } = useParams();
  const [metaTags, setMetaTags] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/metatags/contact`);
        const data = await res.json();
        if (res.ok) {
          setMetaTags(data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMetadata();
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/api/inquiry/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, sourcePage: currentPath }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      setPublishError("Thank you so much for contacting us");
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  useEffect(() => {
    if (metaTags?.other) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = metaTags.other;

      const scriptTags = tempDiv.querySelectorAll("script");

      scriptTags.forEach((scriptTag) => {
        const scriptElement = document.createElement("script");
        scriptElement.textContent = scriptTag.innerHTML;
        document.body.appendChild(scriptElement);
        return () => {
          document.body.removeChild(scriptElement);
        };
      });
    }
    if (metaTags?.other) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = metaTags.other;

      const linkTags = tempDiv.querySelectorAll("link");
      linkTags.forEach((linkTag) => {
        const linkElement = document.createElement("link");
        linkElement.rel = linkTag.rel || "";
        linkElement.href = linkTag.href || "";
        linkElement.type = linkTag.type || "";
        linkElement.media = linkTag.media || "";
        document.head.appendChild(linkElement);
      });
    }
  }, [metaTags]);

  const title = "Contact";
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Contact" }];

  return (
    <div>
      <Helmet>
        <title>{metaTags?.title || ""}</title>
        <meta name="description" content={metaTags?.description || ""} />
        <meta name="keywords" content={metaTags?.keywords || ""} />
      </Helmet>
      {/* <Breadcrumb title={title} breadcrumbs={breadcrumbs} /> */}
      <section className="py-20 bg-gradient-to-br from-white via-[#f8f9fa] to-[#f1f3f5] text-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#D4AF37] mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Connect with us for support, inquiries, or collaboration opportunities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Phone Box */}
            <div className="bg-white/70 backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#D4AF37]/10 text-[#D4AF37] p-4 rounded-full text-2xl">
                  <FaPhoneAlt />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Talk to our experts directly.</p>
              <div className="space-y-1 text-base font-medium">
                <a href="tel:+918008916868" className="block hover:text-[#D4AF37] transition">+91-8008916868</a>
                <a href="tel:+919966761117" className="block hover:text-[#D4AF37] transition">+91-9966761117</a>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-white/70 backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#D4AF37]/10 text-[#D4AF37] p-4 rounded-full text-2xl">
                  <FaEnvelope />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-2">We respond within 24 hours.</p>
              <a
                href="mailto:info@invhub.in"
                className="text-base font-medium hover:text-[#D4AF37] transition"
              >
                info@invhub.in
              </a>
            </div>

            {/* Address Box */}
            <div className="bg-white/70 backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#D4AF37]/10 text-[#D4AF37] p-4 rounded-full text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Visit Us</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-medium">Corporate Office:</p>
              <p className="text-base mb-4">
                H.No: 2-2/115/1/A/1, Plot No: 54/P, Suryodaya Colony, Bandlaguda Jagir, Hyderabad, 500086
              </p>
              <p className="text-gray-600 text-sm mb-2 font-medium">Experience Center:</p>
              <p className="text-base">
                Plot No: 191, Road No 4, Venkateshwara Colony, Hastinapuram, Hyderabad 500079
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-three">
        <div className="container">
          <div className="contact-three__inner bg-gradient-to-r from-gray-800 to-gray-900 ">
            <div className="row">
              <div className="col-xl-6">
                <div className="contact-three__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7616.418843525029!2d78.38436899999999!3d17.35365300000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x211a753937cfdae1%3A0xe4a12edf7602017d!2sInvhub%20Safety%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1750163681043!5m2!1sen!2sin"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-three__right">
                  <h3 className="contact-three__form-title">
                    Get A Free Quote
                  </h3>
                  <ContactFormContactPage sourcePage={sourcePage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Funfacts />
      <br />
      <br />
    </div>
  );
}
