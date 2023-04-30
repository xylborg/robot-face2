basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P15)) {
        basic.showIcon(IconNames.Heart)
        wuKong.setAllMotor(45, 39)
        basic.pause(500)
        wuKong.setAllMotor(100, 81)
        wuKong.stopAllMotor()
    } else {
        basic.showIcon(IconNames.Sad)
    }
    OLED.init(128, 64)
    OLED.writeStringNewLine("00                 00")
    OLED.writeStringNewLine("  00             00")
    OLED.writeStringNewLine("    00         00")
    OLED.writeStringNewLine("      00    000")
    OLED.writeStringNewLine("        0000 ")
    basic.pause(2000)
})
