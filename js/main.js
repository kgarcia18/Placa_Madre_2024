import { descripciones } from './descripcion.js';

let root = document.querySelector(".root");

root.innerHTML = `
<div class="header">
    <div class="title">TechMap</div>
    <div class="clasificacion">
        <div>PC</div>
        <div>GPU</div>
        <div>CPU</div>
        <div>Fuentes de poder</div>
        <div>Placa madre</div>
        <div class="item github">
            <a href="https://github.com/kgarcia18?tab=repositories">Ir a GitHub</a>
        </div>
    </div>
</div>

<div class="filtros">
    <h3>Filtros</h3>
    <hr>
    <label class="checkbox-container">Ranuras
        <input type="checkbox" data-filter="ranuras">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Puertos
        <input type="checkbox" data-filter="puertos">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Alimentación
        <input type="checkbox" data-filter="alimentacion">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Disipadores
        <input type="checkbox" data-filter="disipadores">
        <span class="checkmark"></span>
    </label>
    <label class="checkbox-container">Chips
        <input type="checkbox" data-filter="chips">
        <span class="checkmark"></span>
    </label>
</div>

<div class="botones">
    <div class="btn btn1" data-tooltip="Interconexión de componentes periféricos" data-category="puertos"></div>
    <div class="btn btn2" data-tooltip="Pila" data-category="alimentacion"></div>
    <div class="btn btn3" data-tooltip="Chipset puente sur" data-category="chips"></div>
    <div class="btn btn4" data-tooltip="Tarjeta gráfica" data-category="disipadores"></div>
    <div class="btn btn5" data-tooltip="Puertos externos" data-category="puertos"></div>
    <div class="btn btn6" data-tooltip="Puertos USB" data-category="puertos"></div>
    <div class="btn btn7" data-tooltip="Puerto paralelo" data-category="puertos"></div>
    <div class="btn btn8" data-tooltip="Disipador" data-category="disipadores"></div>
    <div class="btn btn9" data-tooltip="CPU" data-category="chips"></div>
    <div class="btn btn10" data-tooltip="Ranuras de memoria RAM" data-category="ranuras"></div>
    <div class="btn btn11" data-tooltip="Conector del cable IDE" data-category="puertos"></div>
    <div class="btn btn12" data-tooltip="BIOS" data-category="chips"></div>
</div>

<div class="info-contenedor"></div>
`;

let filtros = document.querySelector('.filtros');
let infocontenedor = document.querySelector('.info-contenedor');

let tooltipsActivos = {};

document.querySelectorAll('.btn').forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        let datos = descripciones[indice];

        let listaCaracteristicas = datos.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join("");
        let listadoImagenes = datos.imagenes.map(imagen => 
            `<div><img src="${imagen}" alt="${datos.titulo}" class="imagen-info"></div>`
        ).join("");

        infocontenedor.innerHTML = `
            <div class="info-contenido">
                <h1>${datos.titulo}</h1>
                <p>${datos.descripcion}</p>
                <h2>Características</h2>
                <ul>${listaCaracteristicas}</ul>
                <h2>Ejemplos</h2>
                <div class="imagenes">${listadoImagenes}</div>
                <button class="btn-regresar">Regresar</button>
                <button class="btn-descargar">Descargar Información</button>
            </div>
        `;

        filtros.classList.add('hidden');
        infocontenedor.classList.add('visible');

        document.querySelector('.btn-regresar').addEventListener('click', () => {
            filtros.classList.remove('hidden');
            infocontenedor.classList.remove('visible');
            infocontenedor.innerHTML = ''; // Limpia el contenido
        });

        document.querySelector('.btn-descargar').addEventListener('click', () => {
            html2canvas(document.querySelector('.info-contenido')).then(canvas => {
                let link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'informacion.png';
                link.click();
            });
        });
    });
});

document.querySelectorAll('.checkbox-container input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        let categoriaSeleccionada = checkbox.getAttribute('data-filter');

        document.querySelectorAll('.btn').forEach((boton) => {
            let categoriaBoton = boton.getAttribute('data-category');

            if (checkbox.checked && categoriaBoton === categoriaSeleccionada) {
                boton.classList.add('show-tooltip');
                tooltipsActivos[categoriaBoton] = true; // guarda activo
            } else if (!checkbox.checked && categoriaBoton === categoriaSeleccionada) {
                boton.classList.remove('show-tooltip');
                delete tooltipsActivos[categoriaBoton]; // elimina activo
            }
        });
    });
});

document.querySelectorAll('.btn').forEach((boton) => {
    let categoriaBoton = boton.getAttribute('data-category');

    boton.addEventListener('mouseenter', () => {
        let checkbox = document.querySelector(`.checkbox-container input[data-filter="${categoriaBoton}"]`);
        if (!checkbox.checked || tooltipsActivos[categoriaBoton]) {
            boton.classList.add('show-tooltip');
        }
    });

    boton.addEventListener('mouseleave', () => {
        if (!tooltipsActivos[categoriaBoton]) {
            boton.classList.remove('show-tooltip');
        }
    });
});
