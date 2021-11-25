import Head from 'next/head';
import Footer from '../components/welcome/Footer';
import Hero from '../components/welcome/Hero';
import Testimonials from '../components/welcome/Testimonials';
import LogoCloud from '../components/welcome/LogoCloud';
import CTA from '../components/welcome/CTA';

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta
          name='description'
          content='welcome - spaced repetition learning'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        {/* <Testimonials /> */}
        {/* <LogoCloud /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
