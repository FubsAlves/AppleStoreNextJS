import { NextComponentType } from 'next'

const Footer: NextComponentType = () => {
  return (
    <footer className='flex flex-col items-center h-auto bg-swhite'>
        <p className='mt-4 font-sf text-sm text-footergray'>
            1. R$ 29,90 por mês após o período de teste. Oferta válida por três meses a partir 
            da data de ativação do aparelho qualificado. Uma assinatura por grupo de <br/>Compartilhamento Familiar. 
            A assinatura é renovada automaticamente até que seja cancelada. Aplicam-se outros termos e restrições.
        </p>
        <p className='mt-4 font-sf text-sm text-footergray divide-y divide-yellow-500'>
            O Apple TV+ custa R$ 9,90 por mês após o período de teste gratuito. Uma assinatura por grupo de Compartilhamento Familiar. 
            Oferta válida por três meses a partir da data<br/> de ativação do aparelho qualificado. 
            A assinatura é renovada automaticamente até que seja cancelada. Aplicam-se outros termos e restrições.
        </p>
        <div className='h-auto mt-4 flex grid grid-cols-5 font-fs text-xs text-tfgray border-t border-gray-300'>
            <div>
                    <ul className='mt-4 space-y-2'>
                        <li className='font-bold'>Descobrir e Comprar</li>
                        <li>Loja</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>AirPods</li>
                        <li>TV e Casa</li>
                        <li>iPod Touch</li>
                        <li>AirTag</li>
                        <li>Acessórios</li>
                    </ul>
            </div>
            <div>
                    <ul className='mt-4 space-y-2'> 
                        <li className='font-bold'>Serviços</li>
                        <li>Apple Music</li>
                        <li>Apple TV+</li>
                        <li>Apple Fitness+</li>
                        <li>Apple Arcade</li>
                        <li>iCloud</li>
                        <li>Apple One</li>
                        <li>Apple Pay</li>
                        <li>Livros</li>
                        <li>Apple Podcasts</li>
                        <li>App Store</li>
                    </ul>
                    
                    <ul className='mt-6 space-y-2'>
                        <li className='font-bold mt-4'>Sua Conta</li>
                        <li>Gerenciar seu ID Apple</li>
                        <li>Conta da Apple Store</li>
                        <li>iCloud.com</li>
                    </ul>   
            </div>
            <div>
                    <ul className='mt-4 space-y-2'>
                        <li className='font-bold'>Apple Store</li>
                        <li>Encontre uma loja</li>
                        <li>Genius Bar</li>
                        <li>Today at Apple</li>
                        <li>Apple Camp</li>
                        <li>App Aple Store</li>
                        <li>Financiamento</li>
                        <li>Programa de Reciclagem da Apple</li>
                        <li>Status do seu pedido</li>
                        <li>Ajuda para comprar</li>
                    </ul> 
            </div>
            <div>
                    <ul className='mt-4 space-y-2'>
                        <li className='font-bold'>Para Empresas</li>
                        <li>Apple e os negócios</li>
                        <li>Comprar para a sua empresa</li>
                    </ul>
                    <ul className='mt-6 space-y-2'>
                        <li className='font-bold mt-4'>Para a Educação</li>
                        <li>Apple e a Educação</li>
                        <li>Comprar para Educação Básica</li>
                        <li>Comprar para a faculdade</li>
                    </ul>
                    <ul className='mt-6 space-y-2'>
                        <li className='font-bold mt-4'>Para a Saúde</li>
                        <li>Apple e a Saúde</li>
                        <li>Saúde no Apple Watch</li>
                    </ul>
            </div>
            <div>
                    <ul className='mt-4 space-y-2'>
                        <li className='font-bold'>Valores da Apple</li>
                        <li>Acessibilidade</li>
                        <li>Meio ambiente</li>
                        <li>Privacidade</li>
                        <li>Responsabilidade dos fornecedores</li>
                    </ul>
                    <ul className='mt-6 space-y-2'>
                        <li className='font-bold'>Sobre a Apple</li>
                        <li>Newsroom</li>
                        <li>Liderança da Apple</li>
                        <li>Oportunidades de Carreira</li>
                        <li>Investidores</li>
                        <li>Ética e Compliance</li>
                        <li>Eventos</li>
                        <li>Contato</li>
                    </ul>
            </div>
        </div>
        <p className='mt-6 pb-2 font-sf text-sm text-footergray border-b border-gray-300'>
            Outras formas de comprar: <a href='' className='hover:underline text-blue-600'>encontre uma Apple</a> Store ou <a href='' className='hover:underline text-blue-600'>revendedor Apple</a> na sua região. 
            Ou ligue para 0800-761-0867. Rua Leopoldo Couto de Magalhães Jr., 700, 7º<br/> andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.<br/>
            Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.
        </p>
        <div className='flex flex-col w-[70%] text-footergray'>
            <div className='flex justify-between pt-2 font-sf text-sm'>
            <p>
                Copyright © 2022 Apple Inc. Todos os direitos reservados. 
                Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35
            </p>
            <a href='' className='font-xs hover:underline' >Brasil</a>
            </div>
            <div className='flex py-4 divide-x divide-gray-300 font-sf text-sm text-left'>
                <a href="" className='pr-2'>Política de Privacidade</a>
                <a href="" className='px-2'>Política de vendas</a>
                <a href="" className='px-2'>Avisos legais</a>
                <a href="" className='px-2'>Mapa do site</a>
            </div>
        </div> 
    </footer>
  )
}

export default Footer