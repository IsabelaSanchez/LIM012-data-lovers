import { nombreAscendente,
         nombreDescendente
         /*HPorden,
         RAorden,
         dataFiltradoRol,
         dataFiltradoTop,
         dataFiltradoOrden,
         mostrarConteo*/ } from '../src/data.js';

let listadoHeroes = [];
let listadoHeroesMostrar = [];

describe('Test de la función Orden Ascendente', () => {
  it('debe ser una función', () => {
    expect(typeof nombreAscendente).toBe('function');
  });

  it('devuelve un array de objetos ordenados de la A-Z', () => {
    expect(nombreAscendente(listadoHeroesMostrar, 'nombreAscendente')).toEqual('listOrden');
  });
});


describe('Test de la función Orden Descendente', () => {
  it('debe ser una función', () => {
    expect(typeof nombreDescendente).toBe('function');
  });

  it('devuelve un array de objetos ordenados de la Z-A', () => {
    expect(nombreDescendente(listadoHeroesMostrar, 'nombreDescendente')).toEqual('listOrden');
  });
});
