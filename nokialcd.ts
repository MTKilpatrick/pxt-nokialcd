enum Plots {
    //% block="line"
    Line = 0,
    //% block="box"
    Box = 1,
    //% block="rectangle"
    Rect = 2
}
enum Scrolls {
    //% block="Up"
    Up = 0,
    //% block="Right"
    Right = 1,
    //% block="Down"
    Down = 2,
    //% block="Left"
    Left = 3
}
enum LCDDisplayModes {
    //% block="Normal"
    Normal = 0,
    //% block="Blank"
    Blank = 1,
    //% block="All on"
    AllOn = 2,
    //% block="Inverse"
    Inverse = 3
}

//% weight=100 color=#0fbc11
namespace nokialcd {

    const characters = [
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // SPACE char 32
        0x00, 0x00, 0x5f, 0x5f, 0x00, 0x00, //!
        0x00, 0x07, 0x00, 0x07, 0x00, 0x00, //""
        0x14, 0x7f, 0x14, 0x7f, 0x14, 0x00, //#
        0x24, 0x6a, 0x7f, 0x2b, 0x12, 0x00, //$
        0x23, 0x33, 0x18, 0x0c, 0x66, 0x62, //%
        0x36, 0x7f, 0x49, 0x5e, 0x26, 0x50, //&
        0x00, 0x04, 0x07, 0x03, 0x00, 0x00, //'
        0x00, 0x1c, 0x3e, 0x63, 0x41, 0x00, //(
        0x00, 0x41, 0x63, 0x3e, 0x1c, 0x00, //)
        0x14, 0x1c, 0x3e, 0x3e, 0x1c, 0x14, //*
        0x08, 0x08, 0x3e, 0x3e, 0x08, 0x08, //+
        0x00, 0x80, 0xe0, 0x60, 0x00, 0x00, //,
        0x08, 0x08, 0x08, 0x08, 0x08, 0x08, //-
        0x00, 0x00, 0x60, 0x60, 0x00, 0x00, //.
        0x40, 0x60, 0x30, 0x18, 0x0c, 0x06, // 
        0x3e, 0x7f ,0x59, 0x4d, 0x7f, 0x3e, //0
        0x40, 0x42, 0x7f, 0x7f, 0x40, 0x40, //1
        0x42, 0x63, 0x71, 0x59, 0x4f, 0x46, //2
        0x22, 0x63, 0x49, 0x49, 0x7f, 0x36, //3
        0x18, 0x1c, 0x16, 0x7f, 0x7f, 0x10, //4
        0x27, 0x67, 0x45, 0x45, 0x7d, 0x39, //5
        0x3c, 0x7e, 0x4b, 0x49, 0x79, 0x30, //6
        0x01, 0x71, 0x79, 0x0d, 0x07, 0x03, //7
        0x36, 0x7f, 0x49, 0x49, 0x7f, 0x36, //8
        0x06, 0x4f, 0x49, 0x69, 0x3f, 0x1e, //9
        0x00, 0x00, 0x6c, 0x6c, 0x00, 0x00, //:
        0x00, 0x80, 0xec, 0x6c, 0x00, 0x00, //;
        0x08, 0x1c, 0x36, 0x63, 0x41, 0x00, //<
        0x14, 0x14, 0x14, 0x14, 0x14, 0x14, //=
        0x41, 0x63, 0x36, 0x1c, 0x08, 0x00, //>
        0x02, 0x03, 0x59, 0x5d, 0x07, 0x02, //?
        0x3e, 0x7f, 0x41, 0x5d, 0x57, 0x1e, //@
        0x7e, 0x7f, 0x09, 0x09, 0x7f, 0x7e, //A
        0x7f, 0x7f, 0x49, 0x49, 0x7f, 0x36, //B
        0x3e, 0x7f, 0x41, 0x41, 0x63, 0x22, //C
        0x7f, 0x7f, 0x41, 0x41, 0x7f, 0x3e, //D
        0x7f, 0x7f, 0x49, 0x49, 0x49, 0x41, //E
        0x7f, 0x7f, 0x09, 0x09, 0x09, 0x01, //F
        0x3e, 0x7f, 0x41, 0x49, 0x7b, 0x3a, //G
        0x7f, 0x7f, 0x08, 0x08, 0x7f, 0x7f, //H
        0x41, 0x41, 0x7f, 0x7f, 0x41, 0x41, //I
        0x20, 0x61, 0x41, 0x7f, 0x3f, 0x01, //J
        0x7f, 0x7f, 0x1c, 0x36, 0x63, 0x41, //K
        0x7f, 0x7f, 0x40, 0x40, 0x40, 0x40, //L
        0x7f, 0x7e, 0x0c, 0x0c, 0x7e, 0x7f, //M
        0x7f, 0x7e, 0x0c, 0x18, 0x3f, 0x7f, //N
        0x3e, 0x7f ,0x41, 0x41, 0x7f, 0x3e, //O
        0x7f, 0x7f, 0x09, 0x09, 0x0f, 0x06, //P
        0x3e, 0x7f, 0x41, 0x31, 0x6f, 0x5e, //Q
        0x7f, 0x7f, 0x09, 0x19, 0x7f, 0x66, //R
        0x26, 0x6f, 0x49, 0x49, 0x7b, 0x32, //S
        0x01, 0x01, 0x7f, 0x7f, 0x01, 0x01, //T
        0x3f, 0x7f, 0x40, 0x40, 0x7f, 0x3f, //U
        0x1f, 0x3f, 0x60, 0x60, 0x3f, 0x1f, //V
        0x7f, 0x3f, 0x18, 0x18, 0x3f, 0x7f, //W
        0x63, 0x77, 0x1c, 0x1c, 0x77, 0x63, //X
        0x07, 0x0f, 0x78, 0x78, 0x0f, 0x07, //Y
        0x61, 0x71, 0x59, 0x4d, 0x47, 0x43, //Z
        0x00, 0x7f, 0x7f, 0x41, 0x41, 0x41, // 
        0x06, 0x0c, 0x18, 0x30, 0x60, 0x40, // 
        0x00, 0x41, 0x41, 0x41, 0x7f, 0x7f, // 
        0x0c, 0x06, 0x03, 0x03, 0x06, 0x0c, // 
        0x40, 0x40, 0x40, 0x40, 0x40, 0x40, // 
        0x00, 0x00, 0x03, 0x07, 0x04, 0x00, //
        0x20, 0x74, 0x54, 0x54, 0x7c, 0x78, //a
        0x7f, 0x7f, 0x44, 0x44, 0x7c, 0x38, //b
        0x38, 0x7c, 0x44, 0x44, 0x6c, 0x28, //c
        0x38, 0x7c, 0x44, 0x44, 0x7f, 0x7f, //d
        0x38, 0x7c, 0x54, 0x54, 0x5c, 0x18, //e
        0x08, 0x7e, 0x7f, 0x09, 0x09, 0x00, //f
        0x18, 0xbc, 0xa4, 0xa4, 0xfc, 0x7c, //g
        0x7f, 0x7f, 0x04, 0x04, 0x7c, 0x78 //h
    ]
        const charsa = [
        0x44, 0x7d, 0x7d, 0x40, 0x00, 0x00, //i
        0x80, 0x84, 0xfd, 0x7d, 0x00, 0x00, //j
        0x7f, 0x7f, 0x10, 0x38, 0x6c, 0x44, //k
        0x41, 0x7f, 0x7f, 0x40, 0x00, 0x00, //l
        0x78, 0x7c, 0x08, 0x08, 0x7c, 0x78, //m
        0x7c, 0x7c, 0x04, 0x04, 0x7c, 0x78, //n
        0x38, 0x7c, 0x44, 0x44, 0x7c, 0x38, //o
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //p
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //q
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //r
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //s
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //t
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //u
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //v
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //w
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //x
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //y
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00 //z
    ]



