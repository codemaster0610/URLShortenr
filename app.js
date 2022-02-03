// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// 啟動Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

////抽取 app.js 連線設定
app.use(express.static('public'))

app.use(routes)

// 啟動Express 伺服器
app.listen(port, () => {
  console.log(`success , http:/localhost:${port}`)
})