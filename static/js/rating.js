// Source: https://codepen.io/alisuarez/pen/RWGNLm

var rating = document.getElementById('rating');
var rating_value = document.getElementById('rating-value');

var iterateHearts = function (func) {
    for (var i = 0; i < rating.childElementCount; ++i) {
        var heart = rating.children[i];
        func(heart);
    }
};

var setHeart = function (heart) {
    if ( parseInt(rating_value.value) < parseInt(heart.dataset.rating) ) {
        heart.classList.remove('fas');
        heart.classList.add('far')
    } else {
        heart.classList.remove('far');
        heart.classList.add('fas')
    }
};

var setRatingValue = function () {
    rating_value.value = this.dataset.rating;
    iterateHearts(setHeart)
};

var attachListener = function (heart) {
    heart.addEventListener('click', setRatingValue);
};

iterateHearts(attachListener);