class Projectile {
    constructor() {
        this.imgSrc = './images/projectiles/basic.png'
        this.dammage = 0
        this.type = null
        this.count = 1
        this.speed = 0
    }

    check(enemy) {
        return (true || false)
    }
}

module.exports = Projectile