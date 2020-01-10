function hero () {
    hero2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 5 . 5 . 5 . 5 . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 8 8 1 8 8 . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d 8 d 8 d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . 8 8 1 1 4 1 1 8 8 . . . . 
. . . 8 8 4 4 4 4 4 8 8 . . . . 
. . . d d 4 4 4 4 4 d d . . . . 
. . . d d 4 4 4 4 4 d d . . . . 
. . 1 9 9 4 4 4 4 4 9 9 1 . . . 
. . . 1 1 8 8 8 8 8 1 1 . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
`, SpriteKind.Player)
    hero2.setPosition(78, 97)
    controller.moveSprite(hero2, 100, 0)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    score()
    overlap()
})
function overlap () {
    game.over(false)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . f . f . f . f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d 2 d b d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . d d 1 1 1 1 1 d d . . . . 
. . . d d 1 1 1 1 1 d d . . . . 
. . 1 a a 1 1 1 1 1 a a 1 . . . 
. . . 1 1 b b b b b 1 1 . . . . 
. . . . . c c c c c . . . . . . 
. . . . . c c c c c . . . . . . 
. . . . . c c c c c . . . . . . 
. . . . . c c c c c . . . . . . 
`, 0, 0)
}
let projectile2: Sprite = null
let hero2: Sprite = null
hero()
game.onUpdateInterval(200, function () {
    projectile()
})
