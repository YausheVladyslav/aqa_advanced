import { Book } from "./Book.js";

export class EBook extends Book {
    _fileFormat

    constructor(bookName, author, publicationYear, fileFormat) {
        super(bookName, author, publicationYear);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFileFormat) {
        this._fileFormat = newFileFormat;
    }

    printBookInfo(book) {
        console.log(
            `Book name: ${this._bookName}\n 
            Author: ${this._author}\n 
            Year of publication: ${this._publicationYear}\n
            File format: ${this._fileFormat}`)
    }

    static getNewEBook(book, fileFormat) {
        return new EBook(book._bookName, book._author, book._publicationYear, fileFormat)
    }
}