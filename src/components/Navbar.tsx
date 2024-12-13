import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState("");
  const NavItems = ["Explore", "Build", "Resources"];
  const DropDownItems = [
    "SDE",
    "Quant",
    "Core",
    "Finance",
    "AI-ML",
    "Consulting",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openDropdown = (activeDropDown: string) => {
    setActiveDropDown(activeDropDown.toLowerCase());
  };

  const closeDropdown = () => {
    setActiveDropDown("");
  };

  return (
    <div
      onMouseLeave={closeDropdown}
      className="w-full z-10 h-[50px] md:h-[70px] bg-[#EDEDED] text-[var(--theme-color)] font-[Poppins] fixed shadow-lg shadow-black/10"
    >
      <div className="w-full h-full flex justify-between px-6 md:px-10 items-center">
        <div id="left-box">
          <h1 className="text-sm sm:text-2xl md:text-3xl font-extrabold cursor-pointer">
            <Link to="/">BSW Career Mentorship</Link>
          </h1>
        </div>
        <div className="hidden md:flex justify-center items-center gap-8 relative">
          {/* Explore Button with Dropdown */}
          {NavItems.map((item, index) => (
            <>
              <span
                key={index}
                className="nav-item-home cursor-pointer relative overflow-x-clip"
                onMouseEnter={() => {
                  openDropdown(item.toLowerCase());
                }}
              >
                <span>{item}</span>
                <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px] bottom-[-3px] bg-black"></span>
              </span>
              {activeDropDown === item.toLowerCase() && (
                <DropDownMenu
                  NavItems={NavItems}
                  DropDownItems={DropDownItems}
                  closeDropdown={closeDropdown}
                  activeSection={item.toLowerCase()}
                  isDesktop={true}
                />
              )}
            </>
          ))}
          <span className="cursor-pointer border-solid border-[2px] border-[var(--theme-color)] py-[6px] px-4 rounded-full hover:bg-[var(--theme-color)] hover:text-white select-none">
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
          {NavItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                activeDropDown === item.toLowerCase()
                  ? closeDropdown
                  : openDropdown(item.toLowerCase());
              }}
              className="text-md nav-item-home cursor-pointer flex-grow text-center relative "
            >
              {item}
              {activeDropDown === item.toLowerCase() && (
                <DropDownMenu
                  DropDownItems={DropDownItems}
                  closeDropdown={closeDropdown}
                  activeSection={item.toLowerCase()}
                />
              )}
            </span>
          ))}
          <a
            className="text-md cursor-pointer flex-grow text-center border-solid border-[2px] border-[var(--theme-color)] py-[6px] px-4 rounded-full hover:bg-[var(--theme-color)] hover:text-white select-none"
            href="https://bsw.iitd.ac.in/counselling.php"
          >
            Counselling
          </a>
        </div>
      </div>
    </div>
  );
}

function DropDownMenu({
  DropDownItems,
  closeDropdown,
  activeSection,
  NavItems = [],
  isDesktop = false,
}: {
  DropDownItems: string[];
  closeDropdown: () => void;
  activeSection: string;
  NavItems?: string[];
  isDesktop?: boolean;
}): JSX.Element {
  return (
    <div
      style={{
        left:
          !isDesktop && activeSection.toLowerCase() === "explore"
            ? "-10px"
            : NavItems.findIndex(
                (item) => item.toLowerCase() === activeSection.toLowerCase()
              ) *
                80 +
              "px",
      }}
      className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-[200px] overflow-hidden"
      onMouseLeave={closeDropdown}
    >
      <ul className="flex flex-col text-left ">
        {DropDownItems.map((item, index) => (
          <Link
            to={`/${activeSection}/${item.toLowerCase()}`}
            key={index}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {item}
          </Link>
        ))}
      </ul>
    </div>
  );
}
