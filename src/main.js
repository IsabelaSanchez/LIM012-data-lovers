import { example } from './data.js';
// import data from './data/atletas/atletas.js';
 import dataLol from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

  const dataFiltradoRol = (evento)=> {
    //debugger;
    // console.log(rol.target.value);
    let rol = evento.target == undefined ? evento : evento.target.value;
    let stringTemplate = '';
    let container = document.getElementById('container');

    for (const prop in dataLol.data){
      if (rol == '-1' || dataLol.data[prop].tags.indexOf(rol) != -1){

        stringTemplate+= `
        <div id='box' class="box">
          <img src=${dataLol.data[prop].splash} class="splash"/>
          <p id='name' class="nameCamp">${dataLol.data[prop].name}</p>
          <p id='title'class="titleCamp">${dataLol.data[prop].title}</p>
        </div>`

      }
    }

    container.innerHTML= stringTemplate;
  }

  // dataFiltradoRol;

  let listRoles = document.getElementById("roles");

  listRoles.addEventListener("change", dataFiltradoRol);

  dataFiltradoRol('-1');

  /*Ordenar  en orden alfabético
  const alphabeticalOrder= (inicial, selection) =>{
    const result = inicial;
    if (selection === 'A-Z') {
      result.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        return -1;
      });
    }
    if (selection === 'Z-A') {
      result.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    return -1;
  });
}
return result;
};


  const selectOrder=document.getElementById('selectOrder')
  selectOrder.addEventListener('change',() =>{
    const selectOption=selectOrder.value;
    container.innerHTML='';
  dataFiltradoRol(alphabeticalOrder(dataLol, selectOption));
  });


  /*const dataTodosLosCampeones=dataLol.data;
  let stringTemplate = '';
  const container = document.getElementById('container');
  for (const mostrar in dataTodosLosCampeones){
    stringTemplate+= `
    <div id='box'>
    <img src=${dataTodosLosCampeones[mostrar].splash} class='splash'}/>
    <p><button id='name'>${dataTodosLosCampeones[mostrar].name}</button></p>
    <p id='title'>${dataTodosLosCampeones[mostrar].title}</p>
    </div> `
  }
  container.innerHTML=stringTemplate;*/
  /*Filtro Tank
  let stringTemplateTank='';
  const containerTank=document.getElementById('containerTank');
  for (const mostrarTank in dataTodosLosCampeones){
    if (dataTodosLosCampeones[mostrarTank].tags.indexOf("Tank") != -1){
      stringTemplateTank+= `
      <div id='box'>
      <img src=${dataTodosLosCampeones[mostrarTank].img}/>
      <p><button id='name'>${dataTodosLosCampeones[mostrarTank].name}</button></p>
      <p id='title'>${dataTodosLosCampeones[mostrarTank].title}</p>
      </div>`
  }};
  containerTank.innerHTML= stringTemplateTank;
  */
