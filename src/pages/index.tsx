import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/section'

const Home: NextPage = () => {
  return (
      <div>
          <Head>
              <title>Apple</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Navbar/>
          <Section/>
          <div id='main-content' className='flex flex-col items-center h-screen bg-iphone13sale bg-top bg-auto bg-no-repeat'>
              
              <h1 className='font-sfb font-semibold text-6xl mt-14'>iPhone 13 Pro</h1>
              <h3 className='font-sf font-medium text-2xl mt-2'>Agora verde-alpino.</h3>
              <p className='font-sf mt-2 text-lg text-gray-400'>Verde-alpino disponível a partir de 08/04.</p>
              <div id='more-information' className='mt-2'>
                  <a className='font-sf text-xl text-blue-600 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                  <a className='font-sf ml-8 text-xl text-blue-600 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Comprar</a>
              </div>
          </div>

          <div id='sub-content' className='flex flex-col items-center h-screen bg-iphonese bg-top bg-auto bg-no-repeat'>
              <span className='font-sfb text-xl text-bold'>Novo</span>
              <figure>
                  <Image src={'https://www.apple.com/v/home/am/images/logos/iphone-se/logo_hero_iphonese__dtb7zrygggeq_large.png'} alt='iPhone SE' width={221} height={55}/>
              </figure>
              <h3 className='font-sf font-medium text-2xl mt-2'>Tão poderoso. Tão ao seu alcance.</h3>
              <p className='font-sf mt-2 text-lg text-gray-400'>Disponível a partir de 08/04.</p>
              <div id='more-information-se' className='mt-2'>
                  <a className='font-sf text-xl text-blue-600 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                  <a className='font-sf ml-8 text-xl text-blue-600 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Comprar</a>
              </div>
          </div>

          <div id='ipad-content' className='flex flex-col justify-center h-screen bg-ipadair bg-no-repeat bg-center bg-auto'>
                <div className='flex flex-col items-center w-1/2'>
                    <figure>
                        <Image src={'https://www.apple.com/v/home/am/images/logos/ipad-air/hero_logo_ipadair__em8hublxa0om_large.png'} alt='iPad Air' width={193} height={53}/>
                    </figure>
                    <h3 className='fsb text-white text-3xl'>Cor e potência no ar.</h3>
                    <p className='fs text-gray-400 text-xl mt-4'>Confira em breve a disponibilidade</p>
                    <div id='more-information-air' className='mt-2'>
                        <a className='font-sf text-xl text-blue-500 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                        <a className='font-sf ml-8 text-xl text-blue-500 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Ver preços</a>
                    </div>
                </div>
          </div>
      </div>
        
  )
}

export default Home
