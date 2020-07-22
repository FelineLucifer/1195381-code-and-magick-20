'use strict';
var userDialog = document.querySelector('.setup');
var openButton = document.querySelector('.setup-open');
var closeButton = document.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');

var Keys = {
  ESCAPE: 'Escape',
  ENTER: 'Enter'
};

var isEscEvent = function (evt, action) {
  if (evt.key === Keys.ESCAPE) {
    action();
  }
};

var isEnterEvent = function (evt, action) {
  if (evt.key === Keys.ENTER) {
    action();
  }
};

var onPopupEscPress = function (evt) {
  if (document.activeElement !== setupUserName) {
    isEscEvent(evt, closePopup);
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  userDialog.style.top = '80px';
  userDialog.style.left = '50%';
};

openButton.addEventListener('click', function () {
  openPopup();
});

closeButton.addEventListener('click', function () {
  closePopup();
});

openButton.addEventListener('keydown', function (evt) {
  isEnterEvent(evt, openPopup);
});

closeButton.addEventListener('keydown', function (evt) {
  isEnterEvent(evt, closePopup);
});

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

// Раскрашивает персонажа
var COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupAppearance = document.querySelector('.setup-wizard-appearance');
var setupWizard = setupAppearance.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireInput = fireball.querySelector('input');
var eyesInput = setupAppearance.querySelector('input[name=eyes-color]');
var coatInput = setupAppearance.querySelector('input[name=coat-color]');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomArrElement(COLORS);
  coatInput.value = getRandomArrElement(COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomArrElement(EYES);
  eyesInput.value = getRandomArrElement(EYES);
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getRandomArrElement(FIREBALL_COLOR);
  fireInput.value = getRandomArrElement(FIREBALL_COLOR);
});
