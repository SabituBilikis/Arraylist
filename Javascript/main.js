let bags = [
    {name:"bag1", image:"bag1.png", price:12},
    {name:"bag2", image:"bag2.png", price:33},
    {name:"bag1", image:"bag3.png", price:12},
    {name:"bag2", image:"bag4.png", price:33},
    {name:"bag1", image:"bag5.png", price:12},
    {name:"bag2", image:"bag3.png", price:33},
    {name:"bag1", image:"bag1.png", price:12},
    {name:"bag2", image:"bag2.png", price:33},
    {name:"bag1", image:"bag1.png", price:12},
    {name:"bag2", image:"bag2.png", price:33},
    {name:"bag1", image:"bag1.png", price:12},
    {name:"bag2", image:"bag2.png", price:33},
    {name:"bag1", image:"bag1.png", price:12},
    {name:"bag2", image:"bag2.png", price:33},
];

let cart = []


function load() {
    products.forEach((i, index)=> {
        
        let item = document.createElement('div');
        item.innerHTML = `
        <div class="bag">
        <img src="../Images/${i.image}">
        <p class="name">${i.name}</p>
        <p class="price">$${i.price}</p>
        <button class="add">Add to cart</button>
        </div>
        `
        const items = document.getElementById('items');

        item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
            addTocart(index)
        });

        items.append(item)
    });
}

load();

function addTocart(index){
    cart.push(index)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)
}