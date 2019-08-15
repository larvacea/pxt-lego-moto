twist.setColor(63, 255, 0, 0)
motobit.enable(MotorPower.On)
motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
let was = 0
basic.forever(function () {
    basic.showNumber(was)
    basic.pause(100)
})

basic.forever(function () {
    let c = twist.getCount(63)
    if (c != was) {
        was = c
        if (c > 0) {
            twist.setColor(63, 0, 255, 0)
        }
        else if (c < 0) {
            twist.setColor(63, 0, 0, 255)
        }
        else {
            twist.setColor(63, 255, 0, 0)
        }
        if (c >= 0) {
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, c)
        }
        else {
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, c)
        }
    }
})