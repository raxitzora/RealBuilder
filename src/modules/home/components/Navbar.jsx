"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <span className="font-semibold text-lg tracking-tight">
            RealBuilder
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <ModeToggle />

          <SignedOut>
            <SignInButton>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button size="sm">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
