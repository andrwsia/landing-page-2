import Link from 'next/link'

export default function header() {
    return (
        <header className="header">
            {/* MOBILE START*/}
            <ul className="header__mobile-menu-bar">     
                <i className="fa-solid fa-bars"></i>
                <li>
                    <ul className="mobile-menu-bar__sub">
                        <li className="header__collections-link">
                            <a href="/">Home</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Program</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Gear</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Supplements</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Sign In</a>
                        </li>
                        <li className="header__collections-link">
                            <a href="/">Cart</a>
                        </li>
                    </ul>
                </li>
            </ul>
            {/* MOBILE END */}
            <ul className='header__logo-nav'>
                <li className="header__logo"><Link href="/">CO</Link></li>
            </ul>
            <ul className="header__collections-nav_2">
                <li className="header__collections-link">
                    <Link href="/">Sign In</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Cart</Link>
                </li>
            </ul>
            <ul className="header__collections-nav_1">
                <li className="header__collections-link">
                    <Link href="/">Home</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Program</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Gear</Link>
                </li>
                <li className="header__collections-link">
                    <Link href="/">Supplements</Link>
                </li>
            </ul> 
        </header>
    )
}

//*--Script START--*//



  //*--Script END--*//
