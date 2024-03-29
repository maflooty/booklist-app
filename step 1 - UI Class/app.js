// Book Class
class Book {
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Step1: UI Class
class UI {
    static displayBook() {
        const StoredBook = [
            {
                title: "Book One",
                author: "John Doe",
                isbn: "3434434"
            },
            {
                title: "Book Two",
                author: "Jane Doe",
                isbn: "45545" 
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href ="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
