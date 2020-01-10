function hero2 () {
    hero = sprites.create(img`
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
    hero.setPosition(78, 97)
    controller.moveSprite(hero, 100, 0)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    score()
    overlap()
})
function overlap () {
    effects.blizzard.startScreenEffect()
    scene.cameraShake(3, 100)
}
function projectile2 () {
    projectile = sprites.createProjectileFromSide(img`
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
let projectile: Sprite = null
let hero: Sprite = null
hero2()
game.onUpdateInterval(200, function () {
    projectile2()
})
