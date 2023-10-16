let temperature = 0
radio.setGroup(12)
basic.forever(function () {
    temperature = input.temperature()
    radio.sendValue(control.deviceName(), temperature)
    serial.writeValue(control.deviceName(), temperature)
    datalogger.log(datalogger.createCV("t", 0))
    basic.showString("" + (temperature))
    basic.showLeds(`
        # . # # .
        # . . . #
        # . . # .
        # . # . .
        # . # # #
        `)
    basic.pause(1000)
})
