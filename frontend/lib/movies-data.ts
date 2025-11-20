export interface Movie {
  id: number
  title: string
  genre: string
  duration: string
  rating: number
  image: string
  description: string
  showtimes: string[]
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Hangover",
    genre: "Comedy",
    duration: "1h 40m",
    rating: 4.8,
    image: "/movie1.jpeg",
    description: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must retrace their steps to find their friend before the wedding.",
    showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"]
  },
  {
    id: 2,
    title: "Superbad",
    genre: "Comedy",
    duration: "1h 53m",
    rating: 4.7,
    image: "/movie2.jpeg",
    description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"]
  },
  {
    id: 3,
    title: "Project X",
    genre: "Comedy, Party",
    duration: "1h 28m",
    rating: 4.9,
    image: "/movie3.jpeg",
    description: "Three high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as the party becomes epic.",
    showtimes: ["10:30 AM", "3:00 PM", "7:30 PM"]
  },
  {
    id: 4,
    title: "21 Jump Street",
    genre: "Action, Comedy",
    duration: "1h 49m",
    rating: 4.6,
    image: "/movie1.jpeg", // Reusing movie1 for now
    description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
    showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"]
  },
  {
    id: 5,
    title: "Step Brothers",
    genre: "Comedy",
    duration: "1h 38m",
    rating: 4.5,
    image: "/movie2.jpeg", // Reusing movie2 for now
    description: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
    showtimes: ["1:00 PM", "4:30 PM", "9:00 PM"]
  },
  {
    id: 6,
    title: "Old School",
    genre: "Comedy",
    duration: "1h 31m",
    rating: 4.9,
    image: "/movie3.jpeg", // Reusing movie3 for now
    description: "Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater.",
    showtimes: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"]
  }
]