'use strict';

(function () {
  var getRandomElement = function (characteristic) {
    return characteristic[Math.round(Math.random() * (characteristic.length - 1))];
  };

  window.colorizeWizards = function (elementColor, array, input) {
    elementColor.addEventListener('click', function () {
      var color = getRandomElement(array);
      if (elementColor.tagName.toLowerCase() === 'div') {
        elementColor.style.background = color;
        input.value = color;
      } else {
        elementColor.style.fill = color;
        input.value = color;
      }
      window.debounce(window.updateWizards());
    });
  };
})();
