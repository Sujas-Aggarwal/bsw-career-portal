import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Explore from "../components/landing/Explore";
import BuildProfile from "../components/landing/BuildProfile";
import HandsOnExposure from "../components/landing/HandsOnExposure";
import Prepare from "../components/landing/Prepare";

export default function Landing() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Explore />
            <BuildProfile />
            <HandsOnExposure />
            <Prepare />
        </div>
    );
}