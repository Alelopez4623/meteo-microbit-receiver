function serial2 (text: string, num: number) {
    serial.writeValue(text, num)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
function temp (num: number) {
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    serial2("temp", num)
}
radio.onReceivedValue(function (name, value) {
    if ("temp" == name) {
        temp(value)
    } else if ("temp2" == name) {
        temp2(value)
    } else if ("pickup" == name) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
})
function temp2 (num: number) {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    serial2("temp2", num)
}
serial.redirectToUSB()
// Establece el mismo grupo en las dos micro:bit
radio.setGroup(67)
