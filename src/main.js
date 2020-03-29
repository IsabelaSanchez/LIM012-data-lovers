import { example } from './data.js';
// import data from './data/atletas/atletas.js';
 import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
/*Todo los campeones*/
const dataTodosLosCampeones=data.data
let stringTemplate = '';
for (const mostrar in dataTodosLosCampeones){
  stringTemplate+= `
  <div id='box'>
  <img src=${dataTodosLosCampeones[mostrar].splash} class='splash'}/>
  <p><button id='name'>${dataTodosLosCampeones[mostrar].name}</button></p>
  <p id='title'>${dataTodosLosCampeones[mostrar].title}</p>
  </div>
  `
};
container.innerHTML= stringTemplate;
/*Filtro Tank*/

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





let stringTemplateMage='';
const containerMage=document.getElementById('containerMage');

for (const mostrarMage in dataTodosLosCampeones){
  if (dataTodosLosCampeones[mostrarMage].tags.indexOf("Mage") != -1){
    stringTemplateMage+= `
    <div id='box'>
    <img src=${dataTodosLosCampeones[mostrarMage].img}/>
    <p><button id='name'>${dataTodosLosCampeones[mostrarMage].name}</button></p>
    <p id='title'>${dataTodosLosCampeones[mostrarMage].title}</p>
    </div>`
}};
containerMage.innerHTML= stringTemplateMage;

let stringTemplateAssassin='';
const containerAssassin=document.getElementById('containerAssassin');

for (const mostrarAssassin in dataTodosLosCampeones){
  if (dataTodosLosCampeones[mostrarAssassin].tags.indexOf("Assassin") != -1){
    stringTemplateAssassin+= `
    <div id='box'>
    <img src=${dataTodosLosCampeones[mostrarAssassin].img}/>
    <p><button id='name'>${dataTodosLosCampeones[mostrarAssassin].name}</button></p>
    <p id='title'>${dataTodosLosCampeones[mostrarAssassin].title}</p>
    </div>`
}};
containerAssassin.innerHTML= stringTemplateAssassin;

let stringTemplateFighter='';
const containerFighter=document.getElementById('containerFighter');

for (const mostrarFighter in dataTodosLosCampeones){
  if (dataTodosLosCampeones[mostrarFighter].tags.indexOf("Fighter") != -1){
    stringTemplateFighter+= `
    <div id='box'>
    <img src=${dataTodosLosCampeones[mostrarFighter].img}/>
    <p><button id='name'>${dataTodosLosCampeones[mostrarFighter].name}</button></p>
    <p id='title'>${dataTodosLosCampeones[mostrarFighter].title}</p>
    </div>`
}};
containerFighter.innerHTML= stringTemplateFighter;

let stringTemplateMarksman='';
const containerMarksman=document.getElementById('containerMarksman');

for (const mostrarMarksman in dataTodosLosCampeones){
  if (dataTodosLosCampeones[mostrarMarksman].tags.indexOf("Marksman") != -1){
    stringTemplateMarksman+= `
    <div id='box'>
    <img src=${dataTodosLosCampeones[mostrarMarksman].img}/>
    <p><button id='name'>${dataTodosLosCampeones[mostrarMarksman].name}</button></p>
    <p id='title'>${dataTodosLosCampeones[mostrarMarksman].title}</p>
    </div>`
}};
containerMarksman.innerHTML= stringTemplateMarksman;

let stringTemplateSupport='';
const containerSupport=document.getElementById('containerSupport');

for (const mostrarSupport in dataTodosLosCampeones){
  if (dataTodosLosCampeones[mostrarSupport].tags.indexOf("Support") != -1){
    stringTemplateSupport+= `
    <div id='box'>
    <img src=${dataTodosLosCampeones[mostrarSupport].img}/>
    <p><button id='name'>${dataTodosLosCampeones[mostrarSupport].name}</button></p>
    <p id='title'>${dataTodosLosCampeones[mostrarSupport].title}</p>
    </div>`
}};
containerSupport.innerHTML= stringTemplateSupport;

/*Ordenar  en orden alfabético
const alphabeticalOrder= (firstL, selection) =>{
  const result = firstL;
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



const selectOrder=document.querySelector('#selectOrder')
selectOrder.addEventListener('change',() =>{
  const selectOption=selectOrder.value;
  container.innerHTML='';
alphabeticalOrder(dataTodosLosCampeones, selectOrder);
*/

});
