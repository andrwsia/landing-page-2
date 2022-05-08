import Image from 'next/image'
import Link from 'next/link'

export default function Supplements() {
    return (
        <section id='supplements' className='supplements'>
            <div className='supplements__container'>
                <div className='supplements__image-container'>
                    <Image src="/supplements2.jpg" alt="pic" layout='fill'/>
                </div>
                <div className='supplements__title-container'>
                    <div className='supplements__title'>
                        <h1>supplements</h1>
                    </div>
                </div>
                <div className='supplements__items-container container'>
                    <div className='supplements__items-row row g-3'>
                        <div className='supplements__items-title col-sm-12'>
                            <h2>Featured</h2>
                            <Link href="/">View More</Link>
                        </div>
                        <div className='supplements__items-col col-6 col-md-3'>
                            <div className='supplements__item'>
                                <div className='supplements__item-img'>
                                    <img src="/on-1.jpg" alt="pic" />
                                </div>
                                <div className='supplements__item-divider'></div>
                                <div className='supplements__item-info'>
                                    <p>Whey Protein</p>
                                    <p>$50.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='supplements__items-col col-6 col-md-3'>
                            <div className='supplements__item'>
                                <div className='supplements__item-img'>
                                    <img src="/on-2.webp" alt="pic" />
                                </div>
                                <div className='supplements__item-divider'></div>
                                <div className='supplements__item-info'>
                                    <p>Pre-Workout</p>
                                    <p>$30.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='supplements__items-col col-6 col-md-3'>
                            <div className='supplements__item'>
                                <div className='supplements__item-img'>
                                    <img src="/on-3.jpg" alt="pic" />
                                </div>
                                <div className='supplements__item-divider'></div>
                                <div className='supplements__item-info'>
                                    <p>Creatine Capsules</p>
                                    <p>$45.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='supplements__items-col col-6 col-md-3'>
                            <div className='supplements__item'>
                                <div className='supplements__item-img'>
                                    <img src="/on-4.jpg" alt="pic" />
                                </div>
                                <div className='supplements__item-divider'></div>
                                <div className='supplements__item-info'>
                                    <p>Casein</p>
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