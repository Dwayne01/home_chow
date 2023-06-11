import Image from 'next/image'
import { Buttonbar } from './Buttonbar';

export function Becomechef() {
    return (
        <>
        <div className="  items-center  md:flex p-20  relative">
            <h2 className="text-xl  text-dark-gray-300 font-bold  md:text-4xl">
              Become a chef and start sharing your culinary creation with hungry customers today!
            </h2>
          
            
            <Image width={250} height={268} src="/assets/images/Man_cooked_turkey_for_Thanksgiving.png" className="  md:w-[424px] md:h-[424px] ml-10  " alt="stella" />

            <span className='top-96 lg:top-96 md:top-[490px]  md:left-12 absolute'>
                <Buttonbar />
            </span>
           
          
            {/* <button className="w-[343px]  bg-[#802200] hover:bg-opacity-80 hover:scale-105 hover:ease-in px-[38px] py-[14px] rounded-lg mt-10 text-white md:top-96  md:left-12 absolute">Become a Chef</button> */}
        </div>
        </>
    );
};