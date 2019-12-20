const express = require('express');
const router = express.Router();

//Book model
let Book = require('../../models/book.model');

// @route   GET api/book
// @desc    Get all Bookings
// @access  Public
router.get('/', (req, res) => {
  Book.find()
  .sort({ date: -1 })
  .then(bookings => res.json(bookings))
  .catch(err => res.status(400).json({Error: err}))
});

// @route   POST api/book
// @desc    Create a Booking
// @access  Public
router.post('/', (req, res) => {
  const newBook = new Book({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    bookDate: req.body.bookDate,
    bookTime: req.body.bookTime,
    requiredInstruments: req.body.requiredInstruments,
    purposeForBooking: req.body.purposeForBooking
  })
  //save Booking
  newBook.save()
  .then(booking => res.json(booking))
  .catch(err => res.status(400).json({Error: err}));
});

// @route   GET api/book/:id
// @desc    Get Booking by ID
// @access  Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json({Error: err}));
});

module.exports = router;