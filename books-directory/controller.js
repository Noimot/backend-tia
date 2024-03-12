const books = require("./books-directory")

console.log(books, 'books')

exports.getAllBooks = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: books.length,
    data: {
      books,
    },
  })
}

// exports.getTour = (req, res) => {
//   // console.log(req.params)
//   const id = req.params.id * 1

//   const tour = tours.find((el) => el.id === id)

//   // console.log('Tour', tour)

//   if (!tour) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     })
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour,
//     },
//   })
// }

exports.createBook = (req, res) => {
  res.send('Done!')
  const newId = books.slice(-1).id + 1
  const newTour = Object.assign({ id: newId }, req.body)
  books.push(newTour)
}

exports.updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' })
  }

  res.status(200).json({
    status: 'success',
    data: {
      book: '<Updated tour here...>',
    },
  })
}

exports.deleteBook = (req, res) => {
  if (req.params.id * 1 > books.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' })
  }

  res.status(204).json({
    status: 'success',
    data: null,
  })
}
