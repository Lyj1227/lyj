namespace SpriteKind {
    export const subordinate = SpriteKind.create()
    export const hostage = SpriteKind.create()
    export const Potion = SpriteKind.create()
    export const Magnifying = SpriteKind.create()
    export const Map = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.subordinate, function (sprite, otherSprite) {
    woodcutter.startEffect(effects.ashes, 500)
    statusbar2.value += -1
    info.changeLifeBy(-1)
    pause(500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    doSomething(woodcutter, true, 30)
    doSomething(woodcutter, false, 20)
})
function Roles_Set_2 () {
    Magnifying_glass = sprites.create(img`
        f f f f f f f f f . 
        f 1 1 1 1 1 1 f f . 
        f 1 . . . . 1 f f . 
        f 1 . 1 1 . 1 f f . 
        f 1 . . . . 1 f f . 
        f 1 1 1 1 1 1 f f . 
        f f f f f f f f f . 
        . . . . . . . f f . 
        . . . . . . . f f . 
        . . . . . . . f f . 
        `, SpriteKind.Magnifying)
    Magnifying_glass.destroy()
    life_up = sprites.create(img`
        . . . . . . . . . 
        . f f f f f f f . 
        . . . f 5 f . . . 
        . . . f 8 f . . . 
        . f f f f f f f . 
        . f 9 5 4 4 8 f . 
        . f 8 4 5 5 9 f . 
        . f 9 5 4 4 8 f . 
        . f f f f f f f . 
        . . . . . . . . . 
        `, SpriteKind.Potion)
    life_up.z = 0
}
function Player_attack () {
    let lv = 0
    if (lv == 12 && woodcutter.overlapsWith(demon)) {
        boss_HP += -1
        woodcutter.x += -3
        woodcutter.y += 3
    }
    if (statusbar.value == 20 && controller.B.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, woodcutter, 50, 0)
        woodcutter.x += -0.5
        statusbar.value = 0
    }
}
function Mob_Move () {
	
}
function doSomething (woodcutter: Sprite, bool: boolean, num: number) {
    if (bool) {
        range2 = num - woodcutter.y
        direction = Math.sin(-1000)
        // 確認方向
        direction2 = Math.sin(1000)
        for (let index = 0; index < Math.abs(range2); index++) {
            woodcutter.y += direction
            woodcutter.x += direction2
            pause(10)
        }
    }
    if (!(bool)) {
        range2 = num - woodcutter.y
        direction = Math.sin(1000)
        // 確認方向
        direction2 = Math.sin(1000)
        for (let index = 0; index < Math.abs(range2); index++) {
            woodcutter.y += direction
            woodcutter.x += direction2
            pause(10)
        }
    }
    return
}
scene.onHitWall(SpriteKind.subordinate, function (sprite, location) {
    if (sprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . a a . . . 
        . . . . . . . a a a a 9 9 a . . 
        . . . . . . a 9 9 4 4 4 9 a a . 
        . . . . . a 9 9 4 4 4 4 4 4 a . 
        . a a a a 9 9 a a 4 4 4 4 4 4 a 
        . a 3 3 a 9 a 3 3 a 4 4 4 4 4 a 
        . f f 3 a 9 a 3 f f 9 4 4 4 a a 
        . f f 3 a a a 3 f f 9 9 9 9 a a 
        . . a 3 3 3 3 3 a a a 4 4 4 4 a 
        . . a 3 3 3 3 3 a 3 3 a 9 4 4 a 
        . a 3 3 3 3 3 3 a 3 3 a 9 9 a . 
        . a 3 3 a 3 3 3 a 3 3 3 a a . . 
        . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
        . . a a a a 3 a 3 3 3 3 3 3 a . 
        . . . . a a a a a a a a a a . . 
        `)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . a a . . . . . . . . . . . 
            . . a 9 9 a a a a . . . . . . . 
            . a a 9 4 4 4 9 9 a . . . . . . 
            . a 4 4 4 4 4 4 9 9 a . . . . . 
            a 4 4 4 4 4 4 a a 9 9 a a a a . 
            a 4 4 4 4 4 a 3 3 a 9 a 3 3 a . 
            a a 4 4 4 9 f f 3 a 9 a 3 f f . 
            a a 9 9 9 9 f f 3 a a a 3 f f . 
            a 4 4 4 4 a a a 3 3 3 3 3 a . . 
            a 4 4 9 a 3 3 a 3 3 3 3 3 a . . 
            . a 9 9 a 3 3 a 3 3 3 3 3 3 a . 
            . . a a 3 3 3 a 3 3 3 a 3 3 a . 
            . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
            . a 3 3 3 3 3 3 a 3 a a a a . . 
            . . a a a a a a a a a a . . . . 
            `)
        sprite.vx = snails.vx * -1
    } else if (sprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . a a . . . . . . . . . . . 
        . . a 9 9 a a a a . . . . . . . 
        . a a 9 4 4 4 9 9 a . . . . . . 
        . a 4 4 4 4 4 4 9 9 a . . . . . 
        a 4 4 4 4 4 4 a a 9 9 a a a a . 
        a 4 4 4 4 4 a 3 3 a 9 a 3 3 a . 
        a a 4 4 4 9 f f 3 a 9 a 3 f f . 
        a a 9 9 9 9 f f 3 a a a 3 f f . 
        a 4 4 4 4 a a a 3 3 3 3 3 a . . 
        a 4 4 9 a 3 3 a 3 3 3 3 3 a . . 
        . a 9 9 a 3 3 a 3 3 3 3 3 3 a . 
        . . a a 3 3 3 a 3 3 3 a 3 3 a . 
        . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
        . a 3 3 3 3 3 3 a 3 a a a a . . 
        . . a a a a a a a a a a . . . . 
        `)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . a a . . . 
            . . . . . . . a a a a 9 9 a . . 
            . . . . . . a 9 9 4 4 4 9 a a . 
            . . . . . a 9 9 4 4 4 4 4 4 a . 
            . a a a a 9 9 a a 4 4 4 4 4 4 a 
            . a 3 3 a 9 a 3 3 a 4 4 4 4 4 a 
            . f f 3 a 9 a 3 f f 9 4 4 4 a a 
            . f f 3 a a a 3 f f 9 9 9 9 a a 
            . . a 3 3 3 3 3 a a a 4 4 4 4 a 
            . . a 3 3 3 3 3 a 3 3 a 9 4 4 a 
            . a 3 3 3 3 3 3 a 3 3 a 9 9 a . 
            . a 3 3 a 3 3 3 a 3 3 3 a a . . 
            . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
            . . a a a a 3 a 3 3 3 3 3 3 a . 
            . . . . a a a a a a a a a a . . 
            `)
        sprite.vx = snails.vx * -1
    }
})
function Roles_Set_Main () {
    woodcutter = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . f f 5 5 5 5 9 c f . . . . . 
        . f f 5 5 5 5 9 c c c f . . . . 
        . f 5 5 5 9 9 5 5 5 5 f . . . . 
        . f 9 9 9 5 5 c c c c 5 f . 8 8 
        . f 5 c c c f f f f 5 c f 8 9 8 
        f f f f f f f a a a f f 8 9 9 8 
        f f d a a a f 1 d a a 8 9 9 8 . 
        f d d a a d f f d d f 8 9 8 . . 
        . f d d a d d d d f f 8 8 8 . . 
        . . f f d d d d f c f d f . . . 
        . . . f c c c c c c f f . . . . 
        . . . f e 2 e 2 e 2 f . . . . . 
        . . . f 4 4 4 4 4 4 f . . . . . 
        . . . . f f f f f f . . . . . . 
        `, SpriteKind.Player)
    woodcutter.z = 1
    controller.moveSprite(woodcutter)
    scene.cameraFollowSprite(woodcutter)
    levels = [
    tiles.createMap(tiles.createTilemap(hex`1000100004020202020202020204040402020204020701010102070101020202020c0204020102020101010101010201010102020201020c020d02010201010101010102020102010102010102010202020201020202010201010101020102010a020102020e010102010201020202010202010202020201010102010101010102010102020c020202020c02010209010102020202010101010101010102020201010102040202020201020101010b020201020204030404020102010209010102010102030404020101020102020201020201020202020201020101020402010202010202070101010108020204020d0802010602050202020202020403020202020202`, img`
        . 2 2 2 2 2 2 2 2 . . . 2 2 2 . 
        2 . . . . 2 . . . 2 2 2 2 . 2 . 
        2 . 2 2 . . . . . . 2 . . . 2 2 
        2 . 2 . 2 . 2 . 2 . . . . . . 2 
        2 . 2 . . 2 . . 2 . 2 2 2 2 . 2 
        2 2 . 2 . . . . 2 . 2 . . 2 . 2 
        2 . . . 2 . 2 . 2 2 2 . 2 2 . 2 
        2 2 2 . . . 2 . . . . . 2 . . 2 
        2 . 2 2 2 2 . 2 . 2 . . . 2 2 2 
        2 . . . . . . . . 2 2 2 . . . 2 
        . 2 2 2 2 . 2 . . . . 2 2 . 2 2 
        . . . . 2 . 2 . 2 . . . 2 . . 2 
        . . . 2 . . 2 . 2 2 2 . 2 2 . 2 
        2 2 2 2 . 2 . . 2 . 2 . 2 2 . 2 
        2 . . . . . . 2 2 . 2 . . 2 . . 
        2 . 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorLockedEast,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000706070007060705000000000000000702020200020202020000000000000702000000000001010100000000000602000000000000000000000000000702000000070700000000000000000702000006070202070700000000000002000007020201010202070000040000000707020101010101010607000202020202020103010103030102020501010101010101010101020201010102030303030303030303030101030303030201010101010202020201010101010101030101030101010303010103010301`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . 2 2 2 2 
        . . . . . . . 2 . . . . . 2 2 2 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . 2 . . . . 2 2 . . . . . 
        . . . 2 . . . 2 2 . . 2 2 . . . 
        . . . . . . 2 . . . . . 2 . . . 
        2 2 2 2 2 2 . . . . . . . 2 2 . 
        . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tileGrass2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,tiles.util.arrow5], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000a000000000000000000000900000009090000000a090909000000000909090900090909090900000000000000000000000000000000000009000d0000000000000000000000000000090900000000000000000000000000000000000000000000000000000000000000000000000000020a0202000000000b00000c0000000201010803020002020200000202020201030104010b02010401000d010408010b0701010b0106010107020203010103010108030105010305010805010b05010104010107010106010b0104`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . 2 2 . . . . 2 2 2 . . . 
        . 2 2 2 2 . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . 2 2 . . . . . . . 
        . . . . 2 . 2 . . 2 . 2 2 2 . . 
        2 2 2 2 . . . . . . 2 . . 2 . . 
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.builtin.brick,sprites.castle.saplingPine,sprites.castle.rock1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`100010000000060000000000000600000000000000000000000006000000000600000000000006000006000000000000000000000000000000000000000000000000000e00000000000000000000000003070707000000000000000003070707070404040d07070700000000070404040404000007000000000707070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000601010100000000010100000d0000010b0c050a01000000000000000101010206020602050101010000000e050b06090205090b0b080302010101080208020208020206020a0b050b060a02`, img`
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . 2 . . . . 2 . . . . 
        . . 2 . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . 2 2 2 2 2 2 2 
        . 2 2 2 . . . . 2 2 2 2 2 2 . . 
        2 . . . . 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . 2 2 . . 
        . . . 2 . . . . 2 . . . . . . . 
        2 2 2 2 . . . . . 2 2 2 . . . . 
        . . . . . . . . . . . . 2 2 2 . 
        . . . . . . . . . . . . . . . 2 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.castle.shrub,sprites.castle.rock2,sprites.dungeon.darkGroundNorth,sprites.builtin.coral3,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a00000000000000000000000000000a000000000000000000000000000000000c0000000000000000000000000000000700000007000708000000070000000d000707070908090807000700070007070008080900000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000000101000000000001010000000000010103030c000002010303010000020103030b0b0101010103030b0301010103030b03030603030305060503030303050605030604030403040404030403030404040304`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . 2 . 2 2 . . . 2 . . . . 
        . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 2 
        . 2 2 2 . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 2 2 
        . . . . . 2 2 . . . . . 2 2 . . 
        . . . . 2 . . 2 . . . 2 . . . . 
        2 2 2 2 . . . . 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.builtin.oceanDepths8,sprites.builtin.coral2,sprites.builtin.oceanDepths4,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.shrub,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000040000000000000000000004040404040504000000000000000d00000000050500000004000b050404000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00010101000000000101020000000001010307030101000103020301000000070a080303030002090301030a01010d0303060a0308010103030608030703010903030308030a0309030a030a03030703060309030303060308030306030903080303030708030a0307030a03030807`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . 2 2 2 2 2 2 2 . . . . . . . . 
        . . . . 2 2 . . . 2 . 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 . . . . 2 2 2 . . . . 
        2 2 . . . 2 2 . 2 . . . 2 . . . 
        . . . . . . . 2 . . . . . 2 2 . 
        . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.builtin.coral2,sprites.castle.rock0,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.rock1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`100010000000060000000000000600000000000000000000000006000000000600000000000006000006000000000000000000000000000000000000000000000000000e000000000000000000000000030707070d0000000000000003070707070404040707070700000000070404040404000000000000000707070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000601010100000000010100000d0000010b0c050a01000000000000000101010206020602050101010000000e050b06090205090b0b080302010101080208020208020206020a0b050b060a02`, img`
        . . 2 . . . . . . 2 . . . . . . 
        . . . . . . 2 . . . . 2 . . . . 
        . . 2 . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . 2 2 2 2 2 2 2 
        2 2 2 2 . . . . 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . 2 2 . . 
        . . . 2 . . . . 2 . . . . . . . 
        2 2 2 . . . . . . 2 2 2 . . . . 
        . . . . . . . . . . . . 2 2 2 . 
        . . . . . . . . . . . . . . . 2 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.castle.shrub,sprites.castle.rock2,sprites.dungeon.darkGroundNorth,sprites.builtin.coral3,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0b0000000a0009090a00000000000a090900000a0a0000000a0009090909000a00000a0a0000000000000909000a000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000001020802020101000000000b0000010108080508080408020000000101010808040304030806080101000c0106050406080408080408050802010106020705080303030303080406080506`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . 2 2 2 . . . . . 2 2 
        2 . . 2 2 . . . 2 . 2 2 2 2 . 2 
        . . 2 2 . . . . . . 2 2 . 2 . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . . . . 2 2 . . . . 
        . . . 2 2 . . . . . . . 2 . . . 
        2 2 2 . . . . . . . . . 2 2 . . 
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.coral2,sprites.castle.rock1,sprites.castle.rock2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000060600000000000000000000000000000000060000000000000600000000000800000006000600060600060006000606000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000606000000000000060600000000060203050405000000000603030204050105010105010501000803010203050202010102010201050304`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . . 
        . . 2 . . . . . . 2 . . . . . . 
        . . . 2 . 2 . 2 2 . 2 . 2 . 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        2 2 . . . . 2 2 . . 2 2 . . . . 
        . . 2 2 2 2 . . . . . . 2 2 . . 
        . . . . . . . . . . . . . . 2 2 
        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.builtin.coral2,sprites.castle.rock1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000010100000000010000000000000000000000010001010001000000000000000000000000000000000100010000000000000000000000000000000001000000000000000000000000000000000100000000000000000000000000000000010006000000000000000000000000000001010000000000000000000000000000000005000001000000000000000000000000010101010100000000000101000000060403020304010100010103040101010101020103020103010203040302010301`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 . . . . 2 . . . . . . . . . 
        . . 2 . 2 2 . 2 . . . . . . . . 
        . . . . . . . . 2 . 2 . . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . . 2 . . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        2 2 2 . 2 . . . . . 2 2 2 . . . 
        . . . . . 2 2 2 2 2 . . 2 2 2 2 
        . . . . . . . 2 . . . . . . . . 
        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.rock1,sprites.castle.rock2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000100000000000000000000000000000100000000000000000000000101000100000000000101000101010000000100000007000105050106020601010000000008010105020404050205050401000001010504030202040303040305060101060102030605030602060503040205030205`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . 2 . 
        . . . . . . . . . . 2 2 . 2 . . 
        . . . 2 2 . 2 2 2 . . . 2 . . . 
        . . 2 . . 2 . . . 2 2 . . . . . 
        2 2 . . . . . . . . . 2 . . 2 2 
        . . . . . . . . . . . . 2 2 . 2 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.builtin.forestTiles0,sprites.castle.rock2,sprites.castle.rock1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000003030707000000000000000003030703070404040d03030300000003070404040404000007000000000703070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000601010100000000000000000d0000010b0c050a010000000000000e01010102060206020501010100000008050b06090205090b0b080302010101080208020208020206020a0b050b060a02`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . 2 2 2 2 2 2 2 
        . 2 2 2 . . . . 2 2 2 2 2 2 . . 
        2 . . . . 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . 2 . . . . 2 . . . . . . . 
        2 2 2 2 . . . . . 2 2 2 . . . 2 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . . . . 2 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.castle.shrub,sprites.castle.rock2,sprites.dungeon.darkGroundNorth,sprites.builtin.coral3,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000010101000001020301000108000000010203050101040306040102010700010306040603040506030504030201010402030506050403060406030604`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . 2 2 2 . . 2 . . 2 . 2 . 
        . . . 2 . . . 2 2 . . . . 2 . 2 
        . . 2 . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.builtin.coral2,sprites.builtin.oceanDepths4,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000010101000000000000000101000000000000000000000101000100000100000000000001010000000000000000000006050001040401010100000000000001010101020203030404010101000001030404040302020203030304040101040202`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 . . . . . . . 2 2 . . . . 
        . . . . . . 2 2 . 2 . . 2 . . . 
        . . . 2 2 . . . . . . . . . . . 
        . . 2 . . 2 2 2 . . . . . . 2 2 
        2 2 . . . . . . 2 2 2 . . 2 . . 
        . . . . . . . . . . . 2 2 . . . 
        `, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.shrub,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000001010000000000000000000000010101020401000101000000010000060204030404030102040101010401010104030402020403040402030402040304`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 . . . . . . . . . . . 
        2 2 2 . . 2 . 2 2 . . . 2 . . . 
        . . . . . . 2 . . 2 2 2 . 2 2 2 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.saplingPine,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000010100000000000100000000000000010606010100010107090001010101010607070606010808080101040404040404040404050505050503020202020202020202020404030303`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . . . . 2 
        . . . . . . . 2 . . 2 2 . 2 2 . 
        . . 2 2 2 2 2 . . . . . 2 . . . 
        2 2 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.rock2,sprites.builtin.coral2,sprites.builtin.oceanDepths0,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000100000000000000000000000000000003010000010101010000010100000000030401010403040201010404010000060402030302020403030304020401010104030402030204030202020204030402`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        . 2 . . 2 2 2 2 . . 2 2 . . . . 
        . . 2 2 . . . . 2 2 . . 2 . . . 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005040000000000000000000000000000030101010101010101010101010101010102020202020202020202020202020202`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
    ]
    tiles.loadMap(levels[1])
    tiles.placeOnTile(woodcutter, tiles.getTilesByType(sprites.dungeon.collectibleInsignia)[0])
    statusbar = statusbars.create(2, 16, StatusBarKind.Energy)
    statusbar.attachToSprite(woodcutter, 2, 0)
    statusbar.setColor(4, 0)
    statusbar.value = 0
    statusbar.max = 20
    statusbar.positionDirection(CollisionDirection.Left)
    statusbar2 = statusbars.create(16, 2, StatusBarKind.Energy)
    statusbar2.attachToSprite(woodcutter, 2, 0)
    statusbar2.setColor(2, 0)
    statusbar2.value = info.life()
    statusbar2.max = info.life()
    statusbar2.positionDirection(CollisionDirection.Top)
}
function Mob_Set () {
    for (let value2 of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        snails = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . a a . . . 
            . . . . . . . a a a a 9 9 a . . 
            . . . . . . a 9 9 4 4 4 9 a a . 
            . . . . . a 9 9 4 4 4 4 4 4 a . 
            . a a a a 9 9 a a 4 4 4 4 4 4 a 
            . a 3 3 a 9 a 3 3 a 4 4 4 4 4 a 
            . f f 3 a 9 a 3 f f 9 4 4 4 a a 
            . f f 3 a a a 3 f f 9 9 9 9 a a 
            . . a 3 3 3 3 3 a a a 4 4 4 4 a 
            . . a 3 3 3 3 3 a 3 3 a 9 4 4 a 
            . a 3 3 3 3 3 3 a 3 3 a 9 9 a . 
            . a 3 3 a 3 3 3 a 3 3 3 a a . . 
            . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
            . . a a a a 3 a 3 3 3 3 3 3 a . 
            . . . . a a a a a a a a a a . . 
            `, SpriteKind.subordinate)
        snails.z = 0
        tiles.placeOnTile(snails, value2)
        snails.vx = randint(-50, 0)
        if (snails.vx < 0) {
            snails.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . a a . . . 
                . . . . . . . a a a a 9 9 a . . 
                . . . . . . a 9 9 4 4 4 9 a a . 
                . . . . . a 9 9 4 4 4 4 4 4 a . 
                . a a a a 9 9 a a 4 4 4 4 4 4 a 
                . a 3 3 a 9 a 3 3 a 4 4 4 4 4 a 
                . f f 3 a 9 a 3 f f 9 4 4 4 a a 
                . f f 3 a a a 3 f f 9 9 9 9 a a 
                . . a 3 3 3 3 3 a a a 4 4 4 4 a 
                . . a 3 3 3 3 3 a 3 3 a 9 4 4 a 
                . a 3 3 3 3 3 3 a 3 3 a 9 9 a . 
                . a 3 3 a 3 3 3 a 3 3 3 a a . . 
                . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
                . . a a a a 3 a 3 3 3 3 3 3 a . 
                . . . . a a a a a a a a a a . . 
                `)
        } else {
            snails.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . a a . . . . . . . . . . . 
                . . a 9 9 a a a a . . . . . . . 
                . a a 9 4 4 4 9 9 a . . . . . . 
                . a 4 4 4 4 4 4 9 9 a . . . . . 
                a 4 4 4 4 4 4 a a 9 9 a a a a . 
                a 4 4 4 4 4 a 3 3 a 9 a 3 3 a . 
                a a 4 4 4 9 f f 3 a 9 a 3 f f . 
                a a 9 9 9 9 f f 3 a a a 3 f f . 
                a 4 4 4 4 a a a 3 3 3 3 3 a . . 
                a 4 4 9 a 3 3 a 3 3 3 3 3 a . . 
                . a 9 9 a 3 3 a 3 3 3 3 3 3 a . 
                . . a a 3 3 3 a 3 3 3 a 3 3 a . 
                . a 3 3 3 3 3 3 3 3 3 3 3 3 a . 
                . a 3 3 3 3 3 3 a 3 a a a a . . 
                . . a a a a a a a a a a . . . . 
                `)
        }
        tiles.setTileAt(value2, tiles.util.arrow5)
    }
    for (let value of tiles.getTilesByType(tiles.util.arrow5)) {
        energy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 3 3 5 5 . . . . . . . 
            . . 3 3 5 5 3 3 5 5 . . . . . . 
            . . 5 3 3 5 5 5 5 5 5 . . . . . 
            . . 5 5 5 e e e e e 5 . . . . . 
            . . 3 3 5 e f f f e 5 . . . . . 
            . . 3 3 5 e f f f e 5 . . . . . 
            . . 5 3 5 e f f f e 5 . . . . . 
            . . 5 5 5 e e e e e 5 . . . . . 
            . . . 3 3 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        energy.z = -1
        tiles.placeOnTile(energy, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
}
sprites.onDestroyed(SpriteKind.subordinate, function (sprite) {
    if (snails_kill != 10) {
        snails_kill += 1
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . 
            . f f f f f f f . 
            . . . f 5 f . . . 
            . . . f 8 f . . . 
            . f f f f f f f . 
            . f 9 5 4 4 8 f . 
            . f 8 4 5 5 9 f . 
            . f 9 5 4 4 8 f . 
            . f f f f f f f . 
            . . . . . . . . . 
            `, snails, 0, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    woodcutter.say(":)", 100)
    statusbar.value += 1
    energy.destroy()
    tiles.destroySpritesOfKind(SpriteKind.Food)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Potion, function (sprite, otherSprite) {
    if (info.life() < 5) {
        info.changeLifeBy(1)
        statusbar2.value += 1
        life_up.destroy()
    } else {
        life_up.destroy()
    }
})
function Level_cheak (Level_Number: number) {
    if (levels.length == Level_Number) {
    	
    }
    demon = sprites.create(img`
        .......ffffffff.......
        .......f22bbbbf.......
        .....fff22bbbbff......
        .....f22222bbbbf......
        .....fbb2222222fff....
        ....ffb2222222222ff...
        ...f222222222222222f..
        ..f2222f1222f122222f..
        ..f2222ff222ff22222f..
        ..f2222222222222222f..
        ..f2333222222233322f..
        ..f2333222222233322f..
        ..f2222222222222222f..
        ...ff222222222222ff...
        ....ffffffffffffff....
        .....f1f5f15f1f5f.....
        ..ffffffffffffffffff..
        .fbbbbbf1f51f5fcccccf.
        fbbfbbbffffffffccffccf
        fbbfbffcf2222fbfcffccf
        fbbfbffcf2222fbfcffccf
        fbbfbfcccf22fbbfccfccf
        .fbfbffcff22ffbfcffcf.
        ..ffffff222222ffffff..
        ...f.ff22222222f2ff2f.
        .......f22222222222f..
        .......f222222222ff...
        ........ffff22222f....
        ...........ff222f.....
        .............ff2f.....
        ..............ff......
        ...............ff.....
        `, SpriteKind.Enemy)
    demon.destroy()
    demon.z = 2
    princess = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . 3 . . . . . . 
        . . . . . . f 3 9 3 f . . . . . 
        . . . . . f 5 2 2 2 5 f . . . . 
        . . . . f 5 5 5 5 1 5 5 f . . . 
        . . . . f 5 5 5 5 5 1 5 f . . . 
        . . . . f d f d 5 5 5 1 f . . . 
        . . . . f d f d 5 5 5 5 f f . . 
        . . . . f d d 3 d 5 5 5 f 5 f . 
        . . . . . f d d d f f 5 5 f . . 
        . . . . . . f f 9 9 f f 5 5 f . 
        . . . . . f 3 3 3 f d f f 5 f . 
        . . . . . f 3 3 3 f d d f f . . 
        . . . . . . f 9 9 f f f . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.hostage)
    princess.destroy()
    princess.z = 1
}
let princess: Sprite = null
let projectile: Sprite = null
let energy: Sprite = null
let levels: tiles.WorldMap[] = []
let direction2 = 0
let direction = 0
let range2 = 0
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let demon: Sprite = null
let life_up: Sprite = null
let Magnifying_glass: Sprite = null
let statusbar2: StatusBarSprite = null
let woodcutter: Sprite = null
let snails_kill = 0
let skill = 0
let snails : Sprite = null
function mob_direction(dr: any) {
    if (dr) {
        if (snails.isHittingTile(CollisionDirection.Right)) {
            snails.vx = -20
        } else if (snails.isHittingTile(CollisionDirection.Left)) {
            snails.vx = 20
        } else if (snails.isHittingTile(CollisionDirection.Bottom)) {
            snails.vy = -20
        } else if (snails.isHittingTile(CollisionDirection.Top)) {
            snails.vy = 20
        }
        
    } else if (snails.isHittingTile(CollisionDirection.Right)) {
        snails.vx = -20
    } else if (snails.isHittingTile(CollisionDirection.Left)) {
        snails.vx = 20
    }
    
}
info.setScore(0)
info.setLife(5)
let boss_HP = 20
snails_kill = 0
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888
    8888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888
    8888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888111888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888888888111888888888888188888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888881118888888888881888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888
    8888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888881888888888888111888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888
    8888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888
    8888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888ffffffff8888888888888888888fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffff8888888888888888888fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffff888888888fffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff88888888888fffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff888fffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888fffffff8888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888ff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888fffff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888fffffffff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888ffffffffffff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888fffffffffffffff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888ff888888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888ffff88888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888ffffff88888888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888ffffff88888888888888888888888
    8888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888
    8888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888
    8888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffff1fffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888
    8888888888888888888888888888888fffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888
    88888888888888888ffffff88888888fffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888
    888888888888888ffffffffffffff88fffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888
    888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888
    8888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888
    88888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888
    88888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888ffffff888888
    888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff1ffff1ff1ff1fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888ffffff888888
    888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888ffffff888888
    888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888
    888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888
    888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888
    `)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888881888888888888888888888888888888888888888888888888888888188888888888888818888888881888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888188888888888888881888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888188888888
    8888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888
    8888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888fff888888888888888888888888
    88888888888888888888888888888888888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888feff88888888888888888888888
    88888888888888888888888888888888888888888feeeeeeeeef888888888888888888888888888888888888888888888888888888888888888888888888888888fffeeeef8888888888888888888888
    8888888888888888888888888888888888888888ffeeeeeeeeef88888888888888888888888888888888888188ffffffffffffffffffff8888888888888888888ffeeeeeef8888888888888888888888
    888888888888888888888888888888888888888ffeeeeeeeeeeff8888888888888888888888888888888888888f8888f5555555f88888f888888888888888888ffeeeeeeeff888888888888888888888
    88888888888888888888888888888888888888ffeeeeeeeeeeeef8888888888888888888888888888888888888f8888f5555555f88888f88888888888888888ffeeeeeeeeeff88888888888888888888
    8888888888888888888888888888888188888ffeeeeeeeeeeeeeff888888888888888888888888888888888888f8888f5555555f88888f88888888888888888feeeeeeeeeeeff8888888888888888888
    888888888888888888888888888888888888ffeeeeeeeeeeeeeeeff88888888888888888888888888888888888f8888f5555555f88888f8888888888888888ffeeeeeeeeeeeeff888888888888888888
    8888888888888888888888888888888888fffeeeeeeeeeeeeeeeeeff8888888888888888888888888888888888f8888f5555555f88888f8888888888888888feeeeeeeeeeeeeefff8888888888888888
    888888888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeff888888888888888888888888888888888ffffff5555555fffffff888888888888888ffeeeeeeeeeeeeeeeef8888888888888888
    88888888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffff88888888888888f555555555555555555f88888888888888ffeeeeeeeeeeeeeeeeefff88888888888888
    8888888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f555555555555555555f88888888888888feeeeeeeeeeeeeeeeeeeef88888888888888
    888888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f555555555555555555f88888888888888feeeeeeeeeeeeeeeeeeeef88888888888888
    88888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f5555ffffffffff5555f88888888888888ffffffeeeeeeeeeeeeffff88888888888888
    8888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f5555f11f11111f5555f888888888888888888f5ffffffeeefff5f8888888888888888
    888888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f5555f11f11111f5555f888888888888888888f55f555fffff555f8888888888888888
    88888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f5555f11f11111f5555f888888888888888888f55f5555555f555f8888888888888888
    8888888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f5555ffffffffff5555f888888888888888888f55f5fffff5f555f8888888888888888
    88888888888888888888888fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f5555f11f11111f5555f888888888888888888f55f5f111f5f555f8888888888888888
    8888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888ffffffffffffffffffff888888888888888888f55f5f111f5f555f8888888888888888
    888888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555f88888888888888f555555555555555555fffffffffffffffffffffffffffffffffffff88888888888888
    888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555555555555555ffffffffffffffff5555555555555555555f888f555555555f888ff555555555555555f88888888888888
    88888888888888888888ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555555555555555555555f888f555555555f888ff555555555555555f88888888888888
    888888888888888888fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555555555555555555555f888f555555555f888ff555555555555555f88888888888888
    888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555555555555555555555f888f555555555f888ff555555555555555f88888888888888
    888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555555555555555555555ffffffffffffffffffff555555555555555f88888888888888
    888888888888888888fffffffffffffffeeeeeeeeeeeeeeeeefffffff555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888888888888888888fffffffffffffffffff55555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888888888888888888f55555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888888888888888888f55555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    888888888888888888888fff88888888f55555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888888ffeefffffffff55555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    8888888888888888888ffeeeeeeeeeeef55555555555555555555555f555555ffffffffffffff5555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    888888888888888888ffeeeeeeeeeeeef555fffffffffffffffff555f555555f1111f1111111f5555555555555555555555555555555555555555555555555555f555555fffff5555f88888888888888
    8888888888888888fffeeeeeeeeeeeeef555f111111f111111f1f555f555555f1111f1111111f55555555555555fffffffffffffffffffff55555555555555555f555555f111f5555f88888888888888
    888888888888888ffeeeeeeeeeeeeeeef555f111111f111111f1f555f555555f1111f1111111f55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888888888888ffeeeeeeeeeeeeeeeef555f111111f111111f1f555f555555f1111f1111111f55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888888888888feeeeeeeeeeeeeeeeef555f111111f111111f1f555f555555ffffffffffffff55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    8888888888888ffeeeeeeeeeeeeeeeeef555f1111fffffff11f1f555f555555f1111f1111111f55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    888888888888ffeeeeeeeeeeeeeeeeeef555f1111f1f111f11f1f555f555555f1111f1111111f55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888888888ffeeeeeeeeeeeeeeeeeeef555f1111f1f111f11f1f555f555555f1111f1111111f55555555555555fffffffffffffffffffff55555555555555555f555555fffff5555f88888888888888
    8888888888ffeeeeeeeeeeeeeeeeeeeef555f1111fffffff11f1f555f555555f1111f1111111f55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888888fffeeeeeeeeeeeeeeeeeeeeef555f1111f1f111f11f1f555f555555ffffffffffffff55555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888888feeeeeeeeeeeeeeeeeeeeeeef555f1111f1f111f11f1f555f5555555555555555555555555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    8888888ffeeeeeeeeeeeeeeeeeeeeeeef555f1111fffffff11f1f555f5555555555555555555555555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    888888ffeeeeeeeeeeeeeeeeeeeeeeeef555f111111f111111f1f555f5555555555555555555555555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888ffeeeeeeeeeeeeeeeeeeeeeeeeef555f111111f111111f1f555f5555555555555555555555555555555555f1111111111f11111111f55555555555555555f555555f111f5555f88888888888888
    88888feeeeeeeeeeeeefffeeeeeeeeeef555f111111f111111f1f555f5555555555555555555555555555555555fffffffffffffffffffff55555555555555555f555555fffff5555f88888888888888
    88888ffeeeeeeeffffff5fffffffeeeef555f111111f111111f1f555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    888888fffffffff88f555555555ffffff555fffffffffffffffff555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555ff55555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555555555555555555555555555555555555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555555555555555ffffffffffffff5555555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555fffffff55f555555555555555555555555f5555555555555555555555555555555ffeeeeefeeeeeeeeff55555555555555555555555f555555555555555f88888888888888
    88888888888888888f5555f11111f55f555555555555555555555555f55555555555555555555555555555ffeeeeeeefeeeeeeeeeefff55555555555555555555f555555555555555f88888888888888
    88888888888888888f5555f11111f55f555555555555555555555555f555555555555555555555555555fffeeeeeeeefeeeeeeeeeeeeff5555555555555555555f555555555555555f88888888888888
    88888888888888888f5555f11111f55f555555555555555555555555f5555555555555555555555555fffeeeeeeeeeefeeeeeeeeeeeeeff555555555555555555f555555555555555f88888888888888
    88888888888888888f5555f11111f55f555555555555555555555555f55555555555555555555555fffeeeeeeeeeeeefeeeeeeeeeeeeeeef55555555555555555f555555555555555f88888888888888
    88888888888888888f5555fffffff55f555555555555555555555555f5555555555555555555555feeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeff555555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefff5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeee555eeefeee555eeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeee555eeefeee555eeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeee555eeefeee555eeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    88888888888888888f5555555555555f555555555555555555555555f555555555555555555555feeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeef5555555555555f555555555555555f88888888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777772227777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777777722277777dd77777777777777777777777777777777
    d7777777dd77772227dd77777777777777777777777d777777777777772227777777777777777777777777777777777777777777777777777777772227777d77d7777777777777777777277777777777
    7d77777d7d7777222d7d772777dd777272777777777dd77777772777772227777777777777dd77277777222777777777777dd777777777dd7777d72227777d777d777727722277777777777777777277
    77dd777d7d777777d777d77777d7d7777222d727777d7dd7277777d7727777777777777777d7d777777d2227777dd77777d7d77777222d7d777d7dd77777d77777d7777772227d7722277777d77dd777
    7777d22277dd777d7777d7777d77dd77d2227d77777d777d22277d2227777777722777777d77d77777d7222777d77d222d777d722222277d777d77d77777d722277d77777222d7d72227777d7dd77777
    777772227777ddd777777dd7d7777ddd722277d77dd7777d2227d72227777dd77777777722277d777d777d777dd77d222d7777d222222777d7dd77d7777777222777d777777d77d7222777d222777777
    77777222777777777777222dd777777d7777777dd7777777222d77222d77d7d77777777d222777d7d7777dd7d7777722277777d2227777727d77777d7777d72227777d777dd7777d777777d222777777
    777777777777777277772227777777777777777dd22227777777777777ddd77dd777ddd72227777d222777ddd777777d7772777ddd77777777722277dddd7777777777ddd7777777d7777d7222777777
    7777777772227777777722277777277777777777772227777277777777777277dddd7777777777772227777777772227777777777777777777722277777777777722277dd77722277d77d77777777777
    77777777722277777777777777777777777777777722277777777777777777777777777777772777222777777777222777777777772777777772227777772777772227777777222777ddd77777777777
    777777777222777777777777777777777777777777777777777777777777777777777777777777777777777777772227777777777777777777777777777777777722277777772227777d777777777777
    `)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888
    8888888888888888881888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888
    8888188888888888888888888888888888888888888888888888888888888888888888888881118888888888818888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888188888888888888888888888888888888881118888888888888888888888888111888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888111888888888888888888888888888888888888888881888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888881888
    8888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888
    8888888888888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888
    8888888888888888881118888881888888888888888888888888888888888888888888888888888888188888888888888818888888881888888888888888888888888888888888888888888111888888
    8888888888888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888
    8888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888881888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888818888888888888888888818888111888888888888888888888888888888888888888888888888888888888888888888
    8888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888818881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888
    8888888888888888888888888888888888888888881118888888881888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888181118888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888881118888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888
    8888888888888888188888888888888881888888888888888888888888888888818888888888888888888888888888881888888888888888888888888888888888888888888818888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888811188888888888888888888888888888888888888888888888888888811188888888818888888888888888888888888888888888888888888888888888888888888888888888888188888888
    8888888811188888888888888888888888888888888818888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888818888
    8888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888818888888888888888818888888888888188888888888888818888888888888888888ffffff8888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f888888ffffff8888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f888888888888ffff88888888888ffffff88888
    888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f888888888ffff88f8ff8888888ff88888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff888888f888ff888ff8888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8888f888888f8888fff888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f888888f88888888f88ff8ff88888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f88888888888888888f88888f88888888ff8f88888ff888888888888
    88888888888888888888888888888888888888888888888fff8888888888888888888888888888888888888888888888888888888f88888888f888888f88888f8888888ff88f88888888f88fffff8888
    88888888888888888888fff888888888f88888888888888888ff88888888888888888888888888888888888888888888888888888f8888888f888888f8888ff888888ff88888f88888888ff88888ff88
    8888888888888888888f88888888888f8ff88888888888888888f88888888888888888888888888f8888888888888888888ff8888f8888fffff888888888f888888ff8888888f8888888f888888888ff
    88888888888888888ff8888888888ff8888f88888888888888888f88fffffff888888888f88888f8888888888888888888f888888fffff888f888888888f8888888f8f88888ffff888ff888888888888
    8888888888888888f88888888888f8888888f8888888888f888888ff888888888888888ff8888f88888888888888888888f888888888888888f888888ff8888888f88f88fff8888fff88888888f88888
    888888888fff888f8888888888f8888ffffffffff88888fff88888ff88888888888888f888888f88888888888888888888f8888888888888fffffff8888888888f8888f888888888f88888888f888888
    8888888ff888ffffffff888888f88ff8888888888fffffffffff88f8f8888888888888f888888f88888888888888888888f888888888888f888f8888888888f8f88888f8888888fffff888888f888888
    88888ff88888888ffffffff88f88888888888f8888888888888f8f888f888888888888f8888888f888888888888fff8888f888888f8888f88888f8888f8888f88f88888f888ffff8888ffff8f8888888
    8888f88ff8888ff88888888fff88888888888f88888888888888f88888f888888888fffff888888f888888888ff8888888f8888ff8f888f888888f88f88888f88f88888fffffff888888888ff8888888
    888888f88ffff88888888888f88888888888f888888888888888f888888f888fffff8888888ffff8ff88888ff888888888f88ff8888fff88888888ff888888f88f888ff8f8f888ff8888888f88888888
    88888f888888fff888888888f88888fff88f888fff8888888fff88888888f88f888888888ff8888f8ffff8f88888888888f8888888888f88888888f8888888f88f88f888ff888888fff888f88fff8888
    8ff8f8888888888fff888fffffffffff8fffff8888ffffff8ff8ffff888ffff88888888ff888888f888f8fff88888888888f8888888888f88888888f888888f88f8888ff8f888888888ffffff888ff88
    888f88888888888888ffff8888888888fffffffffff88888ff888888fff888ffffff88f8888888f88888f888fff888888888ff8888888fff88888888f88888f88f88ff888f88888888888fff88888888
    8ff88888888888fffff8ffff888888888f88888888fff88f8f8888ff88888f888888fff888888f8888888f8888ffff8888fff888888ff888f88888888f8888f88fff88888f888888888fff88ff888888
    8ff888888fffff888888f888fff88888ff888888ff888ffff88888f888888f8888888f8888fff888888888f8ff8888ffff888f88fff888888ff8888ffffff8fffff888888f8888888ff8f88888888888
    888fff888f888888888f8888888ff8f8f88888ff8888888f8fff888888888f8888888f888f8888888888888f8888888f888888f888888888888f88f888888ff8888fff888f88888ff88f888888888888
    888888fffff8888888f8888888888f8f8888ff888888888f8888ffffff8888f888888f8ff8888888888888f8888888f8888888f8888888888888ff8888888ffff88888ff8f8888f8888f888888888888
    8888888fff88888888f8888888888f8f88888888888888f88fff888888fffff888888ff888888fff8888ff8888888f888888888ffffff8f88888f888888ffff888888888ff8fff8888f8888888888888
    888888888fff88888f888888f888f8ff8888888888888f88f8888888888888f88888f88888fff888888f88888888f888888888ff8888ffffff8f88888fff88f8888888888f8888fffff8888888888f88
    888888888fffff88888888ff888f88f88888888ff8888f88f8888888888888f888ff88888f88888888f88888888f88888888ff8ff88f88f888ff8888f88f88fff88888888f8888888fffff88888ff8ff
    888888fff8f888fff8888f888ffffff888888ff88888f8888888888ffff888f88f888888f8888888fffffff888f88888888ffff888f8888f8ff8ff8f88ffffff888888888f888888f88888ff88f88888
    8888ff8888f888888ff8f8fff8888f888888f8888888f888888ffff8888ffff88888888f888fffff88888ffffff888888fff88888f888888f8888fff8ff888f8ff888888ff888888f88888888f888888
    f888888888f88888888fff888888f88888ff888fff88f8888fff8888888888ffff888ff888888888888888888f888888f88ff888f88888888888f888ff8f888888ff8888ff88888ffff8888ff8888888
    8ff88888888ff888fff8f88888888888ff88fff888ff888ff88888888888888888fff8888888888888888888f888888f88f8f88f8888fff8888f8888f888f8888888ff88fff888888ff888f888888888
    888ff88888ff88ff88888ff88888888f888888ff8888fff888888888f88f8888888f8888888888888888888f888888f88888f88f8fff888fff88888ff8888f88888888fffff88888f8888f8f88888888
    88888ff8ff88f8888888888ff8888ff888888f88888fff888888888f888f888888f88888888fffff888888f888888f88ff88f8fff88888888fff888f888888ff88888888fff8888ff88ff88f8888888f
    888888ff88888f88888888888ff8f888888ff88888f88f88888888f88888f8888f888888fff8888ffffffff888fff88f8888ff888888888ff888ffff88888888f88888888f8f888ffff88888f88888f8
    88888f8888888f8888888888888ff888fff888888f888888888888f88888f888f88888ff8888888f888888ffff8f8f88f8888ff888888ff888888ff8888888888f8888888ffff888ff8888888f888f88
    88888f88888888f88888888888f88ff8888888888f88888888888f8888888f8f888fff88888888f8888fff8888f888ff8888888fff8ff8ff88888ff8888888ff8f88888888ffff88fff8888ffff8f888
    88888f888888888f888f88888f88888ff888888888f888888888f88888888f8f8ff888888888ff88888f88888f888888f888888fffffff888888f88888888f888f88888888ffff88fff88ff888ff8888
    88ffffffff888fff88f88888f88888888f88888888f8ffffff88f888ffffff8f888ff88888fff88888f88888f88888888f8f8ffff88f8ffff888f888f888ff8888f888fffffffff8fffff88888ff8888
    8888f88888fff88ffff88888f888888888ff88888fff88888888ffff888888ff88888f888888ffff8f88888f8888888888fffff8888888888fff888fffff888888ffff88888fffffffff88888f8f8888
    88888888ff88888888f8888fffff88888888f888f888888888ff8888f88888ff88888f888ffff8f8ff8888f8888888888ff88f8888888888888f888f88f888888ff88888888ffffffff88888f888f888
    888888888888888888f88ff88888888888ff8f8f888888888f8888888888888f888888fffff888888888fff888ff888ff8f88f8888888f8888f888f88f88f8888f888888888ffffffff8888f88888ff8
    88888888888888888f8ff88888888888fffff8f888888888f888ffff8888888f888888f8f888888ff888888ff8f88ff888f88ff888888f88ff8888fff88f8888f888888888f8fffffff888f88ff88888
    888888888888ff888ff88888888888ff88888ff888888888f8ff8888888888f88888ffffff888ff888888888ff888f88888f88f888888f88ff8888f888f8fff8f88888888f88fffffff8888ff88f8888
    88888888888f88888f888888f888ff888888ff8ff8888888ff888888888888f8888ff8f88f88f8888888888f8888f888888f8888888fff8ff88ff8f888ff888ffffff888f888fffffffffff888888888
    8888888888f888888f8888f8ffff8888ffff88888f888888f8888888fffffff888f88f888fffff88888888f88888f8888888f888888fff8ffffffff88ff888ff888fffff888ffffffffff88888888888
    8ffff8888f88888888f8fffffff8888f8888888888f8888f88ffffff88f888f88f88f888888888ffff8fffff888f88888888ffffffffffffffff8f88ff888ff8888888fffff888fffff8888888888888
    88888ff8f888888888ff88f8888888f88888888888f888f88f88888888f888f8f88f888888888888fff8888888f888888888888888ffffffff88888ff8888ff888888f88ff888ffffff8888888888888
    8888888ff88888888f888888888888f88888f888888f8f88f88888888f8888f888ff8888ff88ffff888ffff888f8888fff888888888fffffff88f88f8f88ff8888888f8ff8888ffffffff88888888888
    888888888ffff88ff8888888888ff888888f8888f88f8888f88888888f888f888ffff88f8fff888888888f888f8888f8888888888ff8fffffff8ffff88f8fff888888ff8f8ff8ffffff88ff888888ff8
    8888888888ff8f8ff88888888ff8888888f88888f888f88888888888f8888f88fff8f88fff888888f8888ffff8888f8888888fffffff8ffffff8ff8888fff8f88888f8ff88fffffffff8888ff88ff888
    888888888888ffff888ff8f8f888888888f888888f8ff888888fffff88888f8f88888fff8888f8888f88ff88888ff8888888ff888888fffffffff88888fff8ff8888fff888fffffffff8f8888ff88888
    88fff88888888f88ffffff8f888888888f88888888f88f888ff8f8ffff888f888888fff888ff8888ffff888888f888fff88ff88888888ffffffff888888ff8f8888fff8888fffffffffff88ff8888888
    88888ff888888f8ff88f8888888888888f8888888f888f88f8888ff888ffff8888ffff8ff8f88888ff88f8888f8fff8888f8f88888888f8ff88f8888888ffffffffff8888888fffffffff88888888888
    8888888ff88f8f8f88888888888888888f888888f8888fff8888f88f88888f888888f888ff88888fff888888f888888888f8f888888888ffff8ff88888ff8888888ff88888f8ffff8ffff88888888888
    88888ff88fff8fff888888ff888888fff88888888888fff88888f88888888ff8888f88888f88fffff888888f88888888ff88ff88888f88ffff8ff8888f8f8888888f888888ffffff8ffff88888888888
    8888f88888fffff88fff88f888888f888ff8888888f8fff8888f88888888fff888f8888888fffffff88ffff888888888ffff8f8888f8f8ffff8ff888f88f8888f8f8888888ffffff8ffff88888888888
    88ff888fff8f88fff8888ff888888888888f888888f8ffff88f888888888fff88f8888888f8f8ffff8f88ff88888888f888888f88888f8fffff8f888fffff888f8f8888888ffffff8fff888888888888
    888f8ff8888f8ff88888f888ff8888888888f8888ff88fff8f8888888888fff8f88f88888ffffffff8f8888ffff888f8888888f888888ffffff8f8fff8f88fff88f8888888ffffffffff888888888888
    888ffff8888ffff888ff8888f888888f88888f8f8ff8fffff88fffff88ffffff888ff88888ffffffff888888888888f88fffff8f88f88ffffff8f8f8f8f888888f88888888fffffffffff88888888888
    888f8888888fffff88f888ff88888888f88888ff88fffff8fff8888888fffff888888ff88888fffffff8888888888f88888f88ff88f88fffffff88888ff888888f88888888ffffffffff888888888888
    88f8f8888888f8ffff888f8888888888f888888f88fffffff88888888ffffff888888f8ff8ffffff8ff888888888f888888f8888fff88fffffff88f8f8f88888f8888888888fffffffff888888888888
    88f88f8888888ffff8fffff888888888f888888f8ffffff888888888fffffff8888ff8888ffffff88ff8f8888888f888888ffffffff88fffffff8f88f8f88888f888888888888fffffff888888888888
    88f888f8fff888fff8888ff888888888ff88888f8ffff8888888888ffffffff8888888888fffffff88f8f888888f88888888888888f8fff8ffff8fff88f88888f88888888888ffffffff888888888888
    8f88ffff88f8ffff8888888ff888888888ff8888fffff8888888888f8ffffff8888888888ffffffffffff888888888888888888888f8fff8fffff88f88f8888f88888888888f8fffffff888888888888
    888888888ff8ffff888888888ffff8888888ff88fffffff88788888ffffffff88888888888f8fffffffff888888888888888888888f8fffffffff88888f8888f88888888888f8ffffffff88888888888
    8888888ff8ffffff8ff8888888888888888888fffffffff8777888888ffffff88888888fffffffffffff8888888888888888888888f8fffffffff88888f8888888888888888ffffffffff88888888888
    88888ff8888fffffff8888888888888888888888ff7ffff8777888888ffffff88888888ffffffffffffff888888888778888888888ff77fffffff8888888888888888888888ffffffffff88888888888
    8888f8888888fffffff888888888888888888888f7777f7f777788888fffffff88888888fffffffff7f88888888887778888888888f777ffffff8888888888888888888888fffffffffff88888888888
    8888f8888888f8ffff888888888888888888888ff7777777777777888ffffffff888888888fffff7777f8887888887778888888888f777777fff8888888888888888888888fffffffff8888888888888
    88888888888ff8fffff8888888888888888888877777777777777777777ffff8888888888ffffff777777777778877777888778888f7777ffff88888888888888888888888fffffffff8888888888888
    88888888888fffffff88888888888888888878777777777777777777777ffff8888888888fffffff77777777777777777887777887777777ffff8888888888888888888888fffffffff8888888888888
    88888888888ffffff8888888888888888888777777777777777777777777fff88888888888fffff7777777777777777778777777777777777fff8888888888888888888888fffffffffff88888888888
    88888888888ff88fff888888888888888888777777777777777777777777fff8888888888fffffff77777777777777777777777777777777fff88888888888888888888888fffffffffff88888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777772227777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777777722277777dd77777777777777777777777777777777
    d2777777dd777722272d77777777777777777777777d277777777777772227777777772777777777777777777772777772777777777727777777772227777d7727777777777777777777727777777777
    7d77777d2d7777222d7d772777dd777272777777777dd77777772777772227777777777777dd77277777222777777777777dd777777777dd7777d72227777d777d777727722277777777777777777277
    77dd777d7d777777d777d77777d7d7777222d727777d7dd7277777d7727777777777777777d7d777777d2227277dd77777d7d77777222d7d777d7dd77777d77777d7777772227d7722277777d77dd777
    7777d22277dd777d7777d7777d77dd77d2227d77777d777d22277d2227777777722777777d77d77777d7222777d77d222d777d722222277d777d77d72777d722277d77777222d7d72227777d7dd77777
    777772227777ddd777777dd7d7777ddd722277d77dd7777d2227d72227777dd77777777722277d777d777d777dd77d222d7777d222222777d7dd77d7777777222777d777777d77d7222777d222777777
    77777222777777777777222dd777777d7777777dd7777777222d77222d77d7d77777777d222777d7d7777dd7d7777722277777d2227777727d77777d7777d72227777d777dd7777d777777d222777777
    777777777777777277772227777777777777777dd22227777777777777ddd77dd727ddd72227777d222777ddd777777d7772777ddd77777777722277dddd7777777777ddd777777727777d7222777777
    7777777772227777777722277777277777777777772227777277777777777277dddd7777777777772227777777772227777777777777777777722277777777777722277dd77722277d77d77777277777
    77777777722277777277777777777777777777777722277777777777777777777777772777772777222727777777222727777777772777777772227277772777772227777777222777ddd77777777777
    277277777222777777777777777777777777772777777777777777277777777777777777777777777777777777722227777777777777777777777777777777777722272777772227777d777777777777
    `)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888111888888888888888888888888888811188888888888888888888888888888888888888888888888888888881888888888888
    8888188888888888888888888888888888888888888888888888888888111888888888888888888888888888811188888888888888888888888888888888888888888888888888888888888888888188
    8888888888888888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888
    8888888888888888888888888881888888888888888888888888888888888888888888888888888888188888888888888818888888881888888888888881118888888888888888888888888888888888
    8888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888888888888888888888888888
    8888888888818888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888818888888
    8888888888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888818888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888111888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888111888888888888
    8888888888888888888888888888888888888888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888
    8888888888888888188888888888888881888888888888111888888888888888818888888888888888888888888888888888888811188888888888888888888888888888888888888111888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888888888888888811188888888888888888888888888888888888888888888188888888
    8888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888111888888888888888888888
    8888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888111888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888188888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888881118888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777772227777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777777722277777dd77777777777777777777777777777777
    d7777777dd77772227dd77777777777777777777777d777777777777772227777777777777777777777777777777777777777777777777777777772227777d77d7777777777777777777277777777777
    7d77777d7d7777222d7d772777dd777272777777777dd77777772777772227777777777777dd77277777222777777777777dd777777777dd7777d72227777d777d777727722277777777777777777277
    77dd777d7d777777d777d77777d7d7777222d727777d7dd7277777d7727777777777777777d7d777777d2227777dd77777d7d77777222d7d777d7dd77777d77777d7777772227d7722277777d77dd777
    7777d22277dd777d7777d7777d77dd77d2227d77777d777d22277d2227777777722777777d77d77777d7222777d77d222d777d722222277d777d77d77777d722277d77777222d7d72227777d7dd77777
    777772227777ddd777777dd7d7777ddd722277d77dd7777d2227d72227777dd77777777722277d777d777d777dd77d222d7777d222222777d7dd77d7777777222777d777777d77d7222777d222777777
    77777222777777777777222dd777777d7777777dd7777777222d77222d77d7d77777777d222777d7d7777dd7d7777722277777d2227777727d77777d7777d72227777d777dd7777d777777d222777777
    777777777777777277772227777777777777777dd22227777777777777ddd77dd777ddd72227777d222777ddd777777d7772777ddd77777777722277dddd7777777777ddd7777777d7777d7222777777
    7777777772227777777722277777277777777777772227777277777777777277dddd7777777777772227777777772227777777777777777777722277777777777722277dd77722277d77d77777777777
    77777777722277777777777777777777777777777722277777777777777777777777777777772777222777777777222777777777772777777772227777772777772227777777222777ddd77777777777
    777777777222777777777777777777777777777777777777777777777777777777777777777777777777777777772227777777777777777777777777777777777722277777772227777d777777777777
    `)
Roles_Set_Main()
Roles_Set_2()
Mob_Set()
game.onUpdate(function () {
    Player_attack()
    Mob_Move()
    if (boss_HP == 0) {
        demon.destroy()
        demon.say("NO~~~~")
    }
})
