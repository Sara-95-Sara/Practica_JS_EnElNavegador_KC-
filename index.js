


const list = document.getElementById("list");

const addTransaction = document.getElementById("addTransaction");



const formValue = document.getElementById("formValue");

let newAhorro  = 0;
let newValueIngreso = 0;
let newValueGasto = 0;
addTransaction.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const ahorro = document.querySelector(".valueAhorro");

    const concept = document.getElementById("concept");
    const cantidad = document.getElementById("cantidad");

    const ingreso = document.querySelector(".ingresoPrecio");
    const gasto = document.querySelector(".gastoPrecio");


    
    if(cantidad.value >= 0) {
        const positivoValue = Number(cantidad.value);

        newValueIngreso = newValueIngreso  + positivoValue;
        newAhorro = newAhorro + positivoValue;


        ingreso.innerHTML = `${newValueIngreso}.00€`;
        ahorro.innerHTML = `${newAhorro}.00€`;
    
    } else {
        const negativoValue = Number(cantidad.value);

        newValueGasto = newValueGasto  +  negativoValue;
        newAhorro = newAhorro + negativoValue;

        gasto.innerHTML = `${newValueGasto}.00€`;
        ahorro.innerHTML = `${newAhorro}.00€`;

      
    }

    


    const newList = document.createElement('li');
    newList.classList.add('newL');
    //console.log(newList);
        
    
    let guardado = {
        concept: concept.value,
        cantidad: cantidad.value,
        id: Math.floor(Math.random() * 100000000),
    } 

    newList.innerHTML = ` 
        <div>${guardado.concept} 
        ${guardado.cantidad}.00€
        <button class = "deleteLi" onclick = "deleteLIst(${guardado.id})">╳</button> 
        </div>
    `;

    list.appendChild(newList);

    function deleteList(id) {
        guardado = list.filter(guardado => id !== guardado.id);
        return list.push(guardado);
    }


    concept.value = "";
    cantidad.value = "";
    

});