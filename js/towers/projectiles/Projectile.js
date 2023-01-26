class Projectile {
    constructor() {
        this.imgSrc = './images/projectiles/basic.png'
        this.dammage = 0
        this.type = null
        this.count = 1
        this.speed = 0
        this.scale = 1
    }

    check(enemy) {
        return (true || false)
    }
}

export default Projectile