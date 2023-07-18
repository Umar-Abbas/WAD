import React from 'react'

export default function WadCommunity() {
    return (
        <section className='lg:py-24 md:py-12 flex items-center relative overflow-hidden py-8'>
            <img className='absolute left-0' src="/images/lineL.png" />
            <img className='absolute right-0' src="/images/lineR.png" />
            <div className="max-w-[1280px] Satoshi mx-auto z-40">
                <div className='grid lg:grid-cols-2 z-40 lg:h-[513px] bg-[url(/images/WadCommunityBG.png)] bg-cover rounded-[45px] overflow-hidden'>

                    <div className='flex items-center h-full'>
                        <div className='pl-16'>
                            <h2 className="text-[#ffffff] lg:text-[40px] md:text-3xl sm:text-2xl text-xl dark:text-white">
                                Join WAD Community
                            </h2>
                            <p className="mt-3 md:text-lg text-sm font-normal text-white dark:text-white ">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.

                            </p>
                            <button className="bg-white mt-6 w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                                Join WAD Community
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
