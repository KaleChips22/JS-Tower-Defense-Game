const Tower = require('./Tower')
const Upgrade = require('./Upgrade')

const upgradeImgSrc = a => `./images/watercaster/upgrades/${a}.png`

class WaterCaster extends Tower {
    cost = 150
    description = 'Uses nearby water to destroy enemies!'
    imageSrc = './images/watercaster/main.png'
    name = 'Water Caster'
    upgrades = [
        [
            new Upgrade(
                'Bubble Expansion',
                'Expands the wizards range',
                0,
                upgradeImgSrc('1-1'),
                tower => tower.range += 1
            ),
            new Upgrade(
                'The Way of Rain',
                'The wizard now casts rain at enemies',
                0,
                upgradeImgSrc('1-2'),
                tower => {
                    tower.projectiles[0] = null
                    tower.projectiles[0].count = 10
                }
            ),
            new Upgrade(
                'Thunderstorm',
                'Adds a thunderbolt for more fierce dammage',
                0,
                upgradeImgSrc('1-3'),
                tower => tower.projectiles.push(null)
            )
        ],
        [
            new Upgrade(
                'Condensed Water',
                'Water attacks condensed to do more dammage',
                0,
                upgradeImgSrc('2-1'),
                tower => tower.projectiles[0].dammage += 1
            ),
            new Upgrade(
                'The Way of Snow',
                'Freezes water attacks into ice for more dammage',
                0,
                upgradeImgSrc('2-2'),
                tower => tower.projectiles[0] = null
            ),
            new Upgrade(
                'Ice-Cold Heart',
                'Slows enemies in range and adds even more dammage',
                0,
                upgradeImgSrc('2-3'),
                tower => tower.rangeEffect = enemy => enemy.speed /= 2
            )
        ]
    ]
}

module.exports = WaterCaster