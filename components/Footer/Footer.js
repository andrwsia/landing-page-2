import Image from 'next/image'
import Link from 'next/link'

export default function footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__row row">
                    <div className="footer__company-name col-sm-12">
                        <p>Company Name</p>
                    </div>
                    
                    <div className="footer__content col-sm-12">
                        <div className="footer__top row">
                            <div className="footer__nav col-sm-4">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">Trainers</Link></li>
                                    <li><Link href="/">Programs</Link></li>
                                    <li><Link href="/">Experience</Link></li>
                                    <li><Link href="/">Pricing</Link></li>
                                </ul>
                            </div>
                            <div className="footer__sign-up col-sm-8">
                                <div className='email-title'>
                                    <p>Get the latest update and news</p>
                                </div>
                                <div className='email-input'>
                                    <input type="email" placeholder='Email Address'></input>
                                    <Link href="/"><i class="fa-solid fa-arrow-right-from-bracket"></i></Link>  
                                </div>
                            </div>
                        </div>
                        <div className="footer__bottom row">
                            <div className="footer__info col-sm-4">
                                <ul>
                                    <li><Link href="/">Privacy Policy</Link></li>
                                    <li><Link href="/">Agreement</Link></li>
                                    <li><Link href="/">Terms of Service</Link></li>
                                    <li><Link href="/">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="footer__social col-sm-8">
                                <div className='instagram'>
                                    <Link href="/">Instagram</Link>
                                </div>
                                <div className='twitter'>
                                    <Link href="/">Twitter</Link>
                                </div>
                                <div className='facebook'>
                                    <Link href="/">Facebook</Link>
                                </div>
                                <div className='linkedin'>
                                    <Link href="/">Linkedin</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__footer col-sm-12">
                        <div className="footer__copyright"> 
                            <p>&copy; 2022. Company Name. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}