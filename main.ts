input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showString("open")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(0)
    basic.showString("close")
})
radio.setGroup(1)
basic.showString("Controladora")
