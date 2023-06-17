"use strict";
var element_apple_amount = document.getElementById('apple_amount');
var element_apple_per_click = document.getElementById('apple_per_click');
var element_apple_per_second = document.getElementById('apple_per_second');
var element_cursor_amount = document.getElementById('cursor_amount');
var element_cursor_price = document.getElementById('cursor_price');
var element_cursor_contribute = document.getElementById('cursor_contribute');
var element_basket_amount = document.getElementById('basket_amount');
var element_basket_price = document.getElementById('basket_price');
var element_basket_contribute = document.getElementById('basket_contribute');
var element_grandpa_amount = document.getElementById('grandpa_amount');
var element_grandpa_price = document.getElementById('grandpa_price');
var element_grandpa_contribute = document.getElementById('grandpa_contribute');
var element_tree_amount = document.getElementById('tree_amount');
var element_tree_price = document.getElementById('tree_price');
var element_tree_contribute = document.getElementById('tree_contribute');
var element_garden_amount = document.getElementById('garden_amount');
var element_garden_price = document.getElementById('garden_price');
var element_garden_contribute = document.getElementById('garden_contribute');
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
        element_cursor_amount.innerText = cursor_amount.toString();
    }
    if (element_cursor_price) {
        element_cursor_price.innerText = "价格：" + cursor_price.toString() + " 个苹果";
    }
    if (element_cursor_contribute) {
        element_cursor_contribute.innerText = "+ " + cursor_contribute.toFixed(1).toString() + " 个苹果/秒";
    }
    if (element_basket_amount) {
        element_basket_amount.innerText = basket_amount.toString();
    }
    ;
    if (element_basket_price) {
        element_basket_price.innerText = "价格：" + basket_price.toString() + " 个苹果";
    }
    ;
    if (element_basket_contribute) {
        element_basket_contribute.innerText = "+ " + basket_contribute.toFixed(1).toString() + " 个苹果/秒";
    }
    ;
    if (element_grandpa_amount) {
        element_grandpa_amount.innerText = grandpa_amount.toString();
    }
    ;
    if (element_grandpa_price) {
        element_grandpa_price.innerText = "价格：" + grandpa_price.toString() + " 个苹果";
    }
    ;
    if (element_grandpa_contribute) {
        element_grandpa_contribute.innerText = "+ " + grandpa_contribute.toFixed(1).toString() + " 个苹果/秒";
    }
    ;
    if (element_tree_amount) {
        element_tree_amount.innerText = tree_amount.toString();
    }
    ;
    if (element_tree_price) {
        element_tree_price.innerText = "价格：" + tree_price.toString() + " 个苹果";
    }
    ;
    if (element_tree_contribute) {
        element_tree_contribute.innerText = "+ " + tree_contribute.toFixed(1).toString() + " 个苹果/秒";
    }
    ;
    if (element_garden_amount) {
        element_garden_amount.innerText = garden_amount.toString();
    }
    ;
    if (element_garden_price) {
        ;
        element_garden_price.innerText = "价格：" + garden_price.toString() + " 个苹果";
    }
    ;
    if (element_garden_contribute) {
        element_garden_contribute.innerText = "+ " + garden_contribute.toFixed(1).toString() + " 个苹果/秒";
    }
    ;
    if (element_information) {
        element_information.innerText = information.toString();
    }
    ;
}
setInterval(Refresh, 100);
//# sourceMappingURL=refresh.js.map