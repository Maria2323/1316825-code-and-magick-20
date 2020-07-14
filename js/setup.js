'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var characters = [];

  var userDialog = document.querySelector('.setup');
  var wizardStyle = userDialog.querySelector('.setup-wizard');
  var wizardCoatColor = wizardStyle.querySelector('.wizard-coat');
  var wizardEyesColor = wizardStyle.querySelector('.wizard-eyes');
  var fireballBackgroundColor = userDialog.querySelector('.setup-fireball-wrap');

  var coatColorField = userDialog.querySelector('input[name = "coat-color"]');
  var eyesColorField = userDialog.querySelector('input[name = "eyes-color"]');
  var fireballColorField = userDialog.querySelector('input[name = "fireball-color"]');

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColorField.value) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColorField.value) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(characters.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.backend.load(function (data) {
    characters = data;
    updateWizards();
  }, function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  });

  window.colorizeWizards(wizardCoatColor, COAT_COLORS, coatColorField);
  window.colorizeWizards(wizardEyesColor, EYES_COLORS, eyesColorField);
  window.colorizeWizards(fireballBackgroundColor, FIREBALL_COLORS, fireballColorField);

  document.querySelector('.setup-similar').classList.remove('hidden');
  window.updateWizards = updateWizards;
})();
