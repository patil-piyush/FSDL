const input = document.getElementById("inputText");
const result = document.getElementById("result");

function reverseText() {
    let text = input.value;
    result.textContent = text.split("").reverse().join("");
}

function toUpper() {
    result.textContent = input.value.toUpperCase();
}

function toLower() {
    result.textContent = input.value.toLowerCase();
}

function getLength() {
    result.textContent = "Length: " + input.value.length;
}