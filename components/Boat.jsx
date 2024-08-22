import Image from 'next/image';
import React from 'react';

const Boat = () => {
    return (
        <div className='mb-10'>
            <div className='relative'>

                <Image
                    src="/boat.png"
                    alt="Camp Picture"
                    layout="responsive" // for full width
                    width={1000}
                    height={1000}
                     className='rounded-3xl'
                />
            </div>
            <div></div>
        </div>
    );
};

export default Boat;