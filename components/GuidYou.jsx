import Image from 'next/image';
import React from 'react';

const GuidYou = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='flex justify-between'>
                <div>
                <Image src="/camp.svg" height={50} width={50} alt="Camp Picture" />
                    <p className=''>We are here for you</p>
                    <h1 className='text-5xl font-bold text-black'>Guide You to Easy Path </h1>
                    
                </div>
                <div className='max-w-[520px]'>
                <p className='text-gray-30'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
                </div>
            </div>
        </div>
    );
};

export default GuidYou;