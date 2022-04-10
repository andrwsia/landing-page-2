import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero1 from '../components/Hero1/Hero1'
import Program from '../components/Program/Program'
import Gear from '../components/Gear/Gear'
import Supplements from '../components/Supplements/Supplements'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Landing Page Project 2</title>
        <meta name="project" content="Landing Page Project 2" />
      </Head>
      <Hero1 />
      <Program />
      <Gear />
      <Supplements />
    </MainLayout>
  )
}