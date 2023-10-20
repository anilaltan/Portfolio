'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [blur, setBlur] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setBlur(true)
    } else {
      setBlur(false)
    }
  }

  useEffect(() => {
    addEventListener('scroll', changeNavbar)
  })

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
export { Navbar }
