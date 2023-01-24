const express = require('express')
const fs = require('fs')

const towers = []

fs.readdir('./towers', (err, files) => {
    files.forEach(file => {
        if (file.endsWith('.js') && file != 'Tower.js' && file != 'Upgrade.js') {
            towers.push(require('./towers/' + file.replace('.js', '')))
        }
    })
    console.log(towers)
})

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(towers.map(i => {
        let tower = new (i)()
        return `<div class="card"><img src="/${tower.imageSrc}" width="300" height="300"><p>${tower.name}</p></div>`
    }).join('\n'))
})

app.get('/images/:id/:image', (req, res) => {
    const imgPath = `/images/${req.params.id}/${req.params.image}`
    res.sendFile(imgPath)
})

app.listen(8080, () => {
    console.log('server running')
})

const randomArr = arr => arr[Math.floor(Math.random() * arr.length)]