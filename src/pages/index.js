import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Process from '../components/Process'
import Services from '../components/Services'


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Process />
            <Partners />
            <Contact />
            <Footer />
        </>
    )
}
