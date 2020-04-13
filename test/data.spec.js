import {dataFiltradoRol,dataFiltradoTop,dataFiltradoOrden,mostrarConteo} from '../src/data.js';


describe('dataFiltradoRol', () => {
  it('should return []', () => {
    expect(dataFiltradoRol('bard').length).toBe(0);
  });

  it('should return 52', () => {
    expect(dataFiltradoRol('Mage').length).toBe(52);
  });

  it('should return 24', () => {
    expect(dataFiltradoRol('Marksman').length).toBe(24);
  });

})

describe('dataFiltradoTop', () => {
  it('should return 10', () => {
    expect(dataFiltradoTop(dataFiltradoRol('todos'),'RA').length).toBe(10);
  });
  it('should return 10', () => {
    expect(dataFiltradoTop(dataFiltradoRol('todos'),'HP').length).toBe(10);
  });
});

//describe('dataFiltradoOrden', ()=>{
    //it('should return 134', ()=> {
     //expect(dataFiltradoOrden(('todos'),'AZ').length).toBe(134);
   //});
 //});


describe('Testear Objeto Funcion', () => {
  it('funcion dataFiltradoRol', () => {
    expect(typeof dataFiltradoRol).toBe('function');
  });

  it('funcion dataFiltradoTop', () => {
    expect(typeof dataFiltradoTop).toBe('function');
  });

  it('funcion dataFiltradoOrden', () => {
    expect(typeof dataFiltradoOrden).toBe('function');
  });

  it('funcion dataFiltradoOrden', () => {
    expect(typeof mostrarConteo).toBe('function');
  });

});



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
//comentario del package.json: /*"pretest": "npm run eslint && npm run htmlhint",*/
