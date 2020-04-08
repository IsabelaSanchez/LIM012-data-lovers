import { nombreAscendente,nombreDescendente,HPorden,RAorden,dataFiltradoRol,dataFiltradoTop,dataFiltradoOrden,mostrarConteo } from './data.js';
// import data from './data/atletas/atletas.js';
//import data from './data/pokemon/pokemon.js';


/* Agregar eventos */
// let listRoles = document.getElementById("roles");
// let listOrden = document.getElementById("orden");
// let listTop = document.getElementById("top");

// listRoles.addEventListener("change", dataFiltradoRol);
// listOrden.addEventListener("change", dataFiltradoOrden);
// listTop.addEventListener("change", dataFiltradoTop);


const selectRoles = document.querySelector('#roles');
const selectTop = document.querySelector('#top');
const selectOrden = document.querySelector('#orden');

selectRoles.addEventListener("change", (event)=>{
 dataFiltradoRol(event.target.value);
});

selectTop.addEventListener("change", (event)=>{
 dataFiltradoTop(event.target.value);
});

selectOrden.addEventListener("change", (event)=>{
 dataFiltradoOrden(event.target.value);
});
