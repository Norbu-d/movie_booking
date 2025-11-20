'use client'

import { useState } from 'react'
import { movies } from '@/lib/movies-data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function MoviesPage() {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Reusable Navbar */}
      <Navbar activePage="movies" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Movies
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover and book tickets for the latest comedy hits and party classics
          </p>
        </div>
      </section>

      {/* Movies Grid */}
      <main className="container mx-auto px-6 pb-16">
        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 transform group-hover:scale-105 group-hover:z-10">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-72 object-cover group-hover:brightness-50 transition-all duration-300"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  ⭐ {movie.rating}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {movie.duration}
                </div>

                {/* Hover Overlay */}
                {hoveredMovie === movie.id && (
                  <div className="absolute inset-0 bg-black/90 p-4 flex flex-col justify-end transition-all duration-300">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">{movie.title}</h3>
                        <p className="text-gray-400 text-sm">{movie.genre}</p>
                      </div>
                      
                      <p className="text-gray-300 text-sm line-clamp-2">{movie.description}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-white">Showtimes:</p>
                        <div className="flex flex-wrap gap-1">
                          {movie.showtimes.map((time, index) => (
                            <span key={index} className="bg-orange-500 text-white px-2 py-1 rounded text-xs">
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <Button asChild className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm">
                          <Link href={`/booking/${movie.id}`}>
                            Book Tickets
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-gray-400 text-white hover:bg-orange-500/10 text-sm px-3">
                          <Link href={`/movie/${movie.id}`}>
                            ℹ
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
                
                {/* Movie Info (Visible when not hovered) */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-semibold text-white text-sm mb-1">{movie.title}</h3>
                  <p className="text-gray-400 text-xs">{movie.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3">
            Load More Movies
          </Button>
        </div>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  )
}