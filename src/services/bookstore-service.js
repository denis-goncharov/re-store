export default class BookstoreService {
  data = [
    {
      id: 1,
      title:
        "My First Learn to Write Workbook: Practice for Kids with Pen Control, Line Tracing, Letters, and More!",
      author: "Crystal Radke",
      price: 4.4,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51-JYq87WWL._AC_SX184_.jpg",
    },
    {
      id: 2,
      title: "The Hero Code: Lessons Learned from Lives Well Lived",
      author: "Admiral William H. McRaven",
      price: 11,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41APkS19ZCL._AC_SX184_.jpg",
    },
    {
      id: 3,
      title: "American Marxism",
      author: "Mark R. Levin",
      price: 16.8,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._AC_SX184_.jpg",
    },
    {
      id: 4,
      title: "Once There Were Wolves",
      author: "Charlotte McConaghy",
      price: 20.69,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41V4TQpXGhL._AC_SX184_.jpg",
    },
    {
      id: 5,
      title: "The Lord of the Rings Illustrated Edition",
      author: "J.R.R. Tolkien",
      price: 45.0,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41vN31PD7SL._AC_SX184_.jpg",
    },
    {
      id: 6,
      title: "The Nature of Middle-earth",
      author: "J.R.R. Tolkien",
      price: 19.7,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51RN-ydxniS._AC_SX184_.jpg",
    },
    {
      id: 7,
      title: "The Keeper of Happy Endings",
      author: "Barbara Davis",
      price: 4.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/81ej-GuREkL._AC_UL160_SR160,160_.jpg",
    },
    {
      id: 8,
      title:
        "Into the Forest: A Holocaust Story of Survival, Triumph, and Love",
      author: "Rebecca Frankel",
      price: 24.49,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41N5cTGAHbL._AC_SX184_.jpg",
    },
    {
      id: 9,
      title: "The Old Farmer's Almanac 2022 Trade Edition",
      author: "Old Farmer’s Almanac",
      price: 8.95,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51tpY0oLw3L._AC_SX184_.jpg",
    },
    {
      id: 10,
      title: "Rock Paper Scissors: A Novel",
      author: "Alice Feeney",
      price: 23.49,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51Ytr9yV0pL._AC_SX184_.jpg",
    },
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000)
    })
  }
}
