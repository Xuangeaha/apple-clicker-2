"use strict";
var apple_amount = 0;
var apple_per_click = 1;
var apple_per_second = 0;
var cursor_price = 10;
var cursor_amount = 0;
var cursor_contribute;
var information = "欢迎来到苹果点点乐2！ 作者/版权：轩哥啊哈OvO";
function addApple() {
    apple_amount += apple_per_click;
}
function contribute() {
    cursor_contribute = 0.1 * cursor_amount;
    apple_per_second = cursor_contribute;
}
setInterval(contribute, 100);
function autoApplePerSecond() {
    apple_amount += apple_per_second;
}
setInterval(autoApplePerSecond, 1000);
function buyCursor() {
    if (apple_amount - cursor_price >= 0) {
        cursor_amount += 1;
        apple_amount -= cursor_price;
    }
    else {
        information = "你没有足够的苹果来购买 鼠标指针。";
    }
}
//# sourceMappingURL=main.js.map