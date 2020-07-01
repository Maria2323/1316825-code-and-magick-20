'use strict';

(function () {
  var FIRST_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  var userDialog = document.querySelector('.setup');
  var wizardStyle = userDialog.querySelector('.setup-wizard');
  var wizardCoatColor = wizardStyle.querySelector('.wizard-coat');
  var wizardEyesColor = wizardStyle.querySelector('.wizard-eyes');
  var fireballBackgroundColor = userDialog.querySelector('.setup-fireball-wrap');

  var coatColorField = userDialog.querySelector('input[name = "coat-color"]');
  var eyesColorField = userDialog.querySelector('input[name = "eyes-color"]');
  var fireballColorField = userDialog.querySelector('input[name = "fireball-color"]');

  var wizardCount = 4;
  var characters = [];

  var getRandomElement = function (characteristic) {
    return characteristic[Math.round(Math.random() * (characteristic.length - 1))];
  };

  var createWizards = function () {
    return {
      name: getRandomElement(FIRST_NAMES) + getRandomElement(LAST_NAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    };
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  window.backend.load(function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < characters.length; i++) {
      fragment.appendChild(renderWizard(characters[i]));
    }
    similarListElement.appendChild(fragment);
  }, function () {});

  for (var i = 0; i < wizardCount; i++) {
    characters.push(createWizards());
  }

  window.colorizeWizards(wizardCoatColor, COAT_COLORS, coatColorField);
  window.colorizeWizards(wizardEyesColor, EYES_COLORS, eyesColorField);
  window.colorizeWizards(fireballBackgroundColor, FIREBALL_COLORS, fireballColorField);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
