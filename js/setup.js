'use strict';

var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var getRandomValueFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizard = function (names, surnames, coatColors, eyesColors) {
  return {
    name: getRandomValueFromArray(names) + ' ' + getRandomValueFromArray(surnames),
    coatColor: getRandomValueFromArray(coatColors),
    eyesColor: getRandomValueFromArray(eyesColors)
  };
};

var createWizards = function (names, surnames, coatColors, eyesColors, size) {
  var wizards = Array(size);

  for (var i = 0; i < wizards.length; i++) {
    wizards[i] = createWizard(names, surnames, coatColors, eyesColors);
  }

  return wizards;
};

var updateWizardElement = function (wizardElement, name, eyesColor, coatColor) {
  wizardElement.querySelector('.setup-similar-label').textContent = name;
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
  return wizardElement;
};

var renderWizards = function (wizards) {
  var listElement = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  for (var i = 0; i < wizards.length; i++) {
    var wizard = wizards[i];
    var wizardElement = updateWizardElement(wizardTemplate.cloneNode(true), wizard.name, wizard.eyesColor, wizard.coatColor);
    listElement.appendChild(wizardElement);
  }

  var fragment = document.createDocumentFragment();
  listElement.appendChild(fragment);
};

var openUserDialog = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var randomWizards = createWizards(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES, WIZARD_NUMBER);

renderWizards(randomWizards);
openUserDialog();
