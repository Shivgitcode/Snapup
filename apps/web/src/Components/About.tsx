import { about } from "@/lib";
import Image from "next/image";

export default function About() {
    return (
        <div className=" px-[16px] mx-[17px] py-[40px] sm:w-[70%] sm:mx-auto">
            <div className="flex flex-col items-center">
                <h1 className=" mt-[8px] text-[30px] font-bold leading-[36px]">What Uptime Monitor can do?</h1>
                <p className=" text-center mt-[20px] text-[20px] leading-[28px] sm:w-[60%] text-[#6b7280]">
                    Uptime Monitor is a powerful tool for ensuring the availability of your websites and servers. With our service, you can easily keep track of your online assets and receive alerts when there are any issues or disruptions.
                </p>

            </div>

            <div className="flex flex-col items-center mt-[24px] gap-6 sm:grid sm:grid-cols-3 sm:grid-rows-2">
                {about.map(el => {
                    return (
                        <div key={el.id} className="flex flex-col items-center bg-[#f9fafb] rounded-lg mt-[24px] px-[24px] pb-[32px]">
                            <div className="w-[48px] h-[48px] p-[12px] rounded-md relative bg-main top-[-20px] flex justify-center items-center">
                                <Image src={el.img} alt="hello" width={20} height={20}></Image>
                            </div>
                            <h2 className=" text-[18px] leading-[28px] font-medium mt-[32px]">{el.head}</h2>
                            <p className="text-center text-[#6b7280] text-[16px] leading-[24px]">{el.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
