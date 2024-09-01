import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import profileData from "../../assets/profiles.json";

export default function Main({ profileName }: { profileName: string|undefined }) {
    const profile = profileData[profileName as keyof typeof profileData];
    const [readMore, setReadMore] = useState<boolean>(false);

    return (
        <div className="w-full min-h-[60vh] overflow-hidden py-16 bg-white">
            <div className="w-full px-4 md:px-16 flex-col flex justify-center items-center h-full text-center">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="font-bold text-4xl md:text-5xl leading-[1.3]">
                        Overview
                    </h1>
                    <p className="text-lg md:text-xl max-w-[600px] leading-[1.8]">
                        {profile.overview}
                    </p>
                    <button className="mt-6 border-solid border-2 border-black py-3 px-6 hover:bg-black hover:text-white" onClick={() => setReadMore(!readMore)}>
                        Read More
                    </button>
                    <div className={`max-w-[600px] text-left ${readMore ? "block" : "hidden"}`}>
                        <p className="text-lg md:text-xl leading-[1.8]" dangerouslySetInnerHTML={{ __html: profile.readmore }} />
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <FAQs profile={profile} />
            </div>
        </div>
    );
}

function FAQs({ profile }: { profile: typeof profileData[keyof typeof profileData] }) {
    const faqItems = [
        { question: "What is the expected payscale?", answer: profile.payscale },
        { question: "What are the eligible branches?", answer: profile.branches },
        { question: "What are the required skills?", answer: profile.skills },
        { question: "What is the general future trajectory?", answer: profile.trajectory },
        { question: "What are the most important resume highlights?", answer: profile.resume },
        { question: "What are the top companies that hire?", answer: profile.companies },
    ];

    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % faqItems.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + faqItems.length) % faqItems.length);
    };

    return (
        <div className="w-full md:min-h-[calc(100vh-64px)] min-h-[calc(50vh-32px)] bg-[#133748] py-4 md:py-12 flex flex-col justify-between relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-[0.1rem] md:mb-12 text-center text-white leading-[1.3]">FAQs</h2>
            {isSmallScreen ? (
                <div className="relative flex justify-center items-center flex-1 m-5 md:mx-2">
                    {/* Left Carousel Button */}
                    <button
                        className="absolute left-0 p-2 bg-black rounded-full opacity-75 hover:opacity-100 z-10"
                        onClick={handlePrev}
                        aria-label="Previous"
                    >
                        <FaArrowLeft size={16} color="white" />
                    </button>
                    {/* Carousel Container */}
                    <div className="w-full overflow-hidden">
                        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {faqItems.map((faq, index) => (
                                <div key={index} className="min-w-[80%] mx-[10%] my-auto py-4 px-5 bg-white rounded-2xl text-left text-black shadow-lg md:h-[140px]"> {/* Decreased height to half */}
                                    <h3 className="font-bold text-sm md:text-lg leading-[1.2]">{faq.question}</h3>
                                    <p className="text-xs pt-2 md:text-sm leading-[1.4]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Carousel Button */}
                    <button
                        className="absolute right-0 p-2 bg-black rounded-full opacity-75 hover:opacity-100 z-10"
                        onClick={handleNext}
                        aria-label="Next"
                    >
                        <FaArrowRight size={16} color="white" />
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-12 flex-1">
                    {faqItems.map((faq, index) => (
                        <div key={index} className="p-2 md:p-3 bg-white rounded-2xl shadow-lg">
                            <h3 className="font-bold text-sm md:text-lg text-black leading-[1.2] md:leading-[1.5]">{faq.question}</h3>
                            <p className="text-xs pt-2 md:text-sm text-black leading-[1.4] md:leading-[1.8]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
