"use client"
import { useState } from "react";
import { motion } from "framer-motion"
import { LuAlignJustify } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
export default function Navbar() {
    const [show, setShow] = useState(false)
    const value = { close: { opacity: 0, y: -200 }, open: { opacity: 1, y: 0 } }
    const handleNav = () => { }
    return (
        <div className='w-full py-3 px-5 flex justify-between items-center '>
            <div>
                <h1 className="text-white font-bold text-[20px]">SnapUp</h1>
            </div>

            <div onClick={() => setShow(true)} className=" cursor-pointer">
                <LuAlignJustify color="white" fontSize={30}></LuAlignJustify>
            </div>

            <motion.div variants={value} initial={false} animate={show ? "open" : "close"} className="absolute top-3 w-[92%] mx-auto bg-white p-10 rounded-lg">
                <button className="absolute top-3 right-5" onClick={() => setShow(false)} ><RxCross1 fontSize={25}></RxCross1></button>
                <div className="flex flex-col items-center gap-3 mt-5">
                    <button className=" bg-main font-bold text-white w-full p-2 rounded ">Register</button>
                    <p className=" text-[#6b7280]">Existing Customer?<Link href={"/login"} className=" font-medium">Login</Link></p>
                </div>

            </motion.div>

        </div>
    )
}
