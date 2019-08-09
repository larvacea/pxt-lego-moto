twist.setColor(63, 255, 0, 0)
motobit.enable(MotorPower.On)
motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
let was = 0
while (true) {
    let c = twist.getCount(63)
    basic.showNumber(c)
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
    basic.pause(100)
}