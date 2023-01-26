import Tower from './Tower.js'
import Upgrade from './Upgrade.js'

const upgradeImgSrc = a => `./images/earthsage/upgrades/${a}.png`

class EarthSage extends Tower {
    cost = 150
    description = 'Uses the earth to it\'s advatage to bury enemies'
    imageSrc = './images/earthsage/main.png'
    name = 'Earth Sage'
    upgrades = [
        [
            new Upgrade(
                'Hardening',
                'Hardened dirt into rocks for better attacks',
                0,
                upgradeImgSrc('1-1'),
                tower => tower.projectiles[0] = null
            ),
            new Upgrade(
                'Double Trouble',
                'More rocks = more dammage',
                0,
                upgradeImgSrc('1-2'),
                tower => tower.projectiles[0].count*=2
            ),
            new Upgrade(
                'Earth-Shattering Rage',
                'The earth has been shattered.',
                0,
                upgradeImgSrc('1-3'),
                tower => {
                    tower.projectiles.push(null)
                    tower.projectiles.forEach(p => p.dammage++)
                    tower.range++
                }
            )
        ],
        [
            new Upgrade(
                'Grassy Expansion',
                'Grass grows around the tower, which slws down enemies',
                0,
                upgradeImgSrc('2-1'),
                tower => tower.rangeEffect = enemy => enemy.speed *= 0.8
            ),
            new Upgrade(
                'Healing Flowers',
                'Magical flowers heal you when you kill enemies.',
                0,
                upgradeImgSrc('2-2'),
                tower => tower.rangeEffect = enemy => {
                    enemy.speed *= 0.8
                    enemy.onKill = _ => addHP(0.2)
                }
            ),
            new Upgrade(
                'Mother Nature',
                '"Mother is here, let her fight"',
                0,
                upgradeImgSrc('2-3'),
                tower => {
                    placeTower(location/*nearby*/, new Tree())
                    tower.range++
                    tower.speed++
                }
            )
        ]
    ]
}

class Tree extends Tower {
    cost = 0
    description = 'Tree'
    imageSrc = './images/earthsage/tree/main.png'
    name = 'Tree'
    upgrades = []
}

export {
    EarthSage,
    Tree
}