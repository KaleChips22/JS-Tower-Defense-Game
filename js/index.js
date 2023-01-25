import {
    noFill, fill, noStroke, stroke, rect, image, width, height, font, text
} from './canvasFunctions.js'
import WaterCaster from './towers/WaterCaster.js'

let tower = new WaterCaster()

fill(0, 0, 0, 1)
font('20px Arial')
text(tower.name, 40, 65)
image(tower.imageSrc, 40, 65, 200, 200)
