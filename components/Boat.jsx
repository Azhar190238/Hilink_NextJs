import Image from 'next/image';
import React from 'react';

const Boat = () => {
    return (
        <div className=''>
         <div>
         <Image src="/boat.png" height={1000} width={1000} alt="Camp Picture" />
         </div>
        </div>
    );
};

export default Boat;