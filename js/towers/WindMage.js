import Tower from './Tower.js'
import Upgrade from './Upgrade.js'

const upgradeImgSrc = a => `./images/windmage/upgrades/${a}.png`

class WindMage extends Tower {
    cost = 150
    description = 'Uses powerfull wind blast to shred enemies!'
    imageSrc = './images/windmage/main.png'
    name = 'Wind Mage'
    upgrades = [
        [
            new Upgrade(
                'Breeze',
                'Just a breeze...\n...that knocks back enemies!',
                0,
                upgradeImgSrc('1-1'),
                tower => {
                    tower.projectiles.push(null)
                    tower.projectiles[1].impactEffect = enemy => {
                        enemy.trackDist -= 0.15
                    }
                }
            ),
            new Upgrade(
                'Gust',
                'Even More Powerfull gusts of air!',
                0,
                upgradeImgSrc('1-2'),
                tower => {
                    tower.range++
                    tower.projectiles[1].impactEffect = enemy => {
                        enemy.trackDist -= 0.25
                    }
                }
            ),
            new Upgrade(
                'The Holy Gale',
                'Wind? Wind!',
                0,
                upgradeImgSrc('1-3'),
                tower => {
                    tower.projectiles[1].impactEffect = enemy => {
                        enemy.trackDist -= 0.35
                    }
                    tower.projectiles.forEach(p => p.dammage++)
                    tower.range++
                }
            )
        ],
        [
            new Upgrade(
                'Twister',
                'New Twister will come and destroy enemies!',
                0,
                upgradeImgSrc('2-1'),
                tower => tower.projectiles.push(null)
            ),
            new Upgrade(
                'Tornado',
                'Even stronger and larger twisters',
                0,
                upgradeImgSrc('2-2'),
                tower => {
                    tower.projectiles.forEach(p => p.dammage++)
                    tower.projectiles[1].scale = 1.3
                }
            ),
            new Upgrade(
                'Blown Away',
                'Bye-bye enemies.',
                0,
                upgradeImgSrc('2-3'),
                tower => {
                    tower.range += 2
                    tower.projectiles.forEach(p => p.dammage++)
                    tower.speed++
                }
            )
        ]
    ]
}

export default WindMage