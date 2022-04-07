import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Landing Page Project</title>
        <meta name="project" content="Landing Page Project 2" />
      </Head>
    </MainLayout>
  )
}