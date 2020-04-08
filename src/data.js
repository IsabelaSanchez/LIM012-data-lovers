import dataLol from './data/lol/lol.js';


let listadoHeroes = [];
let listadoHeroesMostrar = [];

export const nombreAscendente = (a,b) => {
    if ( a.name < b.name ){
      return -1;

    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

export const nombreDescendente = ( a, b) => {
    // debugger;
    if ( a.name < b.name ){
      return 1;
    }
    if ( a.name > b.name ){
      return -1;
    }
    return 0;
}

export const HPorden = ( a, b) => {
  //debugger;
  if ( a.stats.hp < b.stats.hp ){
    return 1;

  }
  if ( a.stats.hp > b.stats.hp ){
    return -1;
  }
  return 0;
}

export const RAorden = ( a, b) => {
  //debugger;
  if ( a.stats.attackrange < b.stats.attackrange ){
    return 1;

  }
  if ( a.stats.attackrange > b.stats.attackrange ){
    return -1;
  }
  return 0;
}

  export const dataFiltradoRol = (rol)=> {
    let top = document.getElementById("top");
    listadoHeroes = [];
    for (const prop in dataLol.data){
      if (rol == '-1' || dataLol.data[prop].tags.indexOf(rol) != -1)
      {
        listadoHeroes.push(dataLol.data[prop]);
      }
 }

 dataFiltradoTop(top.value);

 // dataFiltradoOrden(listOrden.value);
 // container.innerHTML= stringTemplate;
}

export const dataFiltradoTop = (top) => {
 // debugger;
 // let top = param.target == undefined ? param : param.target.value;
 let orden = document.getElementById("orden");

 if (top != '-1'){
   let listTop = [];

   if (top == "HP")
     listTop = listadoHeroes.sort(HPorden);
   else
     listTop = listadoHeroes.sort(RAorden);

   listadoHeroesMostrar = listTop.slice(0, 10);
 }
 else
 {
   listadoHeroesMostrar = listadoHeroes;
 }

 dataFiltradoOrden(orden.value);
}

export const dataFiltradoOrden = (orden) => {
 // let orden = param.target == undefined ? param : param.target.value;
 let stringTemplate = '';
 let container = document.getElementById('container');
 let listOrden = [];
 if (orden == "AZ")
   listOrden = listadoHeroesMostrar.sort(nombreAscendente);
 else
   listOrden = listadoHeroesMostrar.sort(nombreDescendente);
 for (const item in listOrden)
 {
       stringTemplate += `
       <div id='box' class="box">
        <a href='#'>
         <img src=${listOrden[item].splash} class="splash"/>
         <p id='name' class="nameCamp">${listOrden[item].name}</p>
         <p id='title'class="titleCamp">${listOrden[item].title}</p>
        </a>
       </div>`
 }
 container.innerHTML= stringTemplate;
 mostrarConteo(listOrden.length);
}

export const mostrarConteo =(cantidad) =>{
let conteo = document.getElementById('conteo');
let mensaje =  `Cantidad:  ${cantidad}`;
conteo.value = mensaje;
}



/* Ejecucion del filtro roles "Todos" */
dataFiltradoRol('-1'); //Es el primero que se ejecuta cuando se carga la página

/*const dataFiltradoRol = (evento)=> {
  //debugger;
  //console.log(rol.target.value);
  let rol = evento.target == undefined ? evento : evento.target.value;
  let stringTemplate = '';
  let container = document.getElementById('container');
  const modal=document.getElementById('overlay');

  for (const prop in dataLol.data){
    const divBox=document.createElement('div');
    divBox.setAttribute('class', 'box' );
    if (rol == '-1' || dataLol.data[prop].tags.indexOf(rol) != -1){
      divBox.innerHTML+= `
      <a href='#' id='box'>
        <img src=${dataLol.data[prop].splash} class="splash"/>
        <p id='name' class="nameCamp">${dataLol.data[prop].name}</p>
        <p id='title'class="titleCamp">${dataLol.data[prop].title}</p>
      </a>`
      divBox.addEventListener('click',(event)=>{
        event.preventDefault();
        modal.setAttribute('class','modal');
        modal.classList.add('show');
      });
    }
    container.appendChild(divBox);
  }
}

*/
