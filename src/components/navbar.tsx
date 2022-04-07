import { NextComponentType } from 'next'
import Link from 'next/link'


const Navbar: NextComponentType = () => {
  return (
    <nav className='flex sticky top-0 z-50 w-full justify-center items-center h-11 max-h-12 bg-agray'>
        <ul className='flex space-x-8 text-gray-400 font-sf text-fgray text-xs'>
            <li><Link href="/"><a className='p-2 bg-no-repeat bg-center bg-apple-logo'></a></Link></li>
            <li><Link href="/"><a className='p-2 hover:brightness-200'>Loja</a></Link></li>
            <li><a className='p-2'>Mac</a></li>
            <li><a className='p-2'>iPad</a></li>
            <li><Link href="/iphone"><a className='p-2 hover:brightness-200'>iPhone</a></Link></li>
            <li><a className='p-2'>Watch</a></li>
            <li><a className='p-2'>AirPods</a></li>
            <li><a className='p-2'>TV e Casa</a></li>
            <li><a className='p-2'>Só na Apple</a></li>
            <li><a className='p-2'>Acessórios</a></li>
            <li><a className='p-2'>Suporte</a></li>
        </ul>
    </nav>   
  )
}

export default Navbar
