let products = [
    {
        name: "MEAT",
        price: "$30.00",
        image: "img/featured/feature-1.jpg", 
        id:1
    },
    {
        name: "BANANA",
        price: "$30.00",
        image: "img/featured/feature-2.jpg",
        id:2
    },
    {
        name: "A",
        price: "$30.00",
        image: "img/featured/feature-3.jpg",
        id: 3
    },
    {
        name: "WATERMELON",
        price: "$30.00",
        image: "img/featured/feature-4.jpg",
        id: 4
    },
    {
        name: "GRAPE",
        price: "$30.00",
        image: "img/featured/feature-5.jpg",
        id: 5
    },
    {
        name: "HAMBURGER",
        price: "$30.00",
        image: "img/featured/feature-6.jpg",
        id: 6
    },
    {
        name: "MANGO",
        price: "$30.00",
        image: "img/featured/feature-7.jpg",
        id: 7
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/featured/feature-8.jpg",
        id: 8
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-9.jpg",
        id: 9
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-10.jpg",
        id: 8
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-9.jpg",
        id: 10
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-11.jpg",
        id: 11
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-12.jpg",
        id: 12
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-9.jpg",
        id: 8
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-9.jpg",
        id: 8
    },
    {
        name: "APPLE",
        price: "$30.00",
        image: "img/product/product-9.jpg",
        id: 8
    },
];
for (let product of products) {
    let card = `
    <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
      <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="${product.image}">
            <img src="${product.image}" style="height: 100%;">
            <ul class="featured__item__pic__hover">
                <li><button onclick="addToCart(${product.id})" style="border: none; background-color:#7FAD39; color:white; height:36px; width:150px; border-radius:10px;" ><i class="fa fa-shopping-cart"> Add to cart</i></button></li>
            </ul>
        </div>
        <div class="featured__item__text">
            <h6><a href="#">${product.name}</a></h6>
            <h5>${product.price}</h5>
        </div>
      </div>
    </div>
  `; // function addToCart (ID) {}
    document.getElementById("shops").innerHTML += card;
}