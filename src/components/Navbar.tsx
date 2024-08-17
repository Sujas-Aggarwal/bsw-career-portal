export default function Navbar() {
    return (
        <div className="w-full z-10 h-[70px] bg-[#EDEDED] text-[#133748] font-[Poppins] fixed shadow-lg shadow-black/10">
            <div className="w-full h-full flex justify-between px-10 items-center">
                <div id="left-box">
                    <h1 className="text-2xl font-extrabold cursor-pointer">
                        BSW
                    </h1>
                </div>
                <div
                    id="right-box"
                    className="flex justify-center items-center gap-8"
                >
                    <span className="nav-item-home cursor-pointer relative overflow-x-clip">
                        Explore
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[1px]  bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="nav-item-home relative cursor-pointer overflow-x-clip">
                        Build
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[1px]  bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="nav-item-home relative cursor-pointer overflow-x-clip">
                        Prepare
                        <span className="w-full transition-all duration-250 left-[-100%] absolute h-[1px]  bottom-[-3px] bg-black"></span>
                    </span>
                    <span className="cursor-pointer border-solid border-[2px] border-[#133748] py-[6px] px-4 rounded-full hover:bg-[#133748] hover:text-white select-none">
                        Counselling
                    </span>
                </div>
            </div>
        </div>
    );
}
