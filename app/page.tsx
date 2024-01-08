import Image from 'next/image'
import Header from '@/app/ui/components/Header'
import Hero from './ui/components/Hero'
import Main from './ui/components/Main'
import Footer from './ui/components/Footer'
export default function Home() {
  return (
    <>

      <header >
        <Header />
      </header>

      <section className='my-40'>

        <Hero />
      </section>

      <main >

        <Main />
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  )
}
