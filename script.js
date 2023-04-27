const canvas = document.querySelector(`canvas`)
const C = canvas.getContext(`2 d`)

canvas.width = 1024
canvas.height = 576

C.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor(position) {
        this.position = position
    }

draw() {
    C.fillStyle =`blue`
    C.fillRect(this.position.x, this.position.y, 50, 150)
}
}

const player = new Sprite({
    x: 0,
    y: 0
})

player.draw()

const enemy = new Sprite({
    x: 400,
    y: 100
})

enemy.draw()

console.log(player)
