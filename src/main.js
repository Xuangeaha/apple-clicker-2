"use strict";
var apple_amount = 0;
var apple_per_click = 1;
var apple_per_second = 0;
var cursor_price = 10;
var cursor_amount = 0;
var cursor_contribute;
var basket_price = 120;
var basket_amount = 0;
var basket_contribute;
var grandpa_price = 1100;
var grandpa_amount = 0;
var grandpa_contribute;
var tree_price = 9500;
var tree_amount = 0;
var tree_contribute;
var garden_price = 115000;
var garden_amount = 0;
var garden_contribute;
var information = "欢迎来到苹果点点乐2！ 作者/版权：轩哥啊哈OvO";
function addApple() {
    apple_amount += apple_per_click;
}
;
function contribute() {
    cursor_contribute = 0.1 * cursor_amount;
    basket_contribute = 1 * basket_amount;
    grandpa_contribute = 8 * grandpa_amount;
    tree_contribute = 45 * tree_amount;
    garden_contribute = 260 * garden_amount;
    apple_per_second = cursor_contribute + basket_contribute +
        grandpa_contribute + tree_contribute + garden_contribute;
}
;
setInterval(contribute, 100);
function clickContribute() {
    apple_per_click = 1 +
        0.03 * cursor_amount +
        0.05 * basket_amount +
        0.1 * grandpa_amount +
        0.4 * tree_amount +
        1 * garden_amount;
}
;
setInterval(clickContribute, 100);
function autoApplePerSecond() {
    apple_amount += apple_per_second / 10;
}
;
setInterval(autoApplePerSecond, 100);
function buyCursor() {
    if (apple_amount - cursor_price >= 0) {
        cursor_amount += 1;
        apple_amount -= cursor_price;
        information = "您已购买 鼠标指针 × 1。";
    }
    else {
        information = "你没有足够的苹果来购买 鼠标指针。";
    }
    ;
}
;
function buyBasket() {
    if (apple_amount - basket_price >= 0) {
        basket_amount += 1;
        apple_amount -= basket_price;
        information = "您已购买 果篮 × 1。";
    }
    else {
        information = "你没有足够的苹果来购买 果篮。";
    }
    ;
}
;
function buyGrandpa() {
    if (apple_amount - grandpa_price >= 0) {
        grandpa_amount += 1;
        apple_amount -= grandpa_price;
        information = "您已购买 老爷爷 × 1。";
    }
    else {
        information = "你没有足够的苹果来购买 老爷爷。";
    }
    ;
}
;
function buyTree() {
    if (apple_amount - tree_price >= 0) {
        tree_amount += 1;
        apple_amount -= tree_price;
        information = "您已购买 苹果树 × 1。";
    }
    else {
        information = "你没有足够的苹果来购买 苹果树。";
    }
    ;
}
;
function buyGarden() {
    if (apple_amount - garden_price >= 0) {
        garden_amount += 1;
        apple_amount -= garden_price;
        information = "您已购买 果园 × 1。";
    }
    else {
        information = "你没有足够的苹果来购买 果园。";
    }
    ;
}
;
//# sourceMappingURL=main.js.map