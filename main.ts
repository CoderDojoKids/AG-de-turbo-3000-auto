radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 9) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (receivedNumber == 7) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 6) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 111)
})
input.onButtonPressed(Button.AB, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 111)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 111)
})
basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(7)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
