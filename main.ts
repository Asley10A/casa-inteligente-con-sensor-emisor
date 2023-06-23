input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(0)
    basic.showString("close")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
    basic.showString("open")
})
radio.setGroup(1)
basic.showString("Controladora")
