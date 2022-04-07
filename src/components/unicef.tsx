import { NextComponentType } from 'next'
import Image from 'next/image'

const Unicef: NextComponentType = () => {
  return (
    <section className='flex w-full justify-center items-center h-[4.5rem] bg-swhite'>
        <figure className='mt-3.0'>
            <Image src={'https://www.apple.com/v/home/am/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png'} alt='Unicef' height={32} width={122}/>
        </figure>
        <a href="https://www.unicef.org/brazil/doe-agora" className='font-sfl text-sm hover:underline ml-3.5 text-blue-600'>Faça uma doação para as famílias afetadas pela guerra na Ucrânia. ↗</a>
    </section>   
  )
}

export default Unicef
