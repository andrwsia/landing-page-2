import Image from 'next/image'
import Link from 'next/link'

export default function Hero1() {
    return (
        <section id='hero1' className='hero1'>
            <div className='hero1__container'>
                <div className='hero1__image'>
                    <Image src="/pexels-victor-freitas.jpg" alt="pic" layout='fill'/>
                </div>
                <div className='hero1__context-container'>
                    <div className='hero1__title'>
                        <h1>Training starts now</h1>
                    </div>
                    <div className='hero1__info'>
                        <p>We have what you need to succeed</p>
                    </div>
                    <div className='hero1__buttons'>
                        <Link href="/">Programs</Link>
                        <Link href="/">Collections</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}