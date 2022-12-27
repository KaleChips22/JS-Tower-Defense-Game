import Tower from "./Tower.js"
import Upgrade from './Upgrade.js'

const upgradeImgSrc = a => `./images/watercaster/upgrades/${a}.png`

export default class WaterCaster extends Tower {
    cost = 150
    description = 'Uses nearby water to destroy enemies!'
    imageSrc = 'images/watercaster/main.png'
    name = 'watercaster'
    upgrades = [
        [
            new Upgrade(
                'Bubble Expansion',
                'Expands the wizards range',
                150,
                upgradeImgSrc('1-1'),
                tower => tower.range += 1
            ),
            new Upgrade(
                'The Way of Rain',
                'The wizard now casts rain at enemies',
                250,
                upgradeImgSrc('1-2'),
                tower => {
                    tower.projectile = null
                    tower.projectileCount = 10
                }
            )
        ],
        []
    ]
}