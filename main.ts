input.onButtonPressed(Button.A, function () {
    jas = 255
    led.setBrightness(jas)
    vysledek = randint(3, 9)
    a = randint(2, vysledek)
    b = vysledek - a
    basic.showNumber(a)
    basic.pause(300)
    basic.showString("+")
    basic.showNumber(b)
    basic.pause(300)
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    jas = 255
    led.setBrightness(jas)
    basic.showNumber(a + b)
})
let b = 0
let a = 0
let vysledek = 0
let jas = 0
jas = 255
basic.forever(function () {
    basic.pause(1000)
    jas += -25
    if (jas < 50) {
        basic.clearScreen()
    }
})
