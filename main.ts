radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(171)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
if (input.buttonIsPressed(Button.A)) {
    basic.clearScreen()
    radio.sendString("hello")
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
} else {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            radio.sendString("bye")
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
        }
    }
}
