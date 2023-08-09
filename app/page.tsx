import AboutWad from '@/components/wads/about-wad'
import Cards from "@/components/wads/cards"
import Feartures from '@/components/wads/features'
import PaymentCard from '@/components/wads/payment-card'
import Roadmap from '@/components/wads/roadmap'
import Teamslider from '@/components/wads/teamslider'
import WadCommunity from '@/components/wads/wad-community'
import Image from 'next/image'
export default function Page() {
    return (
        <div className='bg-white dark:bg-black lg:pt-36 px-4 pt-20'>
            {/* hero */}
            <section>
                <div className="max-w-[1280px] Satoshi mx-auto">
                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:gap-x-8 xl:gap-x-12 sm:items-center">
                        <div className='relative'>
                            <p className='text-lg text-[#516371] mb-4 font-normal'>WAD Ecosystem</p>
                            <h1 className="block sm:text-3xl text-2xl text-[#150035] md:text-4xl font-bold lg:text-5xl xl:text-[54px] dark:text-white">
                            Your Token To The Better Future 
                            </h1>
                            <p className="mt-3 para text-lg text-[#000] dark:text-white font-bold">
                            Empower the ecosystem with transformative utility tokens for all. 
                            </p>
                            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">

                                <button className="wadbtn sm:w-[195px] rounded-full w-auto inline-flex justify-center items-center gap-x-3 text-cente  text-white font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0" 
                            >
                                    Get WAD
                                </button>
                                <div className="w-full sm:w-auto">
                                    <button className=" w-full sm:w-auto flex justify-center items-center gap-x-3 text-cente  text-white font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0" >
                                        <Image
                                            src="/images/palybtn.svg"
                                            alt="palybtn"
                                            width={54}
                                            height={54}
                                        />
                                        <span className="text-black dark:text-white">Explore</span>
                                    </button>
                                </div>
                            </div>
                            <img src="/images/spiralArrow.png" className='absolute bottom-[-70px] right-[100%] pointer-events-none'/>
                            <img src="/images/orangeCircles.png" className='absolute top-[-70px] right-0 pointer-events-none'/>
                        </div>
                        {/* End Col */}
                        <div className="mt-10 lg:mt-0">
                            <img className="w-full rounded-xl" src="/images/heroBanner.png" alt="Image Description" />
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                </div>
            </section>
            <Cards />
            <AboutWad />
            <Feartures />
            <PaymentCard />
            <Teamslider />
            <WadCommunity />
            <Roadmap />
        </div>
    )
}
