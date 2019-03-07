var express = require('express');
var router = express.Router();
var movies = require('../../movie.json');

router.get('/', function (req, res, next) {
    res.send(movies)
});

router.get('/:id', function (req, res, next) {
    var { id } = req.params;
    var movie = movies.filter(function (movie) {
        return movies[id - 1] === movie
    })

    res.status(200).json(data)
});

module.exports = router;