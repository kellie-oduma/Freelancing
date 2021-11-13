// alert("Freelancing");

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload =  () => {
        window.scrollTo(0, 0);
    }
}

const wrapperBody = document.querySelector(".wrapper-body");
const cartIcon = document.querySelector(".cart-icon");
const Cart = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart");
const freelancerPurchase = document.querySelector(".freelancer-purchase-bundle");
const starterPurchase = document.querySelector(".starter-purchase-bundle");
const completeBundleBtn = document.querySelectorAll(".complete-bundle-btn");
const closePurchase = document.querySelector(".close-purchase");
const imgOne = document.querySelector(".img-1");
const imgTwo = document.querySelector(".img-2");
const dotOne = document.querySelector(".dot-1");
const dotTwo = document.querySelector(".dot-2");
const moveLeft = document.querySelector(".move-left");
const moveRight = document.querySelector(".move-right");





cartIcon.addEventListener("click", () => {
    Cart.style.display = "flex";
});

closeCart.addEventListener("click", () => {
    if(Cart.style.display = "flex") {
        Cart.style.display = "none";
    }
});

completeBundleBtn.forEach(purchase => {
    purchase.addEventListener("click", () => {
        if(freelancerPurchase.style.display = "none") {
            wrapperBody.style.display = "none";
            freelancerPurchase.style.display = "flex";
            window.scrollTo(0, 0);
        }
    });
});

closePurchase.addEventListener("click", () => {
    if(freelancerPurchase.style.display = "flex") {
        freelancerPurchase.style.display = "none";
        wrapperBody.style.display = "flex";
        window.scrollTo(0, 0);
    }
});


moveRight.addEventListener("click", () => {
    if(imgOne.style.display = "flex") {
        imgOne.style.display = "none";
        imgTwo.style.display = "flex";
        dotOne.style.backgroundColor = "grey";
        dotTwo.style.backgroundColor = "orange";
    }
});


moveLeft.addEventListener("click", () => {
    if(imgTwo.style.display = "flex") {
        imgTwo.style.display = "none";
        imgOne.style.display = "flex";
        dotOne.style.backgroundColor = "orange";
        dotTwo.style.backgroundColor = "grey";
    }
});

