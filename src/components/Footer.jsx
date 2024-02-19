import React from 'react'
import { strathlogoCntered } from '../assets';

const Footer = () => {
  return (
    <div>
        {/* <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw] mt-[0.7vw]'></div> */}

        <div>
            {/* <div className='flex justify-center'>
                <img src={strathlogoCntered} className='h-[8vw]'/>
            </div> */}

            {/* <div className='text-[0.9vw] mt-[-0.9vw] flex flex-row gap-[0.5vw] justify-center font-semibold'>
                <p>
                    Terms of Service 
                </p>

                <p>
                    &#x2022;
                </p>

                <p className='mb-[0.5vw]'>
                    Privacy Policy
                </p>
            </div> */}

            <div>
                <p className='text-[0.9vw] my-[0.4vw] flex flex-row gap-[0.5vw] font-semibold justify-center'>
                    &copy; 2024 Strathmore University. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer