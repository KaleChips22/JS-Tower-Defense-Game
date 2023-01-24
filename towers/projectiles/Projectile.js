class Projectile {
    constructor() {
        this.imgSrc = ''
        this.dammage = 0
        this.type = null
        this.count = 1
    }

    check(enemy) {
        return (true || false)
    }
}

module.exports = Projectile