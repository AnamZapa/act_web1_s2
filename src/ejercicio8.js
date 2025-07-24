let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;

if (edad < 18) {
  console.log((tarifaBase * 0.80).toFixed(2)); // 20% de descuento
} else if (edad >= 65) {
  console.log((tarifaBase * 0.60).toFixed(2)); // 40% de descuento
} else {
  console.log(tarifaBase.toFixed(2)); // sin descuento
}
