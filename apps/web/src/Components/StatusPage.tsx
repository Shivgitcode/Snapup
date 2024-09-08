import Image from "next/image";

export default function StatusPage() {
    return (
        <div className=" bg-[#f9fafb]">
            <div className="pt-[64px] px-[16px] mx-[24px] flex flex-col items-center overflow-hidden">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[30px] leading-9 text-[#111827]">Status Pages</h1>
                    <p className="text-center text-[#6b7280] mt-[20px] text-[20px] leading-[28px]">Let your customers see your website's status or keep it displayed for your team in the office.</p>
                </div>
                <div className="w-[400px] h-[200px] relative mt-[40px] mb-[-40px] jus">
                    <Image src={"/page.png"} alt="page" fill objectFit="cover"></Image>
                </div>

            </div>

        </div>
    )
}
