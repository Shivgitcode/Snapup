"use client"
import { useState } from "react"
import { LuAlignJustify } from "react-icons/lu"
import { delay, motion } from "framer-motion"
import Link from "next/link"
import { RxCross1 } from "react-icons/rx"

export default function Navbar2() {
    const [show, setShow] = useState(false)
    const value = { close: { opacity: 0, y: -200, height: 0, transition: { delay: 0.1 } }, open: { opacity: 1, y: 0, height: 100 } }
    const handleNav = () => { }
    const value2 = { close: { opacity: 0, x: -100, transition: { delay: 0 } }, open: { opacity: 1, x: 0, transition: { delay: 0.2 } } }
    return (
        <div className='w-full py-3 px-5 flex-col justify-between items-center bg-[#334155]'>
            <div className="flex justify-between w-full">
                <div>
                    <h1 className="text-white font-bold text-[20px]">SnapUp</h1>
                </div>

                <div onClick={() => setShow(!show)} className=" cursor-pointer">
                    <LuAlignJustify color="white" fontSize={30}></LuAlignJustify>

                </div>
            </div>
            <motion.ul variants={value} animate={`${show ? "close" : "open"}`}>
                <motion.li variants={value2} animate={`${show ? "close" : "open"}`}>hello</motion.li>
                <motion.li variants={value2} animate={`${show ? "close" : "open"}`}>hello</motion.li>
                <motion.li variants={value2} animate={`${show ? "close" : "open"}`}>hello</motion.li>
                <motion.li variants={value2} animate={`${show ? "close" : "open"}`}>hello</motion.li>
            </motion.ul>



        </div>
    )
}
