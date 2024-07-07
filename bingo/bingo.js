// HTMLドキュメント読み込みとカード生成関数`generateBingoCard`を呼び出す
document.addEventListener("DOMContentLoaded", function() {
    generateBingoCard();
});

// 乱数をオブジェクト`columns`に格納する
function generateBingoCard() {
    const columns = {
        B: generateUniqueNumbers(1, 15, 5),
        I: generateUniqueNumbers(16, 30, 5),
        N: generateUniqueNumbers(31, 45, 5),
        G: generateUniqueNumbers(46, 60, 5),
        O: generateUniqueNumbers(61, 75, 5)
    };

    const cells = document.querySelectorAll("td[id^='square']"); // 変数`cells`はすべての`id=square`ではじまるtd要素を取得
    let index = 0;
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
            if (row === 2 && column === 2) {
                continue;  // "FREE"セルはそのまま
            }
            cells[index].innerText = columns[Object.keys(columns)[column]][row];
            index++;
        }
    }
}

// 指定された範囲内の一意の数字を生成する関数
function generateUniqueNumbers(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(num);
    }
    return Array.from(numbers); // SetからArrayにして返す
}