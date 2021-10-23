let bags = [
    {name:"bag1", image:"bag1.png", price:112},
    {name:"bag2", image:"bag2.png", price:1033},
    {name:"bag3", image:"bag3.png", price:1200},
    {name:"bag4", image:"bag4.png", price:3350},
    {name:"bag5", image:"bag5.png", price:1260},
    {name:"bag6", image:"bag3.png", price:33100},
    {name:"bag7", image:"bag1.png", price:12800},
    {name:"bag8", image:"bag2.png", price:33500},
    {name:"bag9", image:"bag1.png", price:12400},
    {name:"bag10", image:"bag2.png", price:33600},
    {name:"bag11", image:"bag1.png", price:12300},
    {name:"bag12", image:"bag2.png", price:33200},

]

// displaying an array on the DOM
let bagSection = document.getElementById('bag-wrapper');
let html ="";
bags.forEach(e => {
    html += `
   
        <div class="col">
            <div class="card h-100">
              <img src="../Images/${e.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <p class="card-text"> N ${e.price}</p>
              </div>
            </div>
        </div>
  
    `
    console.log(e) 
    bagSection.innerHTML = html
})

//<div class="bag-card">
    //       <div class="bag-image">
    //         <img src="../Images/bag1.png" alt="">
    //       </div>
    //       <div class="bag-info">
    //         <h1>Name</h1>
    //         <h3 class="price">N234</h3>
    //       </div>
    // </div>   
    
// let cart = []

// function load() {
//     const cartData = localStorage.getItem('cart');
//     cart = JSON.parse(cartData)

//     cart.forEach((i)=> {
        
//         let item = document.createElement('div');
//         item.innerHTML = `
//         <div class="bag">
//         <img src="../Images/${bags[i].image}">
//         <p class="name">${bags[i].name}</p>
//         <p class="price">$${bags[i].price}</p>
//         <button class="remove">Remove</button>
//         </div>
//         `
//         const items = document.getElementById('items');

//         item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
//             remove(i, e)
//         });

//         items.append(item)
//     });
//     tot();
// }

// load();

// function tot(){
//     let total = 0;
//     cart.forEach((i)=> {
//         total += bags[i].price
//     });
//     document.getElementById('total').innerText = total;
// }

// function remove(i, e){
//     for (let j = 0; j < cart.length; j++) {
//         if(cart[j] === i){
//             cart.splice(j, 1)
//         }
//     }
//     localStorage.setItem('cart', JSON.stringify(cart))
    
//     e.target.parentElement.remove();
//     tot();
//     alert(`${bags[i].name} removed from cart`)
    
// }