import Link from "next/link";
import Auth from "./Auth";

export default function RegsiterPage() {
    return (
        <div className="py-[48px] mx-[16px] flex flex-col items-center">
            <div className="flex flex-col items-center mb-[32px]">
                <h1 className="text-white text-[30px] leading-[36px] mt-[24px] font-bold">Create new account</h1>
                <p className="mt-[8px] text-[14px] leading-[20px] text-[#d1d5db] font-medium">Or <Link href={"/login"} className=" text-[#c7d2fe]">sign in to your existing account.</Link></p>
            </div>
            <div className="w-full">
                <Auth name="register" btntext="Create Account"></Auth>
            </div>

        </div>
    )
}
