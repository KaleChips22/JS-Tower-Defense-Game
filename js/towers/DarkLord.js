import Tower from './Tower.js'
import Upgrade from './Upgrade.js'

const upgradeImgSrc = a => `./images/darklord/upgrades/${a}.png`

class DarkLord extends Tower {
    cost = 150
    description = 'Uses dark magic to defeat enemies.'
    imageSrc = './images/darklord/main.png'
    name = 'Dark Lord'
    upgrades = [
        [
            new Upgrade(

            ),
            new Upgrade(

            ),
            new Upgrade(

            )
        ],
        [
            new Upgrade(

            ),
            new Upgrade(

            ),
            new Upgrade(
                
            )
        ]
    ]
}

export default DarkLord