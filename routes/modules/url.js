const express = require('express')
const Url = require('../../models/url')
const router = express.Router()
const getShortHandler = require('../../getShortHandler')

router.post('/', (req, res) => {
    const url = req.body.url.trim()
    let shortArr = []

    Url
    .find()
    .then(item => {
        for (let i = 0; i < item.length; i++) {
            shortArr = shortArr.concat(item[i].short_url)
            }
        return Url.findOne({ url })
    })

    .then(item => {
        if (!item) {
            let short_url = getShortHandler()
            while (shortArr.includes(short_url)) {
                    short_url = getShortHandler()
            }
                 return Url.create({ url, short_url })
                .then(() => {
                        return Url.findOne({ url })
                            .then(item => res.redirect(`/url/${item._id}`))
                            .catch(err => {
                                console.log(err)
                            })
                    })
            }
            res.redirect(`/url/${item._id}`)
    })
        .catch(err => {
            console.log(err)
        })

})

router.get('/:id', (req, res) => {
    const id = req.params.id

    Url.findById(id)
        .lean()
        .then(item => {
            const result_Url = `http://localhost:3000/${item.short_url}`
            res.render('show', { result_Url })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router