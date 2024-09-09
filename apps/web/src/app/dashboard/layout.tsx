import Navbar2 from "@/Components/Navbar2";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" bg-[#1E293B] w-full min-h-screen">
            <Navbar2></Navbar2>
            {children}
        </div>
    )
}