    const FILL_X = hex`fffefcf8f0e0c08000`
    const FILL_B = hex`0103070f1f3f7fffff`
    const TWOS = hex`0102040810204080`
    let bytearray: Buffer = initBuffer()
    let cursorx = 0
    let cursory = 0

    function charOffset(char: number) : number {
       
        return 6 * (char - 0)
    }

    //% block="show char %char at x% %y"
    //% blockId=nokialcd_show_char
    export function showChar(char: number) {
        let charbase = charOffset(char)
        let width = 6
        if (cursorx + width > 83) {
            cursorx = 0
            cursory++
        }
        let offset = cursory * 84 + cursorx
        for (let i = 0; i < width; i++) {
            let cc = characters[charbase + i]
            bytearray[offset + i] = cc
        }
        bytearray[offset + width] = 0
        cursorx = cursorx + width + 1

    }

    //% shim=nokialcd::initBuffer
    function initBuffer(): Buffer {
        return pins.createBuffer(504)
    }

    //% shim=nokialcd::SPIinit
    function SPIinit(): void {
        return
    }

    //% block="init LCD display"
    //% blockId=nokialcd_init
    export function init(): void {
        //        pins.spiFrequency(1000000)
        //        pins.spiFormat(8, 0)
        SPIinit()
    }

