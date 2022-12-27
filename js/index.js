import { noFill, fill, noStroke, stroke, rect, image, width, height } from './canvasFunctions.js'
import Tower from './towers/Tower.js'
import WaterCaster from './towers/WaterCaster.js'

let tower = new WaterCaster()
console.log(tower)
tower.buyUpgrade({ path: 0, number: 0 })
console.log(tower)