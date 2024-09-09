const amigos = 6;
const ticket = 120;
const bebidas = 18;

const gastos_a_dividir = ticket - bebidas;

console.log(`Total a dividir entre el grupo: ${gastos_a_dividir}€`);
console.log(`A pagar por persona: ${gastos_a_dividir/amigos}`);