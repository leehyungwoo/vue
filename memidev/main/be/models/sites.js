const mongoose = require('mongoose')


const siteSchema = new mongoose.Schema({
    title: { type: String, default: '등록 필요' },
    copyright: { type: String, default: '등록 필요함' },
    dark: { type: Boolean, default: false }
})

const Site = mongoose.model('Site', siteSchema)

Site.findOne()
    .then(r => {
        if (!r) {
            return Site.create({ title: '등록 필요함' })
        }
        return Promise.resolve(r)
    })
    .then((r) => {
        if (r) console.log(`${r.title} created`)
    })
    .catch((err) => {
        console.log('site 생성에러')
        console.error(err.message)
    })

module.exports = Site