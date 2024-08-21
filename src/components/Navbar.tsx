import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full z-10 h-[50px] md:h-[70px] bg-[#EDEDED] text-[#133748] font-[Poppins] fixed shadow-lg shadow-black/10">
            <div className="w-full h-full flex justify-between px-6 md:px-10 items-center">
                <div id="left-box">
                    <h1 className=" text-2xl md:text-3xl font-extrabold cursor-pointer">
                        BSW
                    </h1>
                </div>
                <div className="hidden md:flex justify-center items-center gap-8">
                    <span className="nav-item-home cursor-pointer relative overflow-x-clip">
                        Explore
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="nav-item-home relative cursor-pointer overflow-x-clip">
                        Build
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="nav-item-home relative cursor-pointer overflow-x-clip">
                        Prepare
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="cursor-pointer border-solid border-[2px] border-[#133748] py-[6px] px-4 rounded-full hover:bg-[#133748] hover:text-white select-none">
                        Counselling
                    </span>
                </div>
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

            {/* Dropdown Menu */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden bg-[#EDEDED] text-center shadow-md shadow-black/10`}
            >
                <div className="flex flex-col items-center gap-4 pt-0 py-4">
                    <span className=" text-md nav-item-home cursor-pointer relative overflow-x-clip">
                        Explore
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className=" text-md nav-item-home relative cursor-pointer overflow-x-clip">
                        Build
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className=" text-md nav-item-home relative cursor-pointer overflow-x-clip">
                        Prepare
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
                    </span>
                    <span className=" text-md cursor-pointer border-solid border-[2px] border-[#133748] py-[6px] px-4 rounded-full hover:bg-[#133748] hover:text-white select-none">
                        Counselling
                    </span>
                </div>
            </div>
        </div>
    );
}
