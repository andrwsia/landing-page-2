import Image from 'next/image'
import Link from 'next/link'

export default function Gear() {
    return (
        <section id='gear' className='gear'>
            <div className='gear__container'>
                <div className='gear__image-container'>
                    <Image src="/gym-gear.png" alt="pic" layout='fill'/>
                </div>
                <div className='gear__title-container'>
                    <h1>Gear</h1>
                </div>
                <div className='gear__items-container container'>
                    <div className='gear__items-row row g-3'>
                        <div className='gear__items-title col-12'>
                            <h2>Featured</h2>
                            <Link href="/">View More</Link>
                        </div>
                        <div className='gear__items-col col-6 col-md-3'>
                            <div className='gear__item'>
                                <div className='gear__item-img'>
                                    <img src="/gym-belt.jpg" alt="pic"/>
                                </div>
                                <div className='gear__item-divider'></div>
                                <div className='gear__item-info'>
                                    <p>Lever Belt</p>
                                    <p>$100.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='gear__items-col col-6 col-md-3'>
                            <div className='gear__item'>
                                <div className='gear__item-img'>
                                    <img src="/gym-strap1.jpg" alt="pic"/>
                                </div>
                                <div className='gear__item-divider'></div>
                                <div className='gear__item-info'>
                                    <p>Wrist Wraps</p>
                                    <p>$20.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='gear__items-col col-6 col-md-3'>
                            <div className='gear__item'>
                                <div className='gear__item-img'>
                                    <img src="/gym-strap2.jpg" alt="pic"/>
                                </div>
                                <div className='gear__item-divider'></div>
                                <div className='gear__item-info'>
                                    <p>Lifting Straps</p>
                                    <p>$15.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='gear__items-col col-6 col-md-3'>
                            <div className='gear__item'>
                                <div className='gear__item-img'>
                                    <img src="/elbow-sleeve.png" alt="pic"/>
                                </div>
                                <div className='gear__item-divider'></div>
                                <div className='gear__item-info'>
                                    <p>Elbow Sleeves</p>
                                    <p>$40.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}