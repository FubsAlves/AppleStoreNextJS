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
          <div className='flex'>
              <ul className='flex'>
                  <li>iPhone 13 Pro</li>
                  <li>iPhone 13</li>
                  <li>iPhone SE</li>
                  <li>iPhone 12</li>
                  <li>iPhone 11</li>
                  <li>Comparar</li>
                  <li>AirPods</li>
                  <li>AirTag</li>
                  <li>Acessórios</li>
                  <li>iOS 15</li>
                  <li>Comparar iPhone</li>
              </ul>
          </div>
          <Footer/>
      </div>
        
  )
}

export default Iphone
