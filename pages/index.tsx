import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Store from './components/Store'
import CarouselImage from './components/CarouselImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaun Ruma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Free open source Tailwind CSS Store template" />
        <meta name="keywords" content="kamidia, hijab, shopee, online store, gamis, gaunruma" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet" />

      </Head>

      <main className="bg-white text-gray-600 work-sanßs leading-normal text-base tracking-normal">

        <Navbar />
        <CarouselImage />
        <Store />
        <Footer />
      </main>

    </>
  )
}
