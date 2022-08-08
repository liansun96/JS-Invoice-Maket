let items = document.querySelector('#items');
let quantity = document.querySelector('#quantity');
let addBtn = document.querySelector('#addBtn');
let inputForm = document.querySelector('#inputForm');
let rows = document.querySelector('#rows');
let total = document.querySelector('#total');


products.forEach(function(product){
    let newOption = new Option(product.name,product.id);
    // console.log(newOption);
    items.append(newOption);
});

inputForm.addEventListener('submit',function(e){
    e.preventDefault();
    let currentProduct = products.find(product=> product.id == items.value);
    let cost = currentProduct.price * quantity.valueAsNumber;
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
                        <td>${currentProduct.name}</td>
                        <td class="text-end">${currentProduct.price}</td>
                        <td class="text-end">${quantity.valueAsNumber}</td>
                        <td class="text-end cost">${cost}</td>
                      `;

    rows.append(newTr);
    inputForm.reset();
    // console.log(newTr);         
    // console.log(items.value,quantity.value,currentProduct);
    let costs = document.querySelectorAll('.cost');
    console.log(costs);
    let totalCost = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);

    console.log(totalCost)

    total.innerText = totalCost;
});





 
