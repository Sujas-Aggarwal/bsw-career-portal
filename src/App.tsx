import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";

export default function App() {
    return (
        <div >
            <Navbar />
            <Hero />
            <Gapdiv/>
            <Explore />
        </div>
    );
}
function Gapdiv({ gap = 10 }: { gap?: number }) {
    return <div className={`h-${gap}`}></div>;
}
