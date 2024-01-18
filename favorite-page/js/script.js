import products from "./data/products.js";
console.log("products: ", products);

const productContainer = document.querySelector(".product-container");

for (let i = 0; i < products.length; i++){
    console.log(products[i]);
    productContainer.innerHTML += `
            <div class="product">
                <img src="https://picsum.photos/200/300" alt="img">
                <h3>${products[i].name}</h3>
                <h4>${products[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </span>
            </div>
`;
}

const favorites = document.querySelectorAll("svg");
console.log("favorites: ", favorites)

for (let x = 0; x < favorites; x++){
    console.log(favorites[x]);
    favorites[x].addEventListener("click", function (){
        console.log(favorites);

        console.log("this.classList: ", this.classList);
        this.classList.toggle("active-heart");
    })
}

