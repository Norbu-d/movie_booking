'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

// Mock data for movies by category
const movieCategories = [
  {
    title: "Trending Now",
    movies: [
      {
        id: 1,
        title: "The Hangover",
        genre: "Comedy",
        image: "/movie1.jpeg",
        rating: 4.8,
        year: 2024
      },
      {
        id: 2,
        title: "Superbad",
        genre: "Comedy",
        image: "/movie2.jpeg",
        rating: 4.7,
        year: 2024
      },
      {
        id: 3,
        title: "Project X",
        genre: "Comedy, Party",
        image: "/movie3.jpeg",
        rating: 4.9,
        year: 2023
      },
      {
        id: 4,
        title: "21 Jump Street",
        genre: "Action, Comedy",
        image: "/movie1.jpeg",
        rating: 4.6,
        year: 2023
      },
      {
        id: 5,
        title: "Step Brothers",
        genre: "Comedy",
        image: "/movie2.jpeg",
        rating: 4.5,
        year: 2024
      },
      {
        id: 6,
        title: "Old School",
        genre: "Comedy",
        image: "/movie3.jpeg",
        rating: 4.9,
        year: 2023
      },
      {
        id: 7,
        title: "Wedding Crashers",
        genre: "Comedy, Romance",
        image: "/movie1.jpeg",
        rating: 4.7,
        year: 2023
      },
      {
        id: 8,
        title: "Anchorman",
        genre: "Comedy",
        image: "/movie2.jpeg",
        rating: 4.8,
        year: 2024
      }
    ]
  },
  {
    title: "Popular on Drunk Cinema",
    movies: [
      {
        id: 9,
        title: "The Other Guys",
        genre: "Action, Comedy",
        image: "/movie3.jpeg",
        rating: 4.6,
        year: 2024
      },
      {
        id: 10,
        title: "Pineapple Express",
        genre: "Comedy, Action",
        image: "/movie1.jpeg",
        rating: 4.4,
        year: 2023
      },
      {
        id: 11,
        title: "Rush Hour",
        genre: "Action, Comedy",
        image: "/movie2.jpeg",
        rating: 4.8,
        year: 2024
      },
      {
        id: 12,
        title: "Bad Boys",
        genre: "Action, Comedy",
        image: "/movie3.jpeg",
        rating: 4.7,
        year: 2023
      },
      {
        id: 13,
        title: "Deadpool",
        genre: "Action, Comedy",
        image: "/movie1.jpeg",
        rating: 4.6,
        year: 2024
      },
      {
        id: 14,
        title: "Hot Fuzz",
        genre: "Action, Comedy",
        image: "/movie1.jpeg",
        rating: 4.9,
        year: 2023
      },
      {
        id: 15,
        title: "Tropic Thunder",
        genre: "Action, Comedy",
        image: "/movie3.jpeg",
        rating: 4.8,
        year: 2024
      }
    ]
  }
]

export default function HomePage() {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null)
  const carouselRefs = useRef<{[key: string]: HTMLDivElement | null}>({})

  const scrollLeft = (categoryIndex: number) => {
    const ref = carouselRefs.current[`category-${categoryIndex}`]
    if (ref) {
      ref.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = (categoryIndex: number) => {
    const ref = carouselRefs.current[`category-${categoryIndex}`]
    if (ref) {
      ref.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const setCarouselRef = (ref: HTMLDivElement | null, categoryIndex: number) => {
    carouselRefs.current[`category-${categoryIndex}`] = ref
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Reusable Navbar */}
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Welcome to Drunk Cinema
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover amazing comedy hits and party classics. Book your tickets for an unforgettable cinematic experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              <Link href="/movies">
                🎬 Browse All Movies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold">
              <Link href="/new">
                🔥 New & Popular
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Movie Categories with Carousel */}
      <main className="container mx-auto px-6 pb-16">
        {movieCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {category.title}
              </h2>
              <div className="flex space-x-2">
                <Button
                  onClick={() => scrollLeft(categoryIndex)}
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  ←
                </Button>
                <Button
                  onClick={() => scrollRight(categoryIndex)}
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  →
                </Button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              <div
                ref={(ref) => setCarouselRef(ref, categoryIndex)}
                className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="relative group cursor-pointer flex-shrink-0 w-64"
                    onMouseEnter={() => setHoveredMovie(movie.id)}
                    onMouseLeave={() => setHoveredMovie(null)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 transform group-hover:scale-105">
                      <img 
                        src={movie.image} 
                        alt={movie.title}
                        className="w-64 h-80 object-cover group-hover:brightness-50 transition-all duration-300"
                      />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        ⭐ {movie.rating}
                      </div>

                      {/* Hover Overlay */}
                      {hoveredMovie === movie.id && (
                        <div className="absolute inset-0 bg-black/90 p-4 flex flex-col justify-end transition-all duration-300">
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-bold text-white text-lg mb-1">{movie.title}</h3>
                              <p className="text-gray-400 text-sm">{movie.genre}</p>
                            </div>
                            
                            <p className="text-gray-300 text-sm">{movie.year}</p>
                            
                            <div className="flex space-x-2 pt-2">
                              <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3">
                                <Link href={`/play/${movie.id}`}>
                                  ▶ Play
                                </Link>
                              </Button>
                              <Button asChild variant="outline" size="sm" className="border-gray-400 text-white hover:bg-orange-500/10 text-xs px-3">
                                <Link href={`/info/${movie.id}`}>
                                  ℹ Info
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
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="text-center mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Some Laughs?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of movie lovers who book their tickets with Drunk Cinema. 
            The best comedy and party movies await you love it man!
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
            <Link href="/movies">
              🎟️ Book Tickets Now
            </Link>
          </Button>
        </section>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  )
}