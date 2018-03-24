// Source: https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript

var btnForgotten = document.getElementById('btn-forgotten');
var alertForgotten = document.getElementById('alert-forgotten');
var alertWarn = document.getElementById('alert-warn');
var emailInput = document.getElementById('email');

function displayAlert (target, text) {
    target.style.opacity = 1;
    target.innerText = text;
    target.classList.remove('d-none');
}

function undisplayAlert(target) {
    target.classList.add('d-none');
    target.innerText = '';
    target.style.opacity = 1;
}

function fadeOut (target) {
    btnForgotten.disabled = true;
    var fade = setInterval(function () {

        if (target.style.opacity < 0.1) {
            undisplayAlert(target);
            clearInterval(fade);
            btnForgotten.disabled = false;
        } else {
            target.style.opacity -= 0.1;
        }

    }, 500);
}

btnForgotten.addEventListener ('click', function () {
    if (emailInput.value == null || emailInput.value === '') {
        displayAlert(alertWarn, 'Kérlek add meg az email címedet!');
        fadeOut(alertWarn);
    } else {
        displayAlert(alertForgotten, 'A jelszavad: P@ssw0rd');
        fadeOut(alertForgotten);
    }
});
