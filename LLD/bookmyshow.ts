class Movie {
  title: string;
  showtimes: string[];
  availableSeats: number;

  constructor(title: string, showtimes: string[], availableSeats: number) {
    this.title = title;
    this.showtimes = showtimes;
    this.availableSeats = availableSeats;
  }
}

class CinemaHall {
  name: string;
  movies: Movie[];

  constructor(name: string, movies: Movie[]) {
    this.name = name;
    this.movies = movies;
  }
}

class BookingSystem {
  cinemaHalls: CinemaHall[];

  constructor(cinemaHalls: CinemaHall[]) {
    this.cinemaHalls = cinemaHalls;
  }

  findMovie(movieTitle: string): Movie | undefined {
    for (const hall of this.cinemaHalls) {
      for (const movie of hall.movies) {
        if (movie.title === movieTitle) {
          return movie;
        }
      }
    }
    return undefined;
  }

  bookTicket(
    movieTitle: string,
    showtime: string,
    numTickets: number
  ): boolean {
    const movie = this.findMovie(movieTitle);
    if (movie) {
      for (const hall of this.cinemaHalls) {
        for (const m of hall.movies) {
          if (m.title === movieTitle && m.showtimes.includes(showtime)) {
            if (m.availableSeats >= numTickets) {
              m.availableSeats -= numTickets;
              console.log(
                `Booked ${numTickets} ticket(s) for ${movieTitle} at ${showtime}. Enjoy the movie!`
              );
              return true;
            } else {
              console.log('Sorry, not enough available seats.');
              return false;
            }
          }
        }
      }
    } else {
      console.log('Movie not found.');
      return false;
    }
    return false;
  }
}

// Sample usage
const movie1 = new Movie(
  'Avengers: Endgame',
  ['12:00 PM', '3:00 PM', '6:00 PM'],
  100
);
const movie2 = new Movie('The Matrix', ['2:00 PM', '5:00 PM', '8:00 PM'], 80);
const cinemaHall = new CinemaHall('Cinema 1', [movie1, movie2]);
const bookingSystem = new BookingSystem([cinemaHall]);

bookingSystem.bookTicket('Avengers: Endgame', '6:00 PM', 2);
