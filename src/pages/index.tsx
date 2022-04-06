import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
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

          <div id='end-content' className='flex grid grid-cols-2'>
                <div className='h-screen flex flex-col items-center bg-studiodisplay bg-no-repeat bg-top'>
                    <h3 className='font-sfdb text-4xl mt-8'>Studio Display</h3>
                    <h4 className='font-sf text-lg'>Paixão à primeira vista.</h4>
                    <div id='more-information-studiodisplay' className='mt-2'>
                        <a className='font-sf text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                        <a className='font-sf ml-8 text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Ver preços</a>
                    </div>
                </div>
                <div className='h-screen flex flex-col items-center bg-macstudio bg-no-repeat bg-top'>
                    <h3 className='font-sfdb text-4xl mt-8'>Mac Studio</h3>
                    <h4 className='font-sf text-lg'>Usina Criativa.</h4>
                    <p className='fs text-gray-400 text-lg'>Confira em breve a disponibilidade</p>
                    <div id='more-information-macstudio' className='mt-2'>
                        <a className='font-sf text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                        <a className='font-sf ml-8 text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Ver preços</a>
                    </div>
                </div>
                <div className='h-screen flex flex-col items-center bg-iphone13preorder bg-no-repeat bg-top'>
                    <h3 className='font-sfdb text-4xl mt-8'>iPhone 13</h3>
                    <h4 className='font-sf text-lg'>Agora verde.</h4>
                    <p className='fs text-gray-400 text-lg'>Verde disponível a partir de 08/04.</p>
                    <div id='more-information-iphone13' className='mt-2'>
                        <a className='font-sf text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                        <a className='font-sf ml-8 text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Ver preços</a>
                    </div>
                </div>
                <div className='h-screen flex flex-col items-center bg-watch7 bg-no-repeat bg-top'>
                    <figure className='mt-8'>
                        <Image src={'https://www.apple.com/v/home/am/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png'} alt='Watch Series 7' width={146} height={56}/>
                    </figure>
                    <h4 className='font-sf text-lg'>Nossa maior tela até hoje.</h4>
                    <div id='more-information-studiodisplay' className='mt-2'>
                        <a className='font-sf text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                        <a className='font-sf ml-8 text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Ver preços</a>
                    </div>
                </div>
                <div className='h-screen flex mx-1 flex-col items-center bg-applefitness bg-no-repeat bg-top'>
                    <figure className='mt-8'>
                        <Image src={'https://www.apple.com/v/home/am/images/logos/apple-fitness-plus/logo__dcojfwkzna2q_large.png'} alt='Apple Fitness' width={174} height={33}/>
                    </figure>
                    <h4 className='font-sf text-lg text-semibold'>Treine três meses de graça na <br/> compra de um Apple Watch.</h4>
                    <div id='more-information-studiodisplay' className='mt-2'>
                        <a className='font-sf text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/iphone-13-pro/'>Saiba Mais</a>
                        <a className='font-sf ml-8 text-lg text-blue-500 hover:underline' href='https://www.apple.com/br/shop/buy-iphone/iphone-13-pro'>Ver preços</a>
                    </div>
                </div>
                <div className='h-screen mx-1 flex flex-col grid grid-rows-2 bg-wecrashed bg-no-repeat bg-top'>
                    <div className='mt-14 justify-self-center'>
                        <figure>
                            <Image src={'https://www.apple.com/v/home/am/images/logos/tv-plus/logo_light__cfvl40z2nzau_large.png'} alt='Tv Plus' width={80} height={31}/>
                        </figure>
                    </div>
                    <div className='flex flex-col items-center justify-self-center'>
                        <figure>
                            <Image src={'https://www.apple.com/br/home/promos/tv-plus-wecrashed/images/promo_logo_wecrashed__dxtx3ltplaqa_large.png'} alt='Tv Plus' width={395} height={125}/>
                        </figure>
                        <a href=''><h4 className='font-fs text-lg text-blue-500 mt-4 hover:underline'>Assista Agora</h4></a>
                    </div>

                </div>
          </div>
          <Footer/>
      </div>
        
  )
}

export default Home
