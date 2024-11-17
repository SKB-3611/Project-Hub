'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ThemeButton from './ThemeButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About Us" },
    { href: "/#service", label: "Services" },
    { href: "/contact", label: "Contact" },
    {href:"/projects",label:"Projects"}
  ]

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item, index) => (
        <Link
          key={index}
          className={`text-base text-foreground hover:underline underline-offset-4 ${
            mobile ? 'block py-2 m-auto text-lg' : ''
          }`}
          href={item.href}
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  )

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-between">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo.png" alt="ProjectPro Logo" width={50} height={50} className='dark:invert w-10 h-10 lg:w-12 lg:h-12 ' />
        <h1 className="text-foreground lg:text-2xl text-lg ml-2">ProjectHub</h1>
      </Link>
      <nav className="ml-auto items-center font-medium hidden md:flex gap-6">
        <NavLinks />
        <ThemeButton/>
      </nav>
      <div className='space-x-2 flex'>
    <div className='md:hidden'>

    <ThemeButton/>
    </div>
      <Sheet  open={isOpen} onOpenChange={setIsOpen} >
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
   
        <SheetTitle className="sr-only">ProjectHub</SheetTitle>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-2">
            <NavLinks mobile />
          </nav>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  )
}

export default Navbar