
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(data => {
    let book = data.text
    books.forEach(book =>  {
      renderBooks(books)

      });
  });

}


function renderBooks(books) {
  const main = document.querySelector('main');
     const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    
    main.appendChild(h2);
 
}

