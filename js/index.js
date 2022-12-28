import {
    noFill, fill, noStroke, stroke, rect, image, width, height, font, text
} from './canvasFunctions.js'
import FireWizard from './towers/FireWizard.js'
import WaterCaster from './towers/WaterCaster.js'

let towers = [new WaterCaster(), new FireWizard()]

fill(0, 0, 0, 1)
font('20px Arial')

towers.forEach((tower, index) => {
    text(tower.name, (10 + index * 200), 30)
    image(tower.imageSrc, (15 + index * 200), 35, 200, 200)
})