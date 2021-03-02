import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Opinion from '../components/Opinion'
import Service from '../components/Service'
import Simplify from '../components/Simplify'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            {/* Header */}
            <Header />
            {/* Service */}
            <Service />
            {/* Opinions of person */}
            <Opinion />
            {/* Simplify */}
            <Simplify />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home
