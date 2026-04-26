const totalPrice = document.getElementById("total");
const items = document.querySelectorAll(".item");

function updateTotal() {
    let total = 0;

    items.forEach(item => {
        let price = parseInt(item.querySelector(".price").dataset.price);
        let qty = parseInt(item.querySelector(".qty").textContent);

        total += price * qty;
    });

    totalPrice.textContent = total;
}



items.forEach(item => {
    const plus = item.querySelector(".plus");
    const minus = item.querySelector(".minus");
    const qty = item.querySelector(".qty");

    plus.addEventListener("click", ()=>{
        qty.textContent++;
        updateTotal();
    });

    minus.addEventListener("click", ()=>{
        if(qty.textContent > 1){
            qty.textContent--;
            updateTotal();
        }
    })
});