const input = document.getElementById("inputtext");
const result = document.getElementById("result");

function reversevalue(){
    let ans = input.value;
    result.textContent = ans.split("").reverse().join("");
}

function upper(){
    result.textContent = input.value.toUpperCase();
}
function lower(){
    result.textContent = input.value.toLowerCase();
}

function findLength(){
    result.textContent = "Length: "+ input.value.length;
}