import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const apiUrl = import.meta.env.VITE_BASE_URL;

export default function Menu2({ isMobile }) {
  const [userServices, setUserServices] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/service/getservices?limit=6`);
        const data = await res.json();
        if (res.ok) {
          setUserServices(data.services);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/product/getproducts?limit=6`);
        const data = await res.json();
        if (res.ok) {
          setUserProducts(data.products);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchServices();
    fetchProducts();
  }, []);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <ul className="main-menu__list text-blue-900 mt-14">
      <li>
        <Link to="/" className=" text-blue-900">Home</Link>
      </li>
      <li>
        <Link to="/about" className=" text-blue-900">About Us</Link>
      </li>

      {/* Services Accordion Submenu */}
      <li className="dropdown">
        <div
          onClick={toggleServices}
          className="flex justify-between items-center cursor-pointer"
        >
          Services
          {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isMobile && isServicesOpen && (
          <div className="accordion-content bg-gray-800 p-1 mt-2">
            <ul>
              {/* {userServices?.map((service) => (
                <li key={service._id} className="pl-4 py-1">
                  <Link to={`/service/${service.slug}`} className="hover:text-orange-300" aria-label={`Learn more about the service: ${service.title}`}>
                    {service.title}
                  </Link>
                </li>
              ))} */}
              <li >
                <Link to={`/invisible-grill`}>Invisible Grill</Link>
              </li>
              <li >
                <Link to={`/mesh-door`}>Mesh Door</Link>
              </li>
            </ul>
          </div>
        )}
      </li>

      {/* Products Accordion Submenu */}
      {/* <li className="dropdown">
        <div
          onClick={toggleProducts}
          className="flex justify-between items-center cursor-pointer"
        >
          Products
          {isProductsOpen ? <FaChevronUp className="text-[#F2871C]" /> : <FaChevronDown className="text-[#F2871C]" />}
        </div>
        {isMobile && isProductsOpen && (
          <div className="accordion-content bg-gray-800 p-1 mt-2">
            <ul>
              {userProducts?.map((product) => (
                <li key={product._id} className="pl-4 py-1">
                  <Link to={`/product/${product.slug}`} className="hover:text-orange-300" aria-label={`Learn more about the service: ${product.title}`}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li> */}

      <li>
        <Link to="/blogs" className=" text-blue-900">Blog</Link>
      </li>
      <li>
        <Link to="/contact-us" className=" text-blue-900">Contact</Link>
      </li>
    </ul>
  );
}
