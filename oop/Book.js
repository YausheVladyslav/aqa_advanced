export class Book {
    _bookName
    _author
    _publicationYear

    constructor(bookName, author, publicationYear) {
        this._bookName = bookName;
        this._author = author;
        this._publicationYear = publicationYear;
    }

    get bookName() {
        return this._bookName;
    }

    set bookName(newBookName) {
        this._bookName = newBookName;
    }

    get author() {
        return this._author;
    }

    set author(newAuthorName) {
        this._author = newAuthorName;
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(newPublicationYear) {
        this._publicationYear = newPublicationYear;
    }

    printBookInfo() {
        console.log(
            `Book name: ${this._bookName}\n 
            Author: ${this._author}\n 
            Year of publication: ${this._publicationYear}`)
    }

    static getTheOldestBook(booksArray) {
        return booksArray.reduce((oldest, current) => {
            return current._publicationYear > oldest._publicationYear ? oldest : current;

        })
    }
}