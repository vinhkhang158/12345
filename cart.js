//// JavaScript source code

function addToCart(productID) {
    let cart = localStorage.getItem("giohang") 
        ? JSON.parse(localStorage.getItem("giohang")) 
        : []; 
    let dem = 0;
    if (cart.length == 0) { 
        cart.push({
            id: productID,
            quantity: 1,
        });
    }
    else {
        for (let item of cart) { 
            if (item.id == productID) { 
                dem = 1;
                alert("trùng");
            }   
        }
        if (dem == 1) { 
            for (let item of cart) {
                if (item.id == productID) {
                    item.quantity++;   
                }
            }
        }
        else { 
            cart.push({ 
                id: productID,
                quantity: 1,
            });
        }       
    }   
    localStorage.setItem("giohang", JSON.stringify(cart)); 
    update_noti_cart(); 
}
function update_noti_cart() { 
    
    if (localStorage.getItem("giohang")) { 
        let cart = JSON.parse(localStorage.getItem("giohang")); 
        let dem_phantu = document.getElementById("cart_count").innerText; 
        dem_phantu = cart.length; 
        document.getElementById("cart_count").innerText = cart.length; 
    }
}
update_noti_cart() 
