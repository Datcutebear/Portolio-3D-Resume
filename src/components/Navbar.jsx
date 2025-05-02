import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
    return(
        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
            {navLinks.map((link) => (
                <li key={link.id} className="text-neutral-400 hover:text-white font-sans max-sm:hover:bg-black max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 font-bold">
                    <a href={link.href} className="text-lg md:text-base hover:text-white transition-colors" onClick={() => {}}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => (!prevIsOpen));
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 ">
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        DatDuong
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close-x-svgrepo-com (1).svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`absolute left-0 right-0 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? "max-h-screen" : "max-h-0"}`} style={{ backgroundColor: "#0d0d0f" }}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;