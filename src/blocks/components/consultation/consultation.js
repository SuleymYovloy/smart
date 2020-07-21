document.querySelector('#form-phone').onkeypress = function (e) {
	console.log(e.keyCode)
	if (e.keyCode < 97 || e.keyCode > 122) {
		console.log('Введите цифры')
	}
	else {
		this.value += e.key
	}
	return false
}