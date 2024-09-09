import Image from "next/image";
export default function HeroSection() {
    return (
        <div className="flex flex-col mx-5 sm:w-full px-4 mt-5 sm:flex-row sm:justify-between sm:mx-0 sm:px-0 sm:items-center">
            <div className="sm:mx-auto sm:flex sm:flex-col sm:justify-between">
                <p className="flex flex-col items-start text-[36px] sm:text-[60px] leading-tight text-white font-bold">
                    Fast and Reliable
                    <p className=" text-main mb-[12px] ">Website Uptime Monitoring</p>
                </p>
                <p className=" text-[#d1d5db]">Get 10 multi-region 30-second checks for free.
                    No credit card required. </p>
                <div className="flex flex-col items-center w-full gap-3 mt-7 ">
                    <input type="text" placeholder="https://your-website-com" className="w-full px-[16px] py-[12px] rounded-md" />
                    <input type="email" placeholder="your@email.com" className="w-full px-[16px] py-[12px] rounded-md" />
                    <button className=" bg-main w-full px-[16px] py-[12px] rounded-md text-white font-medium hover:bg-[#06615b] transition-all duration-100" >Start monitoring</button>
                </div>

            </div>


            <div className="relative w-[400px] h-[300px] mt-8 mx-auto mb-8 sm:min-w-[592px] sm:h-[664px] ">
                <Image src={"/monitor.png"} alt="hello" fill objectFit="cover" objectPosition="center"></Image>
            </div>
        </div>
    )
}
