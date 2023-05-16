import { insurance_plans } from "./json.js";

const listaDescripcion = (lista) => {
    let ul = document.createElement("ul");
    for (let el of lista) {
        /* console.log(el); */
        let li = document.createElement("li");
        li.textContent = el;
        ul.appendChild(li);
    }
    return ul;
}

const data = () => {
    let container = document.getElementById('datos');
    for (let i = 0; i < insurance_plans.length; i++) {
        let ul = listaDescripcion(insurance_plans[i].description);

        let div = document.createElement("div");
        div.className = "cards"
        div.innerHTML = `
        <img class="img-prod" src="https://comunidad.wiri.la/wp-content/uploads/2021/10/Blog-Wiri-Ar-Fotos-destacadas-1.jpg">
        <h3 class="title">${insurance_plans[i].title}</h3>
        <p class="price">${insurance_plans[i].price}</p>
        `;
        div.appendChild(ul).li;
        container.appendChild(div)
    }
}

data();


/* <p>Titulo: ' + ${insurance_plans[i].title} ', Descripción: ' + ${insurance_plans[i].description}  ', Precio: ' ${insurance_plans[i].price}  ', , Picture: ' ${ insurance_plans[i].pictureUrl}  '</p> */

// for (let j = 0; j < insurance_plans[i].description.length; j++) {
//     li += `
//     <li class = "lista-prod"> ${insurance_plans[i].description[j]}</li>`
// }

