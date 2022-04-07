export default function footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row row">
                    <div className="footer__col col-sm-3">
                        <div className="footer__sub-container"> 
                            <p>Support</p>
                            <a href="/" className="footer__link">Support Center</a>        
                            <a href="/" className="footer__link">Contact Us</a>    
                            <a href="/" className="footer__link">Do not sell my information</a>
                        </div>
                    </div>
                    <div className="footer__col col-sm-3">
                        <div className="footer__sub-container"> 
                            <p>About</p>
                            <a href="/" className="footer__link">About Us</a>             
                            <a href="/" className="footer__link">Privacy Policy</a>
                            <a href="/" className="footer__link">Terms of Use</a>
                        </div>
                    </div>
                    <div className="footer__col col-sm-3">
                        <div className="footer__sub-container"> 
                            <p>Social Media</p>
                            <a href="/" className="footer__link"><i class="fa-brands fa-twitter"></i></a>   
                            <a href="/" className="footer__link"><i class="fa-brands fa-facebook-f"></i></a>   
                            <a href="/" className="footer__link"><i class="fa-brands fa-instagram"></i></a>
                        </div> 
                    </div>
                </div>
                <div className="footer__row-2 row">
                    <div className="footer__col-2 col-sm-12">
                        <p>&copy; 2022. Unlimited Gaming. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}