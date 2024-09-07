import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function Landing() {
    return (
        <div className="w-full flex flex-col items-center bg-[#111827]">
            <Navbar></Navbar>
            <HeroSection></HeroSection>

        </div>
    )
}
