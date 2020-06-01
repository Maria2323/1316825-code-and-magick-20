'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_Y = 250;
var GAP = 20;
var BAR_WIDTH = 40;
var barHeight = 150 - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i <= players.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 2 + (BAR_WIDTH * 2 + GAP / 2) * i, CLOUD_Y + GAP * 3 + (barHeight - (barHeight * times[i]) / maxTime));
    ctx.fillText(players[i], CLOUD_X + GAP * 2 + (BAR_WIDTH * 2 + GAP / 2) * i, TEXT_Y);
    ctx.fillStyle = players[i].name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, 100, 50)';
    ctx.fillRect(CLOUD_X + GAP * 2 + (BAR_WIDTH * 2 + GAP / 2) * i, CLOUD_Y + GAP * 4 + (barHeight - (barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