    //% shim=nokialcd::writeBufToLCD
    function writeBufToLCD(): void {
        return
    }

    //% block="show LCD display"
    //% blocId=nokialcd_show
    export function show(): void {
        writeBufToLCD()
    }

    //% shim=TD_ID
    //% blockId="dir_conv" block="%dir"
    //% blockHidden=true
    export function dirs(dir: Scrolls): number {
        return (dir || 0)
    }

    //% shim=TD_ID
    //% blockId="displaymode_conv" block="%displaymode"
    //% blockHidden=true
    export function lcddm(displaymode: LCDDisplayModes): number {
        return (displaymode || 0)
    }

    //% shim=TD_ID
    //% blockId="plot_conv" block="%plot"
    //% blockHidden=true
    export function pl(plot: Plots): number {
        return (plot || 0)
    }

    //% blockId=nokialcd_pixel
    //% block="pixel at x %x y %y %state"
    //% state.shadow="toggleOnOff" state.defl=true
    //% inlineInputMode=inline
    //% shim=nokialcd::pixel
    export function pixel(x: number, y: number, state: boolean): void {
        return
    }

    //% shim=nokialcd::scrollRow
    //% block="scroll screen direction %direction=dir_conv || step %step"
    //% expandableArgumentMode="toggle"
    //% step.min=0 step.defl=1
    export function scrollRow(row: number, direction: number, step: number = 1): void {
        return
    }

    //% shim=nokialcd::scrollUpRow
    export function scrollUpRow() {
        return
    }
    //% shim=nokialcd::scrollDownRow
    export function scrollDownRow() {
        return
    }

    //% shim=nokialcd::scrollScreen
    //% block="scroll row %row direction %direction=dir_conv || step %step"
    //% expandableArgumentMode="toggle"
    //% step.min=0 step.defl=1
    export function scrollScreen(direction: number, step: number = 1): void {
        return
    }

    //% blockId=nokialcd_display_row
    //% block="show row %row"
    export function displayRow(row: number): void {
    }

    //% blockId=nokialcd_scroll
    //% block="scroll display %direction=dir_conv"
    export function scroll(direction: number): void {
        if (direction & 1) {
            if (direction & 2) {
                // left
                for (let i = 0; i < 503; i++) {
                    bytearray[i] = bytearray[i + 1]
                }
                bytearray[83] = 0
                bytearray[167] = 0
                bytearray[251] = 0
                bytearray[335] = 0
                bytearray[419] = 0
                bytearray[503] = 0
            } else {
                // right
                for (let i = 503; i > 0; i--) {
                    bytearray[i] = bytearray[i - 1]
                }
                bytearray[0] = 0
                bytearray[84] = 0
                bytearray[164] = 0
                bytearray[252] = 0
                bytearray[336] = 0
                bytearray[420] = 0
            }
        } else {
        }
    }

    //% shim=nokialcd::setState
    function setState(s: boolean) {
        return
    }

    //% shim=nokialcd::pLine
    function pLine(x0: number, y0: number, x1: number, y1: number): void {
        return
    }

    //% blockId=nokialcd_plot
    //% block="draw %plot=plot_conv from x %x0 y %y0 to x %x1 y %y1 $state"
    //% state.shadow="toggleOnOff" state.defl=true
    //% inlineInputMode=inline
    export function plot(plot: Plots, x0: number, y0: number, x1: number, y1: number, state: boolean): void {
        setState(state)
        switch (plot) {
            case 0: { pLine(x0, y0, x1, y1); break }
            case 1: { pBox(x0, y0, x1, y1); break }
            case 2: {
                hLine(x0, x1, y0)
                hLine(x0, x1, y1)
                vLine(x0, y0, y1)
                vLine(x1, y0, y1)
                break
            }
            default: pLine(x0, y0, x1, y1)
        }
    }

    //% shim=nokialcd::vLine
    function vLine(x: number, y0: number, y1: number): void {
        return
    }

    //% shim=nokialcd::hLine
    function hLine(x0: number, x1: number, y: number): void {
        return
    }

    //% shim=nokialcd::pBox
    function pBox(x0: number, y0: number, x1: number, y1: number): void {
        return
    }

    //% blockId=nokialcd_clear
    //% block="clear screen"
    export function clear(): void {
        bytearray.fill(0)
        writeBufToLCD()
    }

    //% shim=nokialcd::setYAddr
    function setYAddr(y: number): void {
        return
    }

    //% shim=nokialcd::setXAddr
    function setXAddr(x: number): void {
        return
    }

    //% shim=nokialcd::writeSPIByte
    function writeSPIByte(b: number) {
        return
    }
}
nokialcd.init()