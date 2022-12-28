import Tower from "./Tower.js";
import Upgrade from "./Upgrade.js";

const upgradeImgSrc = a => `./images/firewizard/upgrades/${a}.png`

export default class FireWizard extends Tower {
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
            )
        ],
        []
    ]
}