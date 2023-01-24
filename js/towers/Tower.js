export default class Tower {
    constructor() {
        this.cost = 0
        this.upgrades = [[], []]
        this.description = ''
        this.range = 0
        this.projectiles = null
        this.placeOn = ['LAND']
        this.rangeEffect = null
        this.speed = 2
    }

    /**
     * 
     * @param {Object} upgrade - Which upgrade to buy
     * @param {0 | 1} upgrade.path
     * @param {0 | 1 | 2} upgrade.number
     * 
     */
    buyUpgrade(upgrade) {
        this.upgrades[upgrade.path][upgrade.number].apply(this)
    }
}