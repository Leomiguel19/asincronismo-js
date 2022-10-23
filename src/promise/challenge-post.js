import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Nuevo Producto de Leonardo",
    "price": 2000,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));


// Para ver si se agrego el producto correctamente, usar esta url. Cambiar "id" por el numero de id que retorna la consola
/*
https://api.escuelajs.co/api/v1/products/id
*/

// En los comentarios de esta clase se pueden encontrar los demas metodos PUT, DELETE, PATCH...
/* 
https://platzi.com/clases/3175-asincronismo-js/50098-fetch-post/
*/