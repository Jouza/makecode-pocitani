input.onButtonPressed(Button.A, function () {
    jas = 255
    led.setBrightness(jas)
    a = randint(1, 5)
    b = randint(1, 4)
    basic.showNumber(a)
    basic.pause(500)
    basic.showString("+")
    basic.showNumber(b)
    basic.pause(500)
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    jas = 255
    led.setBrightness(jas)
    basic.showNumber(a + b)
})
let b = 0
let a = 0
let jas = 0
basic.showString("AHOJ")
jas = 255
basic.forever(function () {
    basic.pause(1000)
    jas += -25
    if (jas < 50) {
        basic.clearScreen()
    }
})
