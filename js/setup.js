'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomArrElement = function (arr) {
  var random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

var NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYE_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Шаблон для отрисовки персонажей
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

var wizards = [
  {
    name: getRandomArrElement(NAMES) + ' ' + getRandomArrElement(SURNAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYE_COLOR)
  },
  {
    name: getRandomArrElement(NAMES) + ' ' + getRandomArrElement(SURNAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYE_COLOR)
  },
  {
    name: getRandomArrElement(NAMES) + ' ' + getRandomArrElement(SURNAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYE_COLOR)
  },
  {
    name: getRandomArrElement(NAMES) + ' ' + getRandomArrElement(SURNAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYE_COLOR)
  }
];

// Рисует персонажей
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
