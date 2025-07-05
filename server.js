const express = require("express");
const app = express();
const PORT = 1233;

//receiving data from user
app.use(express.json());

const books = [
  { id: "1", title: "Harry Potter", author: "JK Rowling" },
  { id: "2", title: "Percy Jackson", author: "Rick Riordian" },
  { id: "4", title: "The Hunger Games", author: "Suzanne Collins" },
  { id: "5", title: "The Maze Runner", author: "James Dashner" },
  { id: "6", title: "Divergent", author: "Veronica Roth" },
  { id: "7", title: "Artemis Fowl", author: "Eoin Colfer" },
];
//setting home rout
app.get("/", (req, res) => {
  res.json({
    status: "Successful",
    message: "Welcome to my book api",
  });

});


//fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: 'successful',
    message: 'Books fetched successfully',
    data: books
  })

})
//fetching a single book
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const bookFound = books.find((book) => book.id === id);
  if (!bookFound) {
    res.json({
      status: 'failed',
      message: 'Book not found',
      data: bookFound,

    })

  }
  else
    res.json({
      status: 'successful',
      message: 'Book fetched successfully',
      data: bookFound,

    })

})

app.post("/books", (req, res) => {
  const newbook = req.body;
  books.push(newbook)

  res.json({
    status: 'Successful',
    message: 'Book successfully created',
    data: books
  })

})
//start server
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
