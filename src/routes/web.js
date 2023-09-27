const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
 res.send('Hello World!')
})

router.get('/abc', (req, res) => {
 res.send('Hello World! ABC ')
})

router.get('/hoidanit',  (req, res) => {
 //  res.send('<h1>Hello World! ABC </h1> ')
 res.render('sample.ejs')
})

module.exports = router;