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
              <div className='bg-white absolute top-20 left-20 rounded-3xl w-[300px]'>
                <div className='p-5 flex space-x-4 '>
                    <div>
                    <Image
                    src="/meter.svg"
                    alt="Camp Picture"
                     // for full width
                    width={30}
                    height={30}
                     className='rounded-3xl'
                />
                    </div>
                 <div>
                <div className='flex space-x-16'>
                    <p className='text-gray-30'>Destination</p>
                    <p className='text-[#30AF5B]'>48 min</p>
                </div>
                  <h1 className='text-2xl text-black font-bold my-2'>Aguas Calientes</h1>
                  <div className='pt-16'>
                    <p>Start track</p>
                    <h1>Wonorejo Pasuruan
                    </h1>
                  </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Boat;