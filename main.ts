function scitani (paramA: number, paramB: number) {
    vysledek = randint(paramA, paramB)
    a = randint(paramA - 1, vysledek)
    b = vysledek - a
}
function odcitani (paramA: number, paramB: number) {
    vysledek = randint(paramA, paramB - 2)
    b = randint(1, paramB - vysledek)
    a = vysledek + b
}
input.onButtonPressed(Button.A, function () {
    jas = 255
    led.setBrightness(jas)
    if (0 == randint(0, 1)) {
        prikladTyp = "-"
    } else {
        prikladTyp = "+"
    }
    if ("+" == prikladTyp) {
        scitani(scitaniHodnotaMin, scitaniHodnotaMax)
    } else {
        odcitani(odcitaniHodnotaMin, odcitaniHodnotaMax)
    }
    zobrazPriklad(a, b, prikladTyp)
})
function zobrazPriklad (paramA: number, paramB: number, paramOperator: string) {
    basic.showNumber(a)
    basic.pause(200)
    basic.showString(paramOperator)
    basic.showNumber(b)
    basic.pause(200)
    basic.showString("=")
}
input.onButtonPressed(Button.B, function () {
    jas = 255
    led.setBrightness(jas)
    if ("+" == prikladTyp) {
        basic.showNumber(a + b)
    } else {
        basic.showNumber(a - b)
    }
})
let prikladTyp = ""
let b = 0
let a = 0
let vysledek = 0
let odcitaniHodnotaMax = 0
let odcitaniHodnotaMin = 0
let scitaniHodnotaMax = 0
let scitaniHodnotaMin = 0
let jas = 0
jas = 255
scitaniHodnotaMin = 3
scitaniHodnotaMax = 9
odcitaniHodnotaMin = 2
odcitaniHodnotaMax = 9
basic.forever(function () {
    basic.pause(1000)
    jas += -25
    if (jas < 50) {
        basic.clearScreen()
    }
})
