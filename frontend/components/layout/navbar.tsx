'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface NavbarProps {
  activePage?: 'home' | 'movies' | 'new' | 'mylist'
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/d85051f4-ab59-4ab5-ba71-37a73b784f97-removebg-preview.png" 
                  alt="Drunk Cinema Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-orange-500">
                Drunk Cinema
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link 
                href="/" 
                className={`transition-colors font-medium ${
                  activePage === 'home' 
                    ? 'text-orange-500' 
                    : 'text-white hover:text-orange-400'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/movies" 
                className={`transition-colors font-medium ${
                  activePage === 'movies' 
                    ? 'text-orange-500' 
                    : 'text-white hover:text-orange-400'
                }`}
              >
                Movies
              </Link>
              <Link 
                href="/new" 
                className={`transition-colors font-medium ${
                  activePage === 'new' 
                    ? 'text-orange-500' 
                    : 'text-white hover:text-orange-400'
                }`}
              >
                New & Popular
              </Link>
              <Link 
                href="/mylist" 
                className={`transition-colors font-medium ${
                  activePage === 'mylist' 
                    ? 'text-orange-500' 
                    : 'text-white hover:text-orange-400'
                }`}
              >
                My List
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-white hover:bg-orange-500/10">
              <Link href="/search">🔍</Link>
            </Button>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/movies">Browse Movies</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}