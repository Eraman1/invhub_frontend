import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Menu2 from "./Menu2";

const MobileMenu = ({ handleMobileMenu }) => {
  return (
    <div className="fixed md:hidden inset-0 z-20 bg-black bg-opacity-50" onClick={handleMobileMenu} >
      {/* Side slider container */}
      <div
        className="fixed top-0 left-0 w-[70%] h-full bg-gray-200 text-gray-900 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <FaTimes onClick={handleMobileMenu} className="text-2xl cursor-pointer" />
        </div>

        {/* Menu Links */}
        <Menu2 isMobile={true} />
<hr />
        {/* Contact Information */}
        <ul className="mt-4 text-sm text-gray-400">
          <li className="flex items-center mb-2">
            <i className="fa fa-envelope text-gray-500 mr-2"></i>
            <Link
              to="mailto:info@invhub.in"
              className="text-blue-900 hover:text-orange-300"
            >
              info@invhub.in
            </Link>
          </li>
          <li className="flex items-center">
            <i className="fa fa-phone-alt text-gray-500 mr-2"></i>
            <Link to="tel:+918008916868" className="text-blue-900 hover:text-orange-600">
              +91-8008916868
            </Link>
          </li>
          <li className="flex items-center  mt-2">
            <i className="fa fa-phone-alt text-gray-500 mr-2"></i>
            <Link to="tel:+919966761117" className="text-blue-900 hover:text-orange-600">
              +91-9966761117
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
