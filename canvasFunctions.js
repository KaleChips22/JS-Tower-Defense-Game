const canvas = document.getElementById('game-screen')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

var _stroke = true
var _strokeColor = [0, 0, 0, 1]
var _fill = true
var _fillColor = [255, 255, 255, 1]

const _color = (r = 255, g = 255, b = 255, a = 1) => ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`

const stroke = (r = 0, g = 0, b = 0, a = 1) => {
    _strokeColor = [r, g, b, a]
    _stroke = true
}
const noStroke = () => _stroke = false

const fill = (r = 255, g = 255, b = 255, a = 1) => {
    _fillColor = [r, g, b, a]
    _fill = true
}

const rect = (x, y, w, h) => {
    if (_stroke) {
        _color(..._strokeColor)
        ctx.strokeRect(x, y, w, h)
    }
    if (_fill) {
        _color(..._fillColor)
        ctx.fillRect(x, y, w, h)
    }
}
const noFill = () => _fill = false

const image = (src, x, y, w = null, h = null) => {
    const img = new Image()
    img.addEventListener('load', () => {
        if (!w || !h) {
            ctx.drawImage(img, x, y)
        } else {
            ctx.drawImage(img, x, y, w, h)
        }
    }, false)
    img.src = src
}

const font = fontInfo => {
    ctx.font = fontInfo
}

const text = (text, x, y) => {
    ctx.fillText(text, x, y)
}

const width = canvas.width
const height = canvas.height

module.exports = {
    fill,
    noFill,
    stroke,
    noStroke,
    rect,
    image,
    font,
    text,
    width,
    height
}