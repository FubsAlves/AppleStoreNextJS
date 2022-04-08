import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import Image from 'next/image'

const Iphone: NextPage = () => {
  return (
      <div>
          <Head>
              <title>iPhone - Apple</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Navbar/>
          <div className='flex justify-center my-4'>
              <ul className='flex font-s text-xs text-footergray font-medium space-x-8'>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg'} alt='iPhone 13 Pro' height={54} width={38}/></figure>iPhone 13 Pro<span className='text-orange-400 text-[10px]'>Novo</span></li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_light__ewo3e0sf67o2_large.svg'} alt='iPhone 13' height={54} width={36}/></figure>iPhone 13<span className='text-orange-400 text-[10px]'>Novo</span ></li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg'} alt='iPhone SE' height={54} width={19}/></figure>iPhone SE<span className='text-orange-400 text-[10px]'>Novo</span></li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_12_light__cxh2ll1zwpw2_large.svg'} alt='iPhone 12' height={54} width={36}/></figure>iPhone 12</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_11_light__b9p04p2r2vqu_large.svg'} alt='iPhone 11' height={54} width={22}/></figure>iPhone 11</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg'} alt='Compare' height={54} width={45}/></figure>Comparar</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/airpods_light__8oj157p2476a_large.svg'} alt='AirPods' height={54} width={27}/></figure>AirPods</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/airtag_light__cb2bmnv6aoeu_large.svg'} alt='AirTag' height={54} width={30}/></figure>AirTag</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg'} alt='Accessories' height={54} width={35}/></figure>Acessórios</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_ios_light__b8s4ws8o77iq_large.svg'} alt='iOS 15' height={54} width={32}/></figure>iOS 15</li></a>
                  <a href='#' className='hover:text-blue-400'><li className='flex flex-col items-center'><figure><Image src={'https://www.apple.com/v/iphone/home/be/images/chapternav/shop_iphone_light__b2toggskllle_large.svg'} alt='Compare iPhone' height={54} width={60}/></figure>Comparar iPhone</li></a>
              </ul>
          </div>
          <Footer/>
      </div>
        
  )
}

export default Iphone
