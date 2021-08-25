input.onButtonPressed(Button.A, function () {
    num = randint(0, 9)
    basic.showNumber(num + 1)
})
input.onButtonPressed(Button.AB, function () {
    num = randint(0, 3)
    basic.showNumber(num + 1)
})
input.onButtonPressed(Button.B, function () {
    num = randint(0, 5)
    basic.showNumber(num + 1)
})
input.onGesture(Gesture.Shake, function () {
    num = randint(0, 3)
    basic.showNumber(num + 1)
})
let num = 0
num = 0
