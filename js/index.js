import {
    noFill, fill, noStroke, stroke, rect, image, width, height, font, text
} from './canvasFunctions.js'

import FireWizard from './towers/FireWizard.js'
import WaterCaster from './towers/WaterCaster.js'

let towers = [
    WaterCaster,
    FireWizard
]

towers.forEach((t, i) => {
    let tower = new (t)();
    fill(0, 0, 0, 1)
    font('20px Arial')
    text(tower.name, 40 + 200 * i, 65)
    image(tower.imageSrc, 40 + 200 * i, 65, 200, 200)
})