
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  var sliderImg = document.querySelector('.slide-container');
  var arrowLeft = document.querySelector('.left');
  var arrowRight = document.querySelector('.right');

  var slideLeft = function slideLeft() {
    var first = sliderImg.children[0];
    var second = sliderImg.children[1];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sliderImg.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        key.classList.remove('moveLeft');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    first.classList.add('moveLeft');

    setTimeout(function () {
      sliderImg.removeChild(first);
      sliderImg.appendChild(first);
      first.classList.remove('moveLeft');
    }, 200);
  };

  var slideRight = function slideRight() {
    var first = sliderImg.children[0];
    var last = sliderImg.children[sliderImg.children.length - 1];

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = sliderImg.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        key.classList.remove('moveRight');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    first.classList.add('moveRight');

    setTimeout(function () {
      sliderImg.removeChild(last);
      sliderImg.insertAdjacentElement('afterbegin', last);
      first.classList.remove('moveRight');
    }, 200);
  };

  arrowLeft.addEventListener('click', slideLeft);
  arrowRight.addEventListener('click', slideRight);
});