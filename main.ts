input.onButtonPressed(Button.A, function () {
    timer = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    seconds = (input.runningTime() - timer) / 1000
    basic.showNumber(seconds)
})
let seconds = 0
let timer = 0
timer = 0
