let runningtime = 0
let j = 0
let x = 0
nokialcd.init()
let data = pins.createBuffer(504)
nokialcd.setX(0)
nokialcd.setX(0)
basic.forever(function () {
    x = 15
    while (true) {
        for (let i = 0; i <= 84 * 6 - 1; i++) {
            data[i] = i % 6 * 32 + i + j
        }
        runningtime = input.runningTimeMicros()
        for (let index = 0; index < 100; index++) {
            nokialcd.writeBuffer(data)
        }
        basic.showNumber(input.runningTimeMicros() - runningtime)
        j += 1
    }
})
