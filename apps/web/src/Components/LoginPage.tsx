import Link from 'next/link'
import React from 'react'
import Auth from './Auth'

export default function LoginPage() {
    return (
        <div className="py-[48px] mx-[16px] flex flex-col items-center">
            <div className="flex flex-col items-center mb-[32px]">
                <h1 className="text-white text-[30px] leading-[36px] mt-[24px] font-bold">Log in to your account</h1>
                <p className="mt-[8px] text-[14px] leading-[20px] text-[#d1d5db] font-medium">or <Link href={"/register"} className=" text-[#c7d2fe]">create new account</Link></p>
            </div>
            <div className='w-full'>
                <Auth name="Login" btntext="Log in"></Auth>
            </div>
        </div>
    )
}
