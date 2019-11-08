"use strict";

const apuestaRodrigo = [118, 82, 28, 32, 52];
const apuestaVictor = [112, 72, 32, 33, 49];
const apuestaAlvaro = [105, 95, 12, 20, 62];

let resultados = [];

function recopilador() {
  let partidos = ["psoe-of", "pp-of", "ciud-of", "pode-of", "vox-of"];
  resultados = [];
  for (let i = 0; i < partidos.length; i++) {
    console.log(typeof document.getElementById(partidos[i].value))
    resultados.push(document.getElementById(partidos[i]).value);
  }
  comparador(resultados, apuestaRodrigo, "Rodrigo");
  comparador(resultados, apuestaAlvaro, "Álvaro");
  comparador(resultados, apuestaVictor, "Victor");
}

function comparador(resultados, apuesta, name) {
  let resultadoFinal = 0; 
  let final = [];
  let temp = [];
  for (let i = 0; i < resultados.length; i++) {
    resultados[i] >= apuesta[i]
      ? (temp = resultados[i] - apuesta[i])
      : (temp = apuesta[i] - resultados[i]);
    final.push(temp);
  }
  resultadoFinal = final.reduce((acc, el) => acc + el);
  document.getElementById(
    name
  ).innerHTML = `${name}: ${resultadoFinal}`;
}


function reset() {
    let names = ['Rodrigo', 'Victor', 'Álvaro'];
    let partidos = ["psoe-of", "pp-of", "ciud-of", "pode-of", "vox-of"];

    for(let i = 0; i < names.length; i++){
        document.getElementById(names[i]).innerHTML = "";
    }
    for (let i = 0; i < partidos.length; i++) {
        document.getElementById(partidos[i]).value = 0;
      }
}

