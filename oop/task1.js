import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book = new Book("Java basic", "Peter Parker", 2008)

let booksArray = [
    new Book("JS basic", "Peter Parker", 2000),
    new Book("JS advanced", "Peter Parker", 2003),
    new Book("JS pro", "Peter Parker", 2006)
]

book.printBookInfo()

console.log(Book.getTheOldestBook(booksArray))
console.log(EBook.getNewEBook(book, "PDF"))