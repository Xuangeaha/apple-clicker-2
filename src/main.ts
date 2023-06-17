// 初始化定义
var apple_amount: number = 0;
var apple_per_click: number = 1;
var apple_per_second: number = 0;

var cursor_price: number = 10;
var cursor_amount: number = 0;
var cursor_contribute: number;

var basket_price: number = 120;
var basket_amount: number = 0;
var basket_contribute: number;

var grandpa_price: number = 1100;
var grandpa_amount: number = 0;
var grandpa_contribute: number;

var tree_price: number = 9500;
var tree_amount: number = 0;
var tree_contribute: number;

var garden_price: number = 115000;
var garden_amount: number = 0;
var garden_contribute: number;

var information: string = "欢迎来到苹果点点乐2！ 作者/版权：轩哥啊哈OvO";

// 点击获得苹果
function addApple(): void {
    apple_amount += apple_per_click;
};

// 各建筑贡献递归计算
function contribute(): void {
    cursor_contribute = 0.1 * cursor_amount;
    basket_contribute = 1 * basket_amount;
    grandpa_contribute = 8 * grandpa_amount;
    tree_contribute = 45 * tree_amount;
    garden_contribute = 260 * garden_amount;
    apple_per_second = cursor_contribute + basket_contribute +
        grandpa_contribute + tree_contribute + garden_contribute;
};

setInterval(contribute, 100);

// 各建筑贡献递归计算
function clickContribute(): void {
    apple_per_click = 1 +
        0.05 * cursor_amount +
        0.1 * basket_amount +
        0.4 * grandpa_amount +
        1 * tree_amount +
        3 * garden_amount;
};

setInterval(clickContribute, 100);

// 各建筑贡献获得苹果
function autoApplePerSecond(): void {
    apple_amount += apple_per_second / 10;
};

setInterval(autoApplePerSecond, 100);

// 各建筑购买
function buyCursor(): void {
    if (apple_amount - cursor_price >= 0) {
        cursor_amount += 1;
        apple_amount -= cursor_price;
        information = "您已购买 鼠标指针 × 1。";
    } else {
        information = "你没有足够的苹果来购买 鼠标指针。";
    };
};

function buyBasket(): void {
    if (apple_amount - basket_price >= 0) {
        basket_amount += 1;
        apple_amount -= basket_price;
        information = "您已购买 果篮 × 1。";
    } else {
        information = "你没有足够的苹果来购买 果篮。";
    };
};

function buyGrandpa(): void {
    if (apple_amount - grandpa_price >= 0) {
        grandpa_amount += 1;
        apple_amount -= grandpa_price;
        information = "您已购买 老爷爷 × 1。";
    } else {
        information = "你没有足够的苹果来购买 老爷爷。";
    };
};

function buyTree(): void {
    if (apple_amount - tree_price >= 0) {
        tree_amount += 1;
        apple_amount -= tree_price;
        information = "您已购买 苹果树 × 1。";
    } else {
        information = "你没有足够的苹果来购买 苹果树。";
    };
};

function buyGarden(): void {
    if (apple_amount - garden_price >= 0) {
        garden_amount += 1;
        apple_amount -= garden_price;
        information = "您已购买 果园 × 1。";
    } else {
        information = "你没有足够的苹果来购买 果园。";
    };
};
