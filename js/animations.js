const createAnimations = (game)=> {
    game.anims.create({
        key:'mario-walk',
        frames: game.anims.generateFrameNumbers(
            'mario',
            {start:1, end:3}
        ),
        framerate: 12,
        repeat: -1
    }),

    game.anims.create({
        key: 'mario-dead',
        frames: [{key:'mario', frame:4}]
    }),

    game.anims.create({
        key: 'mario-jump',
        frames: [{key:'mario', frame:5}]
    }),

    game.anims.create({
        key: 'mario-idle',
        frames: [{key:'mario', frame:0}]
    })
}