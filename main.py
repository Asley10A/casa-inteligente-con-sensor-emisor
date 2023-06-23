

def on_gesture_logo_up():
    radio.send_number(1)
    basic.show_string("open")
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_screen_up():
    radio.send_number(0)
    basic.show_string("close")
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

radio.set_group(1)
basic.show_string("Controladora")