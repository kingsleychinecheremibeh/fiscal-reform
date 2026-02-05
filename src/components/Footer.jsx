import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import image from "../assets/image.png"

const Footer = () => {
  return (
    <footer className="bg-green-900 border-t border-gray-800 mt-10">
      <div className="px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mx-auto">
            <img src={image} alt="Logo" height={100} width={100} loading="lazy" decoding="async" className="mx-auto" />
            <div>
              <p className="text-white mt-2 mx-auto">Presidential Committee on Fiscal Policy & Tax Reforms</p>
              <div className="flex gap-4 mt-2 text-white justify-center">
                <a href="https://www.facebook.com/fiscalreformnigeria" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} className="hover:text-gray-300 transition"/></a>
                <a href="https://twitter.com/fiscalreformng" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} className="hover:text-gray-300 transition"/></a>
                <a href="https://www.instagram.com/fiscalreformnigeria/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} className="hover:text-gray-300 transition"/></a>
                <a href="https://www.linkedin.com/company/fiscal-reform-nigeria/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} className="hover:text-gray-300 transition"/></a>
                <a href="https://www.youtube.com/@FiscalReformNigeria" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} className="hover:text-gray-300 transition"/></a>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-12 text-sm">
            <div className="space-y-2 text-white mx-4 px-3">
              <h4 className="text-white font-semibold">Site Links</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-300 hover:underline transition">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:underline transition">About</a></li>
                <li><a href="/terms" className="text-gray-300 hover:underline transition">Terms Of Reference</a></li>
                <li><a href="/guide" className="text-gray-300 hover:underline transition">Guiding Principles</a></li>
                <li><a href="/commitee" className="text-gray-300 hover:underline transition">Subcommittees</a></li>
                <li><a href="/contact" className="text-gray-300 hover:underline transition">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-2 text-white px-4">
              <h4 className="text-white font-semibold">Get In Touch</h4>
              <p>Abuja:</p>
              <p>The Presidency, Aso Rock Villa, Asokoro, FCT Abuja,Revenue House, 15 Sokode Crescent, Wuse Zone 5, FCT Abuja</p>
              <p>Lagos:</p>
              <p>Floor 7 Mulliner Towers, 39 Alfred Rewane Road, Ikoyi , Lagos</p>
              <a href="mailto:info@fiscalreform.org" className="inline-flex items-center gap-2  py-4  text-white"><FiMail size={20}/> info@fiscalreform.org</a>
              <a href="https://wa.me/2348109753151?text=Hi%20,%20I%20would%20like%20to%20discuss%20a%20more." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 pl-4 py-4  text-white  "><FaWhatsapp size={20}/> WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white pt-4 pb-4 text-center text-xs text-white">
          © {new Date().getFullYear()} Fiscal Reforms. All rights reserved.
        </div>
    </footer>
  )
};
export default Footer;