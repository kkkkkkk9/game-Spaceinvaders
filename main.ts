input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    砲彈 = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        砲彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (砲彈.isTouching(侵略者)) {
            侵略者gg = 1
            侵略者.delete()
            game.addScore(1)
        }
    }
    砲彈.delete()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let 侵略者: game.LedSprite = null
let 砲彈: game.LedSprite = null
let 侵略者gg = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
侵略者gg = 0
basic.forever(function () {
    侵略者 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        侵略者.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
    if (侵略者gg == 0) {
        game.gameOver()
    } else {
        侵略者gg = 0
    }
    侵略者.delete()
    basic.pause(100)
})
