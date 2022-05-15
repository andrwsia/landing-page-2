import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero1 from '../components/Hero1/Hero1'
import Program from '../components/Program/Program'
import Gear from '../components/Gear/Gear'
import Supplements from '../components/Supplements/Supplements'
import Script from 'next/script'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>AJS Landing Page 2</title>
        <meta name="project" content="Landing Page Project 2" />
      </Head>

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QSF8T3X6EC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QSF8T3X6EC');
        `}
      </Script>

      <Hero1 />
      <Program />
      <Gear />
      <Supplements />
    </MainLayout>
  )
}