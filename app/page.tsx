import AboutWad from '@/components/wads/about-wad'
import Cards from "@/components/wads/cards"
import Feartures from '@/components/wads/features'
import PaymentCard from '@/components/wads/payment-card'
import Teamslider from '@/components/wads/teamslider'
import WadCommunity from '@/components/wads/wad-community'
import Image from 'next/image'
export default function Page() {
    return (
        <div className='bg-white dark:bg-black lg:pt-36 pt-20'>
            {/* hero */}
            <section>
                <div className="max-w-[1280px] Satoshi mx-auto">
                    {/* Grid */}
                    <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                        <div>
                            <h1 className="block text-3xl text-[#150035] sm:text-4xl md:text-5xl lg:text-[54px] dark:text-white">
                                The People&apos;s
                                Cryptocurrency
                            </h1>
                            <p className="mt-3 para text-lg text-[#000] dark:text-white ">
                                WAD is the utility token of the WAD ecosystem.
                            </p>
                            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">

                                <button className="wadbtn sm:w-[195px] rounded-full w-auto inline-flex justify-center items-center gap-x-3 text-cente  text-white font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0" 
                                style={{
                                  
                                    background: 'linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)',
                                    boxShadow: '0px 25px 30px 0px rgba(21, 0, 53, 0.16)'
                                }}>
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
        </div>
    )
}
