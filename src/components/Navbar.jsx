import { useState } from "react";
import { NavLink }  from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full px-6 py-2 bg-gray-100 flex justify-between items-center">
      <div></div>
      <ul className="hidden md:flex justify-center space-x-10  mx-auto font-medium text-gray-950 ">
        <li><NavLink to="/" className={({ isActive}) => isActive ? "text-green-700 underline underline-offset-4 decoration-2 decoration-green-700 hover:text-green-700 transition" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive}) => isActive ? "text-green-700 underline underline-offset-4 decoration-2 decoration-green-700 hover:text-green-700 transition" : ""}>About</NavLink></li>
        <li><NavLink to="/terms" className={({ isActive}) => isActive ? "text-green-700 underline underline-offset-4 decoration-2 decoration-green-700 hover:text-green-700 transition" : ""}>Terms Of Reference</NavLink></li>
        <li><NavLink to="/guide" className={({ isActive}) => isActive ? "text-green-700 underline underline-offset-4 decoration-2 decoration-green-700 hover:text-green-700 transition" : ""}>Guiding Priciples</NavLink></li>
        <li><NavLink to="/commitee" className={({ isActive}) => isActive ? "text-green-700 underline underline-offset-4 decoration-2 decoration-green-700 hover:text-green-700 transition" : ""}>Subcommittees</NavLink></li>
        <li><NavLink to="contact" className={({ isActive}) => isActive ? "text-green-700 underline underline-offset-4 decoration-2 decoration-green-700 hover:text-green-700 transition" : ""}>Contact</NavLink></li>
      </ul>
       
      <div onClick={toggleMenu} className="flex flex-col justify-between my-1 w-6 h-5 cursor-pointer md:hidden">
          <span className={`h-0.5 w-full bg-green-950 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-full bg-green-950 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-full bg-green-950 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </div> 
      

      <ul className={`absolute left-0 top-16 w-full bg-white flex flex-col items-center gap-6 py-8 transition-all duration-300 md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
        <li><NavLink to="/" onClick={() => setIsOpen(false)} className="text-lg text-green-500 font-medium">Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsOpen(false)} className="text-lg text-green-500 font-medium">About</NavLink></li>
        <li><NavLink to="/terms" onClick={() => setIsOpen(false)} className="text-lg text-green-500 font-medium">Terms Of Reference</NavLink></li>
        <li><NavLink to="/guide" onClick={() => setIsOpen(false)} className="text-lg text-green-500 font-medium">Guiding Principles</NavLink></li>
        <li><NavLink to="/commitee" onClick={() => setIsOpen(false)} className="text-lg text-green-500 font-medium">Subcommittees</NavLink></li>
        <li><NavLink to="contact" onClick={() => setIsOpen(false)} className="text-lg text-green-500 font-medium">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;