import Image from 'next/image';
import React from 'react';

const Boat = () => {
    return (
        <div className=''>
            <div className='rounded-3xl'>

                <Image
                    src="/boat.png"
                    alt="Camp Picture"
                    layout="responsive"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
};

export default Boat;