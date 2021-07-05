"use strict";

var canvas = document.querySelector("#canvas");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
var element = document.querySelector("#canvas");
var ctx = element.getContext("2d");
element.height = h;
element.width = w;
var position = Array(300).join(0).split('');
console.log(ctx);

var initMatix = function initMatix() {
    ctx.fillStyle = "rgba(0,15,2,0.45)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#4caf50';
    ctx.font = "12pt";
    position.map(function(y, i) {
        var text = String.fromCharCode(1e4 + Math.random() * 30);
        var x = i * 15 + 15;
        canvas.getContext("2d").fillText(text, x, y);
        y > 100 + Math.random() * 1e5 ? position[i] = 0 : position[i] = y + 15;
    });
};

setInterval(initMatix, 50);