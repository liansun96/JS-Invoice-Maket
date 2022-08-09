let items = document.querySelector('#items');
let quantity = document.querySelector('#quantity');
let addBtn = document.querySelector('#addBtn');
let inputForm = document.querySelector('#inputForm');
let rows = document.querySelector('#rows');
let total = document.querySelector('#total');


function del(event){
    if(confirm('Are You Sure To Delet This Item?')){
        event.target.parentElement.parentElement.remove();
    }
    calcTotal();        
}

function calcTotal(){
    let costs = document.querySelectorAll('.cost');    
    total.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);    
}


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
                        <td>
                        ${currentProduct.name}
                        <br>
                        <p class='mb-0 text-danger fw-lighter del-btn' onclick='del(event)'>Delet</p>
                        </td>
                        <td class="text-end">${currentProduct.price}</td>
                        <td class="text-end">${quantity.valueAsNumber}</td>
                        <td class="text-end cost">${cost}</td>
                      `;

    rows.append(newTr);
    inputForm.reset();
    // console.log(newTr);         
    // console.log(items.value,quantity.value,currentProduct);
    calcTotal();    
});





 
