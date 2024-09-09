
// 29文字がタブに表示される最大文字数
let flowText = "JavaScript and TypeScript are the best programming languages!";
let currentPos = 0;
let currentEndPos = 29;
const maxTextLength = 29;

document.title = flowText;

setInterval(() => {
    const splitedText = flowText.slice(currentPos, currentEndPos);
    document.title = splitedText;

    currentPos++;
    currentEndPos++;

    if (currentEndPos > flowText.length) {
        currentPos = 0;
        currentEndPos = maxTextLength;
    }
}, 500);