import Image from 'next/image'


export function Infocolumn() {
    return (
        <>
        <section className='flex-col items-center gap-12 p-20'>
          <div className=' items-center justify-around gap-4 mb-6 md:flex'>
              <Image width={237}
                      height={181} 
                      src="/assets/images/Man_studying_financial_analytics.png" 
                      className=" md:w-[500px] md:h-[402px]" alt="stella" />

            <div className='flex-col gap-[18px] md:w-[480px] md:h-[136px]'>
              <h1 className='font-bold text-3xl text-secondary-color flex mb-2 md:mb-4  md:text-4xl'>
                  Dashboard
              </h1>

              <h2 className='font-normal text-base text-dark-gray-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris. Auctor pharetra montes aliquet. 
              </h2>
            </div>
          </div>

          <div className=' items-center  justify-around gap-4 mb-6 md:flex'>

            <div className='flex-col gap-[18px] md:w-[480px]  md:h-[136px] '>
              <h1 className='font-bold text-3xl text-secondary-color flex mb-2 md:mb-4  md:text-4xl'>
                  Menu
              </h1>

              <h2 className='font-normal text-base text-dark-gray-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris. Auctor pharetra montes aliquet. 
              </h2>
            </div>

            <Image width={242}
                      height={185} 
                      src="/assets/images/Signup.png" 
                      className=" md:w-[456px] md:h-[456px]" alt="signup" />
          </div>

          <div className=' items-center justify-around gap-4 mb-6 md:flex'>
            <span>
              <Image width={242}
                      height={185} 
                      src="/assets/images/Order_complete.png" 
                      className=" md:w-[456px] md:h-[456px]" alt="order" />
            </span>

            <div className='flex-col md:w-[480px] md:h-[136px]'>
              <h1 className='font-bold text-3xl text-secondary-color flex mb-2 md:mb-4 md:text-4xl'>
                  Order
              </h1>

              <h2 className='font-normal text-base text-dark-gray-300 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris. Auctor pharetra montes aliquet. 
              </h2>
            </div>
          </div> 
          
        </section>
        </>
    );
};