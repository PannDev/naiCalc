// handle angka dan simbol
document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (key === 'Escape') {
        clean();
    } else if (key === 'Backspace') {
        back();
    } else if (key === '/') {
        insert('/');
    } else if (key === '*') {
        insert('*');
    } else if (key === '.') {
        insert('.');
    } else if (key === '=' || key === 'Enter') {
        equal();
    } else if (isValidInput(key)) {
        handleKeyboardInput(key);
    }
});

// array inputannya apa aja
function isValidInput(input) {
    var validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '&times;', '&divide;', '&equals;'];
    return validChars.includes(input);
}

// handle inputan keyboard
function handleKeyboardInput(input) {
    var button = document.querySelector(`input[value='${input}']`);
    if (button) {
        button.click();
    }
}

// Insert angka ke textview
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// insert angka atau simbol ke textarea
function insert(value) {
    document.form.textarea.value = document.form.textarea.value + value;
}

// Fungsi Hitung
function equal() {
    var hasil = document.form.textarea.value;
    // ganti simbol kali dan bagi jadi operator "*" dan "/"
	// kadang suka error (njir)
    hasil = hasil.replace(/&times;/g, '*').replace(/&divide;/g, '/');
    document.form.textarea.value = eval(hasil);
}

// Clean
function clean() {
    document.form.textarea.value = "";
}

// Delete
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}
