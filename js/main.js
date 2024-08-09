import { descripciones } from './descripcion.js';

let root = document.querySelector(".root");

root.innerHTML = `
<div class="header">
    <div class="title">TechMap</div>
    <div class="clasificacion">
        <div class="item">PC</div>
        <div class="item">GPU</div>
        <div class="item">CPU</div>
        <div class="item">Fuentes de poder</div>
        <div class="item">Placa madre</div>
        <div class="item github">
            <a href="https://github.com/kgarcia18?tab=repositories">Ir a GitHub</a>
        </div>
    </div>
</div>

<div class="filtros">
    <h3>Filtros</h3>
    <hr>
    <label class="checkbox-container">Ranuras
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Puertos
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Alimentación
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Disipadores
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Chips
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
</div>
    
<div class="botones">
    <button class="btn btn1"></button>
    <button class="btn btn2"></button>
    <button class="btn btn3"></button>
    <button class="btn btn4"></button>
    <button class="btn btn5"></button>
    <button class="btn btn6"></button>
    <button class="btn btn7"></button>
    <button class="btn btn8"></button>
    <button class="btn btn9"></button>
    <button class="btn btn10"></button>
    <button class="btn btn11"></button>
    <button class="btn btn12"></button>
</div>
`;

// Crear y agregar modales
//descripciones.forEach((datos, indice) => {
//    const modal = document.createElement('div');
//    modal.classList.add('modal');
//    modal.classList.add(`modal${indice + 1}`);
//    modal.innerHTML = `
//        <div class="modal-contenido">
//            <h1>${datos.titulo}</h1>
//            <p>${datos.descripcion}</p>
//        </div>
//    `;
//    document.body.appendChild(modal);
//});

// Manejo de eventos para abrir y cerrar modales
//document.querySelectorAll('.btn').forEach((boton, indice) => {
//    boton.addEventListener('click', () => {
//        const modal = document.querySelector(`.modal${indice + 1}`);
//        if (modal) {
//            modal.style.display = 'block';
//        }
//    });
//});

//window.addEventListener('click', (evento) => {
//    document.querySelectorAll('.modal').forEach((modal) => {
//        if (evento.target === modal) {
//            modal.style.display = 'none';
//        }
//    });
//});
