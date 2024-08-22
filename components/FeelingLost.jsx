import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { TfiBook } from "react-icons/tfi";
import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const FeelingLost = () => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide>

                        </div>
                        <div className='absolute border-2 border-red-500'>
                            <div></div>
                            <div>
                                <h1>Putuk Truno Camp</h1>
                                <h1>Prigen, Pasuruan</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <div className="relative w-full h-[600px]">
                            <Image
                                src='/img-1.png'
                                layout="fill"
                                objectFit="cover"
                                alt='Image 1'
                                className='rounded-3xl'
                            />
                        </div>
                        <div className='flex space-x-5 items-center absolute top-0 left-0 p-10 text-white '>
                            <div className='text-2xl bg-[#30AF5B] rounded-full '>
                                <div className='p-6 '>
                                    <TfiBook />
                                </div>
                            </div>
                            <div className=''>
                                <h1 className="text-white text-2xl  font-bold">Putuk Truno Camp</h1>
                                <h1 className="text-white text-xl pr-14 ">Prigen, Pasuruan</h1>
                            </div>
                        </div>
                        <div className='flex space-x-5 items-center absolute bottom-0 left-0 p-10 text-white '>
                            <div className='flex space-x-5'>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-1.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-2.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-3.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-4.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-white text-xl font-bold'>50+ Joined</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <div className="relative w-full h-[600px]">
                            <Image
                                src='/img-2.png'
                                layout="fill"
                                objectFit="cover"
                                alt='Image 1'
                                className='rounded-3xl'
                            />
                        </div>
                        <div className='flex space-x-5 items-center absolute top-0 left-0 p-10 text-white '>
                            <div className='text-2xl bg-[#30AF5B] rounded-full '>
                                <div className='p-6 '>
                                    <TfiBook />
                                </div>
                            </div>
                            <div className=''>
                                <h1 className="text-white text-2xl  font-bold">Putuk Truno Camp</h1>
                                <h1 className="text-white text-xl pr-14 ">Prigen, Pasuruan</h1>
                            </div>
                        </div>
                        <div className='flex space-x-5 items-center absolute bottom-0 left-0 p-10 text-white '>
                            <div className='flex space-x-5'>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-1.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-2.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-3.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                        <Image src="/person-4.png" height={50} width={50} alt="Camp Picture" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-white text-xl font-bold'>50+ Joined</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div> 
                <div>
                    <h1 className='text-4xl font-bold'>
                    Feeling Lost And Not Knowing The Way?
                    </h1>
                </div>
            </div>
        </>
    );
};

export default FeelingLost;