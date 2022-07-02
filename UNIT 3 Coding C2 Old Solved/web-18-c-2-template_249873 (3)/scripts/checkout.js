
// .......... alert in interval............

function myFinalCheckout(event){
 
    event.preventDefault();

    alert("Order is accepted");

    setTimeout(function(){
        alert("Your order is being prepared ")
    },3000)

   setTimeout(function(){
    alert("Your order is being packed")
   },8000)

   setTimeout(function(){
    alert("Your order is out for delivery")
   },10000)

   setTimeout(function(){
    alert("Order Delivered")
   },12000)
   
    

}