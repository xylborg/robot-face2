def on_forever():
    if tinkercademy.PIR(DigitalPin.P0):
        music.play_melody("C5 B A G F E D C ", 120)
        wuKong.set_all_motor(59, 91)
        OLED.init(128, 64)
        OLED.write_string_new_line("00                 00")
        OLED.write_string_new_line("  00             00")
        OLED.write_string_new_line("    00         00")
        OLED.write_string_new_line("      00    000")
        OLED.write_string_new_line("        0000 ")
        basic.pause(2000)
basic.forever(on_forever)
