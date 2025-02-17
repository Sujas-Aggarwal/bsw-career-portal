import HeroBg from "../assets/home-bg.svg";
export default function Hero() {
    return (
        <div className="h-screen flex  relative overflow-hidden md:bg-transparent bg-[#133748]">
            <Background />
            <div className="flex flex-col text-center justify-center items-center gap-[6px] text-white  md:pl-[10vw] md:pt-[10vh] p-2">
                <img src="./logo.png" alt="" className="md:hidden w-[60%] mb-4"/>
                <h1 className="text-4xl font-bold font-[Poppins] md:flex hidden">Prepare</h1>
                <p className="max-w-[40ch] text-center text-balance">
                    A comprehensive guide including all relevant resources to
                    help you prepare for your dream career
                </p>
            </div>
        </div>
    );
}
function Background() {
    //I had to make this because somehow when I was exporting the svg from figma, the opacity of the svg was litte off
    return (
        <div className="hidden md:flex">
            <img
                src={HeroBg}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
            <img
                src={HeroBg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover  h-full"
            />{" "}
            <img
                src={HeroBg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />{" "}
            <img
                src={HeroBg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover  h-full"
            />{" "}
            <img
                src={HeroBg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
        </div>
    );
}
