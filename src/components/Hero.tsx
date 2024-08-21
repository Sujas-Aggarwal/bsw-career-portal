import HeroBg from "../assets/home-bg.svg";
export default function Hero() {
    return (
        <div className="h-screen flex  relative overflow-hidden">
            <Background />
            <div className="flex flex-col text-center justify-center items-center gap-[6px] text-white pl-[10vw] pt-[10vh]">
                <h1 className="text-4xl font-bold font-[Poppins]">Prepare</h1>
                <p className="max-w-[40ch] text-center">
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
        <div>
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
