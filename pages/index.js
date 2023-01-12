import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Erg Mühendislik - Yenileniyoruz!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         Çok Yakında <code>Burada</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
