import Image from 'next/image'

export function Whyhomechow() {
    return (
        <>
        <div className=' items-center justify-center gap-14 mt-32 bg-[#F8F8F8] md:flex'>
            <div className='flex-col items-center md:w-[480px] md:h-[160px]'>
              <h1 className='font-bold text-3xl text-secondary-color flex gap-3 mb-5 md:text-5xl'>
              Why <p className='text-[#802200]'> HomeChow?</p>
              </h1>

              <h2 className='font-normal text-base text-[#3c3c3c] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris. Auctor pharetra montes aliquet. 
              </h2>
            </div>

            <button>
               <Image width={340}
                      height={260} 
                      src="/assets/images/youtube.png" 
                       alt="youtube" />
            </button>
        </div>
        </>
    );
};