"use strict";
var element_apple_amount = document.getElementById('apple_amount');
var element_apple_per_click = document.getElementById('apple_per_click');
var element_apple_per_second = document.getElementById('apple_per_second');
var element_cursor_amount = document.getElementById('cursor_amount');
var element_cursor_price = document.getElementById('cursor_price');
var element_cursor_contribute = document.getElementById('cursor_contribute');
var element_information = document.getElementById('information');
function Refresh() {
    if (element_apple_amount) {
        element_apple_amount.innerText = apple_amount.toFixed(1).toString();
    }
    if (element_apple_per_click) {
        element_apple_per_click.innerText = "+ " + apple_per_click.toFixed(1).toString() + " 个/点击";
    }
    if (element_apple_per_second) {
        element_apple_per_second.innerText = "+ " + apple_per_second.toFixed(1).toString() + " 个/秒";
    }
    if (element_cursor_amount) {
        element_cursor_amount.innerText = "你拥有 " + cursor_amount.toString() + " 个鼠标指针";
    }
    if (element_cursor_price) {
        element_cursor_price.innerText = "价格：" + cursor_price.toString() + " 个苹果";
    }
    if (element_cursor_contribute) {
        element_cursor_contribute.innerText = "+ " + cursor_contribute.toFixed(1).toString() + " 个苹果/秒";
    }
    if (element_information) {
        element_information.innerText = information.toString();
    }
}
setInterval(Refresh, 100);
//# sourceMappingURL=refresh.js.map