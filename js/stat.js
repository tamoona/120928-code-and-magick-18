'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 5;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var CHART_HEIGHT = 150;
var FONT_SIZE = 16;
var PLAYER_NAME = 'Вы';
var offsetX = CLOUD_X + 30;
var offsetY = CLOUD_Y + 30;
var maxBarHeight = CHART_HEIGHT - (FONT_SIZE + FONT_GAP) * 2;
var barOffset = BAR_WIDTH + BAR_GAP;

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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = FONT_SIZE + 'px PT Mono';

  var titleText = 'Ура вы победили!\nСписок результатов:';
  var textArray = titleText.split('\n');

  for (var i = 0; i < textArray.length; i++) {
    ctx.fillText(textArray[i], offsetX, offsetY + (FONT_SIZE + FONT_GAP) * i);
  }

  var maxTime = getMaxElement(times);
  var titleTextHeight = offsetY + FONT_SIZE * textArray.length + GAP * 2;

  for (var j = 0; j < players.length; j++) {
    var barHeight = (maxBarHeight * times[j]) / maxTime;
    var barOffsetX = barOffset * j + offsetX;
    var barOffsetY = titleTextHeight + maxBarHeight - barHeight;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[j]), barOffsetX, barOffsetY);
    ctx.fillText(players[j], barOffsetX, titleTextHeight + CHART_HEIGHT - FONT_SIZE);

    if (players[j] === PLAYER_NAME) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor((Math.random() * 100)) + '%, 50%';
    }

    ctx.fillRect(barOffsetX, barOffsetY + FONT_GAP, BAR_WIDTH, barHeight);
  }
};
