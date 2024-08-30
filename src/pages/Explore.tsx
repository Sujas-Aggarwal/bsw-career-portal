import Navbar from "../components/Navbar";
import Explore from "../components/explore/Explore";
import Hero from "../components/explore/Hero";
import { useParams } from "react-router-dom";

export default function ExplorePage() {
    const { profileName } = useParams();
    
    return (
        <div>
            <Navbar />
            <Hero profileName={profileName} />
            <Explore profileName={profileName} />
        </div>
    );
}