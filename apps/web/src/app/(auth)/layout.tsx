import Navbar from "@/Components/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#111827] w-full min-h-screen">
            <Navbar></Navbar>

            {children}
        </div>
    )
}
