// Source: https://stackoverflow.com/questions/9717588/checking-password-match-while-typing

var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onchange = validatePassword;