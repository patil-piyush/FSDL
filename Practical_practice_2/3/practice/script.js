const toggle = document.getElementById("toggle");
const prices = document.querySelectorAll(".price");
const durations = document.querySelectorAll(".duration");


toggle.addEventListener("change", function () {

    prices.forEach((price, index) => {
        if (toggle.checked) {
            price.textContent = "$" + price.dataset.year;
            durations[index].textContent = "/Year";
        }
        else {
            price.textContent = "$" + price.dataset.month;
            durations[index].textContent = "/Month";
        }
    });
})