class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    get circumfrence() {
        return this.diameter * Math.PI
    }

    set circumfrence(newCircumfrence) {
        this.radius = newCircumfrence / Math.PI / 2
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }
}