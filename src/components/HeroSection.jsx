import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] h-[42.3vw] rounded-[0.7vw] bg-strathmore-blue'>
            <div className='flex flex-row gap-[5vw]'>
                <div className='ml-[7.5vw] mt-[11vw]'>
                    <h1 className='text-[4vw] font-semibold'>
                        HEAD
                    </h1>

                    <p className='text-[1.3vw] w-[45vw] font-normal'>
                    Lorem ipsum dolor sit amet. In tenetur voluptatem est facere accusantium non itaque aperiam in quia nulla et galisum quaerat eum labore mollitia sed ipsa quia! Et similique voluptas qui quas dignissimos eos obcaecati dolores eos optio asperiores. Non illo sunt et laboriosam ipsam et quos itaque cum nisi dolor sed officia sint. Rem consequatur laudantium est itaque aliquam est ullam excepturi aut internos totam aut voluptatem delectus nam nemo enim!
                    </p>

                    <div className='w-[15vw] h-[3vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow mt-[1.2vw]'>
                        <p className='text-white text-center leading-[2.6vw] text-[1.05vw]'>
                            Get Started
                        </p>
                    </div>
                </div>
                
                <div className='w-[35vw] h-[35vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow mt-[4vw]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection