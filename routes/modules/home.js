const express = require('express')
const Url = require('../../models/url')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:short_url', (req, res) => {

  const short_url = req.params.short_url
  return Url.findOne({ short_url })
    .then(data => res.redirect(`${data.original_url}`))
    //.then(item => res.redirect(`${item.url}`))
    .catch(err => console.log(err))

})
module.exports = router