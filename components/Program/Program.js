import Image from 'next/image'
import Link from 'next/link'

export default function Program() {
    return (
        <section id='program' className='program'>
            <div className='program__container'>
                <div className='program__image-container'>
                    <Image src="/pexels-li-sun.jpg" alt="pic" layout='fill'/>
                </div>
                <div className='program__title-container'>
                    <h1>Program</h1>
                </div>
                <div className='program__info-container container'>
                    <div className='program__info-row row'>
                        <div className='program__info-col1 col-lg-6'>
                            <div className='program__col1-info'> 
                                <h2>What we provide</h2>
                                <p>Poutine food truck la croix pinterest chicharrones venmo wolf tumblr DIY everyday carry pug. Franzen 90's viral locavore woke helvetica thundercats. Disrupt letterpress sartorial meggings synth YOLO hell of health goth glossier iPhone affogato tattooed vape. Skateboard direct trade locavore hexagon, raw denim 3 wolf moon tousled vaporware put a bird on it cray. Fam enamel pin mumblecore chambray taxidermy.</p>
                            </div>
                        </div>
                        <div className='program__info-col2 col-lg-6'>
                            <div className='program__col2-info'> 
                                <p>Body Building</p>
                                <Link href="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                            </div>
                            <div className='program__col2-info'> 
                                <p>Power Lifting</p>
                                <Link href="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                            </div>
                            <div className='program__col2-info'> 
                                <p>Calisthenics</p>
                                <Link href="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                            </div>
                            <div className='program__col2-info'> 
                                <p>Weight Loss</p>
                                <Link href="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='program__box-row row g-3'>   
                        <div className='program__box-col col-5 col-md-4'>
                            <div className='box-img'>
                                <Image src="/anastase-maragos.jpg" alt="pic" layout='fill'> 
                                </Image>
                            </div>
                        </div>
                        <div className='program__box-col col-7 col-md-8'>
                            <div className='box-img'> 
                                <Image src="/russwole-rnm.jpg" alt="pic" layout='fill'> 
                                </Image>
                            </div>
                        </div>
                        <div className='program__box-col col-7 col-md-8'>
                            <div className='box-img'>
                                <Image src="/gym-pic2.jpg" alt="pic" layout='fill'> 
                                </Image>
                            </div>
                        </div> 
                        <div className='program__box-col col-5 col-md-4'>
                            <div className='box-img'>
                                <Image src="/gym-pic.jpg" alt="pic" layout='fill'> 
                                </Image>
                            </div>
                        </div>    
                    </div>
                    <div className='program__pricing-row row g-3'>
                        <div className='program__pricing-title col-sm-12'>
                            <div className='program__title-info'>
                                <h3>Member Pricing plan</h3>
                                <p>We provide pricing plans for new members, you can join the program after selecting the pricing plan option.</p>
                            </div>
                        </div>
                        <div className='program__pricing-col col-md-4'>
                            <div className='program__pricing-info'>
                                <div className='pricing-plan'>
                                    <p>Basic plan <br></br> <span>$15</span></p>
                                </div>
                                    <div className='pricing-divider'></div>
                                <div className='pricing-benefits'>
                                    <p><i className="fa-solid fa-circle-check"></i> 2 hours of practice</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Free consultation to coaches</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Access to the FitClub Community</p>
                                </div>
                                <div className='pricing-link'>
                                    <Link href="/">Join Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className='program__pricing-col col-md-4'>
                            <div className='program__pricing-info'>
                                <div className='pricing-plan'>
                                    <p>Pro plan <br></br> <span>$30</span></p>
                                </div>
                                    <div className='pricing-divider'></div>
                                <div className='pricing-benefits'>
                                    <p><i className="fa-solid fa-circle-check"></i> 5 hours of practice</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Free consultation to coaches</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Access to the FitClub Community</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Access to the minibar</p>
                                </div>
                                <div className='pricing-link'>
                                    <Link href="/">Join Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className='program__pricing-col col-md-4'>
                            <div className='program__pricing-info'>
                                <div className='pricing-plan'>
                                    <p>Premium plan <br></br> <span>$45</span></p>
                                </div>
                                    <div className='pricing-divider'></div>
                                <div className='pricing-benefits'>
                                    <p><i className="fa-solid fa-circle-check"></i> 8 hours of practice</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Free consultation to private coaches</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Access to the FitClub Community</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Access to the minibar</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Free fitness merchandise</p>

                                </div>
                                <div className='pricing-link'>
                                    <Link href="/">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='program__promo-row row'>
                        <div className='program__promo-col col'>
                            <div className='program__promo-info'> 
                                <div className='promo__cta'>
                                    <p>Ready to join this program <br></br> and get 1 free program</p>   
                                </div>
                                <div className='promo__cta-input'>
                                    <input type="email" placeholder='Email Address'></input>
                                    <Link href="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
