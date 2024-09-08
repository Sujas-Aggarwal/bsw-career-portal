import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="w-full z-10 h-[50px] md:h-[70px] bg-[#EDEDED] text-[#133748] font-[Poppins] fixed shadow-lg shadow-black/10">
            <div className="w-full h-full flex justify-between px-6 md:px-10 items-center">
                <div id="left-box">
                    <h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer">
                        <Link to="/">BSW Career Mentorship</Link>
                    </h1>
                </div>
                <div className="hidden md:flex justify-center items-center gap-8 relative">
                    {/* Explore Button with Dropdown */}
                    <span
                        className="nav-item-home cursor-pointer relative overflow-x-clip"
                        onMouseEnter={openDropdown}
                        // onMouseLeave={closeDropdown}
                    >
                        <span>Explore</span>
                        {/* Static Dropdown Menu */}
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    {isDropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-[200px]" onMouseLeave={closeDropdown}>
                                <ul className="flex flex-col text-left">
                                    <li><Link to="/explore/sde" className="block px-4 py-2 hover:bg-gray-100">SDE</Link></li>
                                    <li><Link to="/explore/quant" className="block px-4 py-2 hover:bg-gray-100">Quant</Link></li>
                                    <li><Link to="/explore/core" className="block px-4 py-2 hover:bg-gray-100">Core</Link></li>
                                    <li><Link to="/explore/finance" className="block px-4 py-2 hover:bg-gray-100">Finance</Link></li>
                                    <li><Link to="/explore/ai-ml" className="block px-4 py-2 hover:bg-gray-100">AI-ML</Link></li>
                                    <li><Link to="/explore/consult" className="block px-4 py-2 hover:bg-gray-100">Consulting</Link></li>
                                </ul>
                            </div>
                        )}
                    {/* Other Navbar Items */}
                    <span className="nav-item-home relative cursor-pointer overflow-x-clip">
                        Build
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="nav-item-home relative cursor-pointer overflow-x-clip">
                        Prepare
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="cursor-pointer border-solid border-[2px] border-[#133748] py-[6px] px-4 rounded-full hover:bg-[#133748] hover:text-white select-none">
                        <a href="https://bsw.iitd.ac.in/counselling.php">Counselling</a>
                    </span>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden bg-[#EDEDED] text-center shadow-md shadow-black/10`}
            >
                <div className="flex flex-row items-center justify-between px-2 py-4">
                    <span className="text-md nav-item-home cursor-pointer flex-grow text-center relative overflow-x-clip">
                        Explore
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="text-md nav-item-home cursor-pointer flex-grow text-center relative overflow-x-clip">
                        Build
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="text-md nav-item-home cursor-pointer flex-grow text-center relative overflow-x-clip">
                        Prepare
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="text-md cursor-pointer flex-grow text-center border-solid border-[2px] border-[#133748] py-[6px] px-4 rounded-full hover:bg-[#133748] hover:text-white select-none">
                        Counselling
                    </span>
                </div>
            </div>
        </div>
    );
}
