namespace SpriteKind {
    export const scout = SpriteKind.create()
    export const detonator = SpriteKind.create()
}
function explode (mySprite: Sprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `],
    100,
    false
    )
    pause(500)
    sprites.destroy(mySprite, effects.fire, 100)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.detonator, function (sprite, otherSprite) {
    pause(3000)
    sprites.destroy(sprite, effects.fire, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Render.getSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset) < 50) {
        Render.jumpWithHeightAndDuration(mySprite, 50, 2000)
        pause(1000)
        Render.setSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset, 50)
        jetpack_on = true
    } else if (Render.getSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset) >= 50) {
        Render.setSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset, 0)
        jetpack_on = false
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . b b b b b b b b b . . . . 
        . . b b b b b b b b b b b . . . 
        . b b b b b b 2 2 b b b b b . . 
        . b b b b b b 2 2 b b b b b . . 
        . b b b b b b b b b b b b b . . 
        . b b b b 6 b 6 b 6 b b b b . . 
        . b b b b b b b b b b b b b . . 
        . b b b b 6 b 6 b 6 b b b b . . 
        . b b b b b b b b b b b b b . . 
        . . b b b b b b b b b b b . . . 
        . . . b b b b b b b b b . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.detonator)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    pause(2000)
    explode(mySprite2)
    scene.cameraShake(5, 5000)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
let mySprite3: Sprite = null
let image2: Image = null
let crashed = false
let mySprite2: Sprite = null
let jetpack_on = false
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = Render.getRenderSpriteVariable()
Render.moveWithController(2, 3, 0)
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setColor(12, 15)
statusbar.setBarSize(100, 4)
statusbar2.setBarSize(100, 4)
statusbar.positionDirection(CollisionDirection.Top)
statusbar2.positionDirection(CollisionDirection.Bottom)
let image_array = [
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f 6 6 f f f . . . . 
    c c . f f f 6 6 6 6 f f f . . . 
    c . f f f 6 c c c 6 6 f f f . . 
    c . f f 6 c c 6 6 6 c 6 6 f . . 
    c . f 6 6 6 6 c c c c 6 6 f . . 
    c c f 6 6 6 6 6 6 6 6 c c f . . 
    . f f 6 f f f f f f f f c f f . 
    . f 6 6 f f f f f f f f 6 6 f . 
    . . f 6 6 6 6 f f 6 6 6 6 f . . 
    . . . f 6 6 6 f f 6 6 6 f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f 8 8 f f f . . . . 
    c c . f f f 8 8 8 8 f f f . . . 
    c . f f f 8 8 8 8 8 8 f f f . . 
    c . f f 8 8 8 8 8 8 8 8 8 f . . 
    c . f 8 8 8 8 8 8 8 8 8 8 f . . 
    c c f 8 8 8 8 8 8 8 8 8 8 f . . 
    . f f 8 f f f f f f f f 8 f f . 
    . f 8 8 f f f f f f f f 8 8 f . 
    . . f 8 8 8 8 f f 8 8 8 8 f . . 
    . . . f 8 8 8 f f 8 8 8 f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f a a f f f . . . . 
    c c . f f f a a a a f f f . . . 
    c . f f f a c c c a a f f f . . 
    c . f f a c c a a a c a a f . . 
    c . f a a a a c c c c a a f . . 
    c c f a a a a a a a a c c f . . 
    . f f a f f f f f f f f c f f . 
    . f a a f f f f f f f f a a f . 
    . . f a a a a f f a a a a f . . 
    . . . f a a a f f a a a f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f 7 7 f f f . . . . 
    c c . f f f 7 7 7 7 f f f . . . 
    c . f f f 7 7 7 7 7 7 f f f . . 
    c . f f 7 7 7 7 7 7 7 7 7 f . . 
    c . f 7 7 7 7 7 7 7 7 7 7 f . . 
    c c f 7 7 7 7 7 7 7 7 7 7 f . . 
    . f f 7 f f f f f f f f 7 f f . 
    . f 7 7 f f f f f f f f 7 7 f . 
    . . f 7 7 7 7 f f 7 7 7 7 f . . 
    . . . f 7 7 7 f f 7 7 7 f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f b b f f f . . . . 
    c c . f f f b b b b f f f . . . 
    c . f f f b b b b b b f f f . . 
    c . f f b b b b b b b b b f . . 
    c . f b b b b b b b b b b f . . 
    c c f b b b b b b b b b b f . . 
    . f f b f f f f f f f f b f f . 
    . f b b f f f f f f f f b b f . 
    . . f b b b b f f b b b b f . . 
    . . . f b b b f f b b b f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f 6 6 f f f . . . . 
    c c . f f f 6 6 6 6 f f f . . . 
    c . f f f 6 c c c 6 6 f f f . . 
    c . f f 6 c c 6 6 6 c 6 6 f . . 
    c . f 6 6 6 6 c c c c 6 6 f . . 
    c c f 6 6 6 6 6 6 6 6 c c f . . 
    . f f 6 f f f f f f f f c f f . 
    . f 6 6 f f f f f f f f 6 6 f . 
    . . f 6 6 6 6 f f 6 6 6 6 f . . 
    . . . f 6 6 6 f f 6 6 6 f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f c c c c c c f b b . . 
    . . b b f c c c c c c f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    6 6 . . . . f f f f . . . . . . 
    6 6 . . f f f 8 8 f f f . . . . 
    6 6 . f f f 8 8 8 8 f f f . . . 
    6 . f f f 6 8 8 8 8 8 f f f . . 
    6 . f f 8 8 8 8 8 8 8 8 8 f . . 
    6 . f 8 8 8 8 8 8 8 8 8 8 f . . 
    6 6 f 8 8 8 8 8 8 8 8 8 8 f . . 
    . f f 8 f f f f f f f f 8 f f . 
    . f 8 8 f f f f f f f f 8 8 f . 
    . . f 8 8 8 8 f f 8 8 8 8 f . . 
    . . . f 8 8 8 f f 8 8 8 f . . . 
    . . 8 8 f f f f f f f f 8 8 . . 
    . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
    . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
    . . . 6 6 f f f f f f 6 6 . . . 
    . . 6 6 6 f f 6 6 f f 6 6 6 . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f 8 8 f f f . . . . 
    c c . f f f 8 8 c 8 f f f . . . 
    c . f f f 8 8 8 8 8 8 f f f . . 
    c . f f 8 8 c c c 8 8 8 8 f . . 
    c . f 8 8 c c 8 8 8 c 8 8 f . . 
    c c f 8 8 8 8 8 8 8 c c 8 f . . 
    . f f 8 f f f f f f f f 8 f f . 
    . f 8 8 f f f f f f f f 8 8 f . 
    . . f 8 8 8 8 f f 8 8 8 8 f . . 
    . . . f 8 8 8 f f 8 8 8 f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f b b f f f . . . . 
    c c . f f f b b c b f f f . . . 
    c . f f f b c b c b b f f f . . 
    c . f f b c c b c b c b b f . . 
    c . f b b b b c b b c c b f . . 
    c c f b c c c b b b b c c f . . 
    . f f b f f f f f f f f b f f . 
    . f b b f f f f f f f f b b f . 
    . . f b b b b f f c b b b f . . 
    . . . f b b b f f c c b f . . . 
    . . b b f f f f f f f f b b . . 
    . . b b f b b b b b b f b b . . 
    . . b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `,
img`
    c c . . . . f f f f . . . . . . 
    c c . . f f f b b f f f . . . . 
    c c . f f f b b c b f f f . . . 
    c . f f f b c b c b b f f f . . 
    c . f f b c c b c b c b b f . . 
    c . f b b b b c b b c c b f . . 
    c c f b c c c b b b b c c f . . 
    . f f b f f f f f f f f b f f . 
    . f b b f f f f f f f f b b f . 
    . . f b b b b f f c b b b f . . 
    . 7 . f b b b f f c c b f . . . 
    . 7 7 b f f f f f f f f b b . . 
    . 7 7 b f b b b b b b f b b . . 
    . 7 b b f b b b b b b f b b . . 
    . . . c c f f f f f f c c . . . 
    . . c c c f f c c f f c c c . . 
    `
]
game.onUpdateInterval(500, function () {
    if (jetpack_on == true) {
        if (statusbar.value == 0) {
            crashed = true
        } else {
            statusbar.value += -1
        }
    } else {
        statusbar.value += 1
    }
    if (crashed == true) {
        crashed = false
        statusbar2.value += -5
    } else {
        statusbar2.value += 1
    }
})
game.onUpdateInterval(10000, function () {
    image2 = image_array[randint(0, 9)]
    mySprite3 = sprites.create(image2, SpriteKind.Enemy)
    mySprite3.setVelocity(randint(0, 50), randint(0, 50))
})
