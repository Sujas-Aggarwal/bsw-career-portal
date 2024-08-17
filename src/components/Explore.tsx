export default function Explore() {
    return (
        <div className="w-full h-[50vh]">
            <div className="w-full px-16 flex justify-between items-center h-full">
                <Carousel />
                <div className="flex flex-col gap-[2px] text-center justify-center items-start">
                    <h1 className="font-bold text-3xl">Explore</h1>
                    <p className="max-w-[40ch] text-left">
                        Explore different streams, verified statistics, exciting
                        opportunities and much more
                    </p>
                    <div className="h-2"></div>
                    <button className="border-solid border-[2px] border-[#133748] py-[4px] px-2 hover:bg-[#133748] hover:text-white select-none">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
function Carousel() {
    let listItems = [
        "Core",
        "SDE",
        "Consult",
        "Analytics",
        "Quant",
        "AI / ML",
        "Finance",
    ];

    return (
        <div
            id="carousel-box"
            className="flex flex-col justify-center items-center gap-2"
        >
            <div
                id="carousel-window"
                className="flex gap-4 justify-center items-center"
            >
                <button>
                    <LeftButton />
                </button>
                <div
                    id="carousel"
                    className="w-[500px] h-[200px] bg-black"
                ></div>
                <button>
                    <RightButton />
                </button>
            </div>
            <div id="carousel-items" className="flex w-full justify-evenly">
                {listItems.map((item, index) => {
                    return <button key={index}>{item}</button>;
                })}
            </div>
        </div>
    );
}
function LeftButton() {
    return (
        <svg
            width="18"
            height="43"
            viewBox="0 0 18 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="0.713297"
                y1="23.5414"
                x2="16.6374"
                y2="0.799526"
                stroke="black"
                stroke-width="0.7"
            />
            <line
                x1="1.27053"
                y1="23.5201"
                x2="16.9323"
                y2="42.5992"
                stroke="black"
                stroke-width="0.7"
            />
        </svg>
    );
}
function RightButton() {
    return (
        <svg
            width="18"
            height="43"
            viewBox="0 0 18 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="17.2105"
                y1="19.2794"
                x2="1.28647"
                y2="42.0213"
                stroke="black"
                stroke-width="0.7"
            />
            <line
                x1="16.6533"
                y1="19.3007"
                x2="0.991486"
                y2="0.221584"
                stroke="black"
                stroke-width="0.7"
            />
        </svg>
    );
}
