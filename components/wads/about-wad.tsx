import React from 'react'

export default function AboutWad() {
  return (
    <section className='lg:pt-24 lg:pb-12 md:pt-12 md:mb-6 flex items-center relative overflow-hidden py-8' id="about">
      <img className='absolute left-0' src="/images/lineL.png" />
      <img className='absolute right-0' src="/images/lineR.png" />
      <div className="max-w-[1280px] Satoshi mx-auto z-40">
        <div className='grid lg:grid-cols-2 z-40 dark:shadow-cardabout lg:h-[513px] bg-[url(/images/bg-wad.png)] bg-cover rounded-[45px] overflow-hidden'>
          <div></div>
          <div className='flex items-center h-full'>
            <div className='p-6'>
              <h2 className="text-[#ffffff] lg:text-[40px] md:text-3xl sm:text-2xl text-xl dark:text-white font-bold">
                About WAD
              </h2>
              <p className="mt-3 md:text-lg text-sm font-normal text-white dark:text-white ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
