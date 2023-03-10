import Tower from './Tower.js'
import Upgrade from './Upgrade.js'

const upgradeImgSrc = a => `./images/firewizard/upgrades/${a}.png`

class FireWizard extends Tower {
    cost = 150
    description = 'Creates fire that burn enemies to ashes!'
    imageSrc = 'images/firewizard/main.png'
    name = 'Fire Wizard'
    upgrades = [
        [
            new Upgrade(
                'Hotter Flames',
                'Flames are even hotter, dealing more dammage',
                0,
                upgradeImgSrc('1-1'),
                tower => tower.projectiles[0].dammage += 1
            ),
            new Upgrade(
                'Overheat',
                'Attacks are so hot, enemies catch fire on impact!',
                0,
                upgradeImgSrc('1-2'),
                tower => tower.projectiles[0].impactEffect = enemy => enemy.effects.push('burning')
            ),
            new Upgrade(
                'Hellfire',
                'Ultimate burn',
                0,
                upgradeImgSrc('1-3'),
                tower => {
                    tower.range++
                    tower.speed++
                    let p = tower.projectiles[0]
                    p.size *= 2
                    
                }
            )
        ],
        [
            new Upgrade(
                'Exploding Flames',
                'Flames explode on impact',
                0,
                upgradeImgSrc('2-1'),
                tower => tower.projectiles[0].impactEffect = enemy => {
                    enemy.takeDammage(2)
                }
            ),
            new Upgrade(
                'Super Flames',
                'Flames inside of Flames!',
                0,
                upgradeImgSrc('2-2'),
                tower => tower.projectiles[0].impactEffect = enemy => {
                    for (let i = 0; i < 2; i++) {
                        let fire = new Fireball(enemy.pos.x, enemy.pos.y, Math.floor(Math.random() * Math.PI * 2))
                    }
                }
            ),
            new Upgrade(
                'Solar Flare',
                'All shall burn to ashes',
                0,
                upgradeImgSrc('2-3'),
                tower => tower.projectiles[0].impactEffect = enemy => {
                    for (let i = 0; i < 2; i++) {
                        let fire = new Fireball(enemy.pos.x, enemy.pos.y, Math.floor(Math.random() * Math.PI * 2))
                    }
                    enemy.radiusEffect = nearby => {
                        nearby.takeDammage(3)
                    }
                }
            )
        ]
    ]
}

export default FireWizard