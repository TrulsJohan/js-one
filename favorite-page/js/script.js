import products from "./data/products.js";
console.log("products: ", products);

const productContainer = document.querySelector(".product-container");

const savedFavoritesProducts = JSON.parse(window.localStorage.getItem("favourites"));
console.log("savedFavouritesProducts: ", savedFavoritesProducts);

for (let i = 0; i < products.length; i++){
    let cssClass = "";

    const doesObjectExist = savedFavoritesProducts.find(function (fav){
       return parseInt(fav.id) === products[i].id
    });

    if (doesObjectExist){
        cssClass = "active-heart";
    }

    console.log("doesObjectExist: ", doesObjectExist);

    productContainer.innerHTML += `
            <div class="product">
                <img src="https://picsum.photos/200/300" alt="img">
                <h3>${products[i].name}</h3>
                <h4>${products[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart ${cssClass}"
                    data-name="${products[i].name}"
                    data-id="${products[i].id}"
                    data-price="${products[i].price}"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </span>
            </div>
`;
}

const hearts = document.querySelectorAll(".heart");
console.log("favorites: ", hearts)

let favsToSave = [];
for (let x = 0; x < hearts.length; x++){
    console.log(hearts[x]);
    hearts[x].addEventListener("click", function (){
        console.log(hearts);

        console.log("this.classList: ", this.classList);
        this.classList.toggle("active-heart");

        console.log("this.dataset: ", this.dataset);
        let ILikeToSave = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        }
        console.log("ILikeToSave: ",ILikeToSave);

        favsToSave.push(ILikeToSave);
        saveFavs(favsToSave);
    });
}

function saveFavs(favouriteProducts) {
    window.localStorage.setItem("favourites; ", JSON.stringify(favouriteProducts));
}

