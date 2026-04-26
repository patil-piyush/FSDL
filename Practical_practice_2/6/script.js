// Fetch JSON data
fetch("data/products.json")
    .then(response => response.json())
    .then(products => {

        const container = document.getElementById("product-container");

        products.forEach(product => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${product.image}">
                <h4>${product.name}</h4>
                <p>₹${product.price}</p>
                <button>Buy Now</button>
            `;

            // Buy button
            card.querySelector("button").addEventListener("click", () => {
                alert(product.name + " purchased!");
            });

            container.appendChild(card);
        });

    })
    .catch(error => console.log("Error loading JSON:", error));