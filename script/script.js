
menuToggle.onclick = function() {
    var myTopnav = document.getElementById("myTopnav");
    
    myTopnav.classList.toggle("sh-active");
}

window.onclick = function(event)
{
    if(!(event.target == menuToggle || event.target.parentNode == menuToggle))
    {
        var myTopnav = document.getElementById("myTopnav");
        myTopnav.classList.remove("sh-active");
    }
}

var productTemplate = document.getElementById("product-template");

products.innerHTML = "";

for (var i = 0; i < 9; i++) {
    products.innerHTML += productTemplate.innerHTML;
}

var buttons = document.getElementsByClassName("product-add-to-cart");
var btn;
for (var i = 0; i < buttons.length; i++) {
    btn = buttons[i];
    
    btn.onclick = function()
    {
        var parent = this.parentNode;
        var span = parent.querySelector(".product-price > span");
        var price = span.getAttribute("data-price");
        totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) + parseFloat(price);
    }
}