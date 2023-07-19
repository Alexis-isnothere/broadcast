radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
radio.setGroup(0)
basic.forever(function () {
	
})
