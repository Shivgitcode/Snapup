
export default function Auth({ name, btntext }: { name: string, btntext: string }) {
    return (
        <div className="w-full">
            <form className="flex flex-col bg-white w-full py-[32px] px-[16px] gap-[24px]">
                <div className="flex flex-col">
                    <label className="text-[#374151] text-[14px] font-medium">
                        Email address
                    </label>
                    <input type="text" className="border py-[8px] px-[12px] rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[#374151] text-[14px] font-medium">
                        Password
                    </label>
                    <input type="password" className="border py-[8px] px-[12px] rounded-md" />
                </div>
                <div className={`${name !== "register" && "hidden"} flex flex-col`}>
                    <label className="text-[#374151] text-[14px] font-medium">
                        Password Confirmation
                    </label>
                    <input type="password" className="border py-[8px] px-[12px] rounded-md" />
                </div>

                <button className=" py-[8px] px-[16px] text-[14px] text-white rounded-md font-medium leading-[20px] bg-[#475569] hover:bg-[#1d2a3b]">{btntext}</button>
            </form>
        </div>
    )
}
