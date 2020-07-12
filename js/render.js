'use strict';

(function () {
  var wizardCount = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizards) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizard = wizardElement.querySelector('.wizard');

    wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    wizard.querySelector('.wizard-coat').style.fill = wizards.coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

    return wizardElement;
  };
  window.render = function (data) {
    var takeNumber = data.length > wizardCount ? wizardCount : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();


