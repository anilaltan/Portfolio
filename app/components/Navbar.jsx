'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentRoute = usePathname()
  const [blur, setBlur] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setBlur(true)
    } else {
      setBlur(false)
    }
  }

  addEventListener('scroll', changeNavbar)

  return (
    <header>
      <nav className="navbar">
        <ul className={blur ? 'list blur-nav' : 'list'}>
          <li>
            <Link href="/" className="nav-link active-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="nav-link resume-link"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
