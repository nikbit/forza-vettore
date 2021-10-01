input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # . . # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # . . # .
        # # # # #
        `)
    basic.showString("Triangolo rettangolo")
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
