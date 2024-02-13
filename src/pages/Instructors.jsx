import React from 'react';
import { Navbar, HeroSection, TrustedCompanies, FunSection, TopicSection, Footer, AboutUs, MentorSection } from "../components";

const HomePage = () => {
  return (
    <div>
        <Navbar />

        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] h-[42.3vw] rounded-[0.7vw] bg-strathmore-blue'>
            <div className='flex'>
                <div className='mt-[6.5vw] mx-auto'>
                    <h1 className='text-[4vw] font-bold text-center text-strathmore-yellow-light mb-[3vw]'>
                        A TEAM BUILT JUST FOR YOU
                    </h1>

                    <p className='text-[1.36vw] text-center font-normal text-white'>
                        Lorem ipsum dolor sit amet. In tenetur voluptatem est facere accusantium non itaque aperiam in quia nulla et galisum<br /> quaerat eum labore mollitia sed ipsa quia! Et similique voluptas qui quas dignissimos eos obcaecati dolores eos optio <br /> asperiores. Non illo sunt et laboriosam ipsam et quos itaque cum nisi dolor sed officia sint. Rem consequatur laudantium est <br /> itaque aliquam est ullam excepturi aut internos totam aut voluptatem delectus nam nemo enim!
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw] mt-[0.7vw]'></div>

            <div className='flex flex-row ml-[2vw] mt-[1.4vw] mb-[1.4vw] gap-[6vw]'>
                <div className='w-[35vw] h-[35vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow'>

                </div>

                <div className='mt-[8.5vw]'>
                    <h1 className='text-[2.5vw] text-center font-bold'>
                        Guiding you to your Dream Career
                    </h1>

                    <p className='text-[1.36vw] text-center w-[50vw]'>
                        Lorem ipsum dolor sit amet. In tenetur voluptatem est facere accusantium non itaque aperiam in quia nulla et galisum quaerat eum labore mollitia sed ipsa quia! Et similique voluptas qui quas dignissimos eos obcaecati dolores eos optio asperiores. Non illo sunt et laboriosam ipsam et quos itaque cum nisi dolor sed officia sint. Rem consequatur laudantium est itaque aliquam est ullam excepturi aut internos totam aut voluptatem delectus nam nemo enim!
                    </p>
                </div>
            </div>
        </div>

        <MentorSection />
        <Footer />
    </div>
  )
}

export default HomePage