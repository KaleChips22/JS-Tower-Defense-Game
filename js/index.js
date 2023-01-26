import {
    noFill, fill, noStroke, stroke, rect, image, width, height, font, text
} from './canvasFunctions.js'

import WaterCaster from './towers/WaterCaster.js'
import FireWizard from './towers/FireWizard.js'
import WindMage from './towers/WindMage.js'

let towers = [
    WaterCaster,
    FireWizard,
    WindMage
]

towers.forEach((t, i) => {
    let tower = new (t)();
    fill(0, 0, 0, 1)
    font('20px Arial')
    text(tower.name, 40 + 200 * i, 65)
    image(tower.imageSrc, 40 + 200 * i, 65, 200, 200)
})