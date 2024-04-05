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
