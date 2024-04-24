sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeCountdownBy(1)
    sprites.destroy(otherSprite, effects.spray, 500)
})
let collectible: Sprite = null
game.splash("HELL")
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(assets.image`Character2`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    collectible = sprites.create(assets.image`food`, SpriteKind.Food)
    collectible.setPosition(randint(0, 160), randint(0, 120))
})
