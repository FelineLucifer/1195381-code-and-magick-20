'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var TEXT = '16px PT Mono';

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = TEXT;
  ctx.fillText(text, x, y);
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3, '#000');
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5, '#000');
};

var renderPlayersBars = function (ctx, names, times, color) {

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'hsl(234, 96%,' + (Math.floor(Math.random() * (100 - 1 + 1)) + 1) + '%)';
    }

    var maxTime = getMaxElement(times);
    var height = Math.round(BAR_HEIGHT * times[i] / maxTime);
    renderText(ctx, names[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP, '#000');
    renderText(ctx, Math.floor(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - height - GAP * 4);
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP * 3 - height, BAR_WIDTH, height);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderPlayersBars(ctx, names, times);
};
