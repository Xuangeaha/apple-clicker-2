// 初始化定义
var apple_amount: number = 0;
var apple_per_click: number = 1;
var apple_per_second: number = 0;

var cursor_price: number = 10;
var cursor_amount: number = 0;
var cursor_contribute: number;

var information: string = "欢迎来到苹果点点乐2！ 作者/版权：轩哥啊哈OvO";

// 点击获得苹果
function addApple(): void {
    apple_amount += apple_per_click;
}

// 各建筑贡献递归计算
function contribute(): void {
    cursor_contribute = 0.1 * cursor_amount
    apple_per_second = cursor_contribute
}

setInterval(contribute, 100)

// 各建筑贡献获得苹果
function autoApplePerSecond(): void {
    apple_amount += apple_per_second;
}

setInterval(autoApplePerSecond, 1000)

// 各建筑购买
function buyCursor(): void {
    if (apple_amount - cursor_price >= 0) {
        cursor_amount += 1;
        apple_amount -= cursor_price;
    } else {
        information = "你没有足够的苹果来购买 鼠标指针。"
    }
}
