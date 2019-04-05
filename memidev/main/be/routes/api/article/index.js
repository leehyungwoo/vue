var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const Board = require('../../../models/boards')
const Article = require('../../../models/articles')

router.post('/:_board', (req, res, next) => {
    const _board = req.params._board
    if (!_board) {
        return res.send({ success: false, msg: '보드를 지정해주세요' })
    }
    const { title, contnet } = req.body

    Board.findOne({ _id: _board })
        .then(r => {
            if (!r) { throw new Error('게시판 없음') }
            if (r.lv < req.user.lv) throw new Error('권한이 없음')
            const atc = {
                title,
                content,
                _board,
                ip: req.ip,
                _user: null
            }
            if (req.user._id) atc._user = requ.user._id
            return Article.create(atc)
            // 권한으로 못보게 하려면..
            // if (r.lv < req.lv) return res.send({ success: false, msg: `${name} 게시판을 볼 수 있는 자격이 없습니다.`})
        }).then(r => {
            res.send({ success: true, d: r, token: req.token })
        })
        .catch(e => {
            res.send({ success: false, msg: e.message })
        })
});

router.get('/:_board', (req, res, next) => {
    const _board = req.params._board
    Article.find({ _board }).then(r => {
        res.send({ success: true, d: r, token: req.token })
    })
        .catch(e => {
            res.send({ success: false, msg: e.message })
        })
})



router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없어'));
});

module.exports = router;
