import Image from 'next/image'
import React from 'react'
import add from '@/public/assets/add.svg'
import upload from '@/public/assets/upload.svg'
import Link from 'next/link'

const UploadPopup = ({ onClose }) => {

    return (
        <>
            <div className="bgImage min-h-screen">
                <div className=" flex justify-center relative top-8 items-center">
                    <div className="p-4 md:w-[400px] bg-white rounded-3xl">
                        <div className="">
                            <h2 className="text-lg font-medium">provide the following info to proceed further</h2>

                            <div className="flex gap-4">
                                <form className="pt-5">
                                    <div className=" grid grid-cols-6 gap-3 rounded-2xl">
                                        <div className="col-span-6 flex flex-col gap-2">
                                            <label htmlFor="upload" className="w-[70px] h-[70px] gap-1 relative cursor-pointer  rounded-full border text-[#0D75920D] justify-center px-4 py-2 flex items-center">
                                                <input type="file" id="upload" className="hidden" />
                                                <Image src={upload} alt="Upload Icon" className="h-5 w-5 " />
                                            </label>
                                            <p className='text-xs text-[#0076FC] font-medium'>Upload Profile Photo</p>
                                        </div>
                                        <div className="col-span-6 border px-3 flex flex-col gap-2 py-1 rounded-md">
                                            <textarea name="" id="" cols="40" rows="4" className='outline-none'>About Us </textarea>
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="Age" className="block text-sm font-medium py-1">
                                                Age
                                            </label>
                                            <input type="text" placeholder='Enter Your Age' className='border  outline-none px-2 py-2 rounded-md' />
                                        </div>
                                        <div className="col-span-6 gap-2">
                                            <label htmlFor="skill" className="block text-sm font-medium py-2">
                                                what are the languages do you know?
                                            </label>
                                            <button className='text-[#0076FC] text-sm flex font-medium  items-center py-1 gap-2 border-[#0076FC] border-2 rounded-full px-2'><Image src={add} alt='' /> Add Language</button>
                                        </div>
                                        <div className="col-span-6">
                                            <Link href='/jobtitle'><button className='text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white'>Next</button>
                                            </Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPopup