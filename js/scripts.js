function sayHello(name, age) {
  console.log("Hola " + name + ", tienes " + age + " años");
}

sayHello("Celia", 23);

function calculateSquareArea(side) {
  console.log(side * side);
}

calculateSquareArea(3);

function calculateTriangleArea(b, h) {
  console.log((b * h) / 2);
}

calculateTriangleArea(15, 30);

function calculateCircleArea(radius) {
  console.log(3.14 * radius * radius);
}

calculateCircleArea(26);

function celsiusToFarenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}

celsiusToFarenheit(25);

function farenheitToCelsius(farenheit) {
  console.log((farenheit - 32) / 1.8);
}

farenheitToCelsius(80);

function totalPrice(price) {
  console.log((price * 21) / 100 + price);
}

totalPrice(10);

function writeMessage(name, material, size, note) {
  console.log(
    name +
      " ha pedido una caja de " +
      material +
      " del tamaño " +
      size +
      "." +
      note
  );
}

writeMessage("Celia", "zapatos", 39, "Gracias por su compra.");

function calculateAverage(numberA, numberB, numberC) {
  const average = (numberA + numberB + numberC) / 3;
  return average;
}

const average = calculateAverage(8, 6, 4);
console.log(average);

function calculateDiscount(price, dis) {
  const discount = price - (price * dis) / 100;
  return discount;
}

const discount = calculateDiscount(15, 25);
console.log(discount);

function twoWords(word1, word2) {
  const words = word1 + "-" + word2;
  return words;
}
const words = twoWords("Jiménez", "Castro");
console.log(words);

function calculateMeters(km) {
  const meters = km * 100;
  return meters;
}
const meters = calculateMeters(12);
console.log(meters);

function calculateSeconds(h) {
  const seconds = h * 3600;
  return seconds;
}
const seconds = calculateSeconds(4);
console.log(seconds);
