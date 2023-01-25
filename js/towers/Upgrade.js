class Upgrade {
    /**
     * 
     * @param {String} name Name of the upgrade
     * @param {String} description Description of the upgrade
     * @param {Number} price Cost of the upgrade
     * @param {Function} modifierFunc Function to call on tower when upgrade is bought
     * @param {String} imageSrc source of the image to use for upgrade
     */
    constructor(name, description, price, imageSrc, modifierFunc) {
        this.name = name
        this.description = description
        this.price = price
        this.modifierFunc = modifierFunc
        this.imageSrc = imageSrc
        this.isBought = false

        return this
    }

    apply(tower) {
        this.isBought = true
        this.modifierFunc(tower)
    }
}

export default Upgrade