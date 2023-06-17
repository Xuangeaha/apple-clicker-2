// 信息显示刷新
const element_apple_amount: HTMLElement | null = document.getElementById('apple_amount');
const element_apple_per_click: HTMLElement | null = document.getElementById('apple_per_click');
const element_apple_per_second: HTMLElement | null = document.getElementById('apple_per_second');
const element_cursor_amount: HTMLElement | null = document.getElementById('cursor_amount');
const element_cursor_price: HTMLElement | null = document.getElementById('cursor_price');
const element_cursor_contribute: HTMLElement | null = document.getElementById('cursor_contribute');
const element_basket_amount: HTMLElement | null = document.getElementById('basket_amount');
const element_basket_price: HTMLElement | null = document.getElementById('basket_price');
const element_basket_contribute: HTMLElement | null = document.getElementById('basket_contribute');
const element_grandpa_amount: HTMLElement | null = document.getElementById('grandpa_amount');
const element_grandpa_price: HTMLElement | null = document.getElementById('grandpa_price');
const element_grandpa_contribute: HTMLElement | null = document.getElementById('grandpa_contribute');
const element_tree_amount: HTMLElement | null = document.getElementById('tree_amount');
const element_tree_price: HTMLElement | null = document.getElementById('tree_price');
const element_tree_contribute: HTMLElement | null = document.getElementById('tree_contribute');
const element_garden_amount: HTMLElement | null = document.getElementById('garden_amount');
const element_garden_price: HTMLElement | null = document.getElementById('garden_price');
const element_garden_contribute: HTMLElement | null = document.getElementById('garden_contribute');
const element_information: HTMLElement | null = document.getElementById('information');

function Refresh() {
    // 苹果信息显示
    if (element_apple_amount) {
        element_apple_amount.innerText = apple_amount.toFixed(1).toString();
    }
    if (element_apple_per_click) {
        element_apple_per_click.innerText = "+ " + apple_per_click.toFixed(1).toString() + " 个/点击";
    }
    if (element_apple_per_second) {
        element_apple_per_second.innerText = "+ " + apple_per_second.toFixed(1).toString() + " 个/秒";
    }

    // 建筑信息显示
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
    };
    if (element_basket_price) {
        element_basket_price.innerText = "价格：" + basket_price.toString() + " 个苹果";
    };
    if (element_basket_contribute) {
        element_basket_contribute.innerText = "+ " + basket_contribute.toFixed(1).toString() + " 个苹果/秒";
    };

    if (element_grandpa_amount) {
        element_grandpa_amount.innerText = grandpa_amount.toString();
    };
    if (element_grandpa_price) {
        element_grandpa_price.innerText = "价格：" + grandpa_price.toString() + " 个苹果";
    };
    if (element_grandpa_contribute) {
        element_grandpa_contribute.innerText = "+ " + grandpa_contribute.toFixed(1).toString() + " 个苹果/秒";
    };

    if (element_tree_amount) {
        element_tree_amount.innerText = tree_amount.toString();
    };
    if (element_tree_price) {
        element_tree_price.innerText = "价格：" + tree_price.toString() + " 个苹果";
    };
    if (element_tree_contribute) {
        element_tree_contribute.innerText = "+ " + tree_contribute.toFixed(1).toString() + " 个苹果/秒";
    };

    if (element_garden_amount) {
        element_garden_amount.innerText = garden_amount.toString();
    };
    if (element_garden_price) {;
        element_garden_price.innerText = "价格：" + garden_price.toString() + " 个苹果";
    };
    if (element_garden_contribute) {
        element_garden_contribute.innerText = "+ " + garden_contribute.toFixed(1).toString() + " 个苹果/秒";
    };

    // 信息栏
    if (element_information) {
        element_information.innerText = information.toString();
    };
}

setInterval(Refresh, 100)