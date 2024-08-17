export default function Explore() {
    return (
        <div className="w-full h-[50vh]">
            <div className="w-full px-16 flex justify-between items-center h-full">
                <div id="carousel-box">
                    <div id="carousel-window"></div>
                    <div id="carousel-items"></div>
                </div>
                <div className="flex flex-col gap-[2px] text-center justify-center items-start">
                    <h1 className="font-bold text-3xl">Explore</h1>
                    <p className="max-w-[40ch] text-left">
                        Explore different streams, verified statistics, exciting
                        opportunities and much more
                    </p>
                    <div className="h-2"></div>
                    <button className="border-solid border-[2px] border-[#133748] py-[4px] px-2 hover:bg-[#133748] hover:text-white select-none">Read More</button>
                </div>
            </div>
        </div>
    );
}
