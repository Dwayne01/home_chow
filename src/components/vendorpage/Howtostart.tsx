import Image from 'next/image'
import { Buttonbar } from './Buttonbar';

export function Howtostart() {
    return(
        <>
        <div className='flex-col text-center p-20'>
             <h1 className='font-bold text-3xl text-secondary-color flex gap-3 mb-5 md:text-5xl'>
                How to  <span className='text-brown'> Start?</span>
              </h1>

          <div className="lg:flex gap-8">
            <div className="shadow-lg p-10 my-10 rounded-[20px] dark:bg-white flex-1">
              <Image width={80}
                        height={80} 
                        src="/assets/images/tag.png" 
                        className="rounded-full " alt="tag" />
                <div className='flex-col gap-2 '>
                    <h1 className='font-semibold text-lg text-green flex md:text-xl md:font-bold '>
                    Sign up
                    </h1>

                    <h2 className='font-normal text-base text-dark-gray-300 '>
                    If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team. 
                    </h2>
                </div>
              </div>

              <div className=" shadow-lg p-10 my-10 rounded-[20px] dark:bg-white flex-1">
              <Image width={80}
                        height={80} 
                        src="/assets/images/noodlesbowl.png" 
                        className="rounded-full " alt="tag" />
                <div className='flex-col  gap-2 '>
                    <h1 className='font-semibold text-lg text-green flex md:text-xl md:font-bold '>
                    Create Your Menu
                    </h1>

                    <h2 className='font-normal text-base text-dark-gray-300 '>
                    Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.
                    </h2>
                </div>
              </div>

              <div className="shadow-lg p-10 my-10 rounded-[20px] dark:bg-white flex-1">
              <Image width={80}
                        height={80} 
                        src="/assets/images/bike.png" 
                        className="rounded-full " alt="tag" />
                <div className='flex-col gap-2 '>
                    <h1 className='font-semibold text-lg text-green flex md:text-xl md:font-bold '>
                    Share Your Hometown Food
                    </h1>

                    <h2 className='font-normal text-base text-dark-gray-300 '>
                    Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.  
                    </h2>
                </div>
              </div>

          </div>

          <Buttonbar />
        </div>
        </>
    );
};