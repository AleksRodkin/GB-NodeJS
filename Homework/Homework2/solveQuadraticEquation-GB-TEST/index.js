function solveQuadraticEquationWithDiscriminant(a, b, c) {
  const discriminant = (b * b) - (4 * a * c);
  console.log(b * b);
  console.log(4 * a * c);
  console.log(discriminant);

  if (discriminant < 0) {
    console.log("У данного квадратного уравнения нет корней");
    return;
  } 
  else if ((discriminant === 0)) {
    const x = -b / (2 * a);
    console.log(`Корень квадратного уравнения равен ${x}`);
    return x;
  } 
  else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Корни квадратного уравнения равны ${x1} и ${x2}`);
    return [x1, x2]
  }
}

module.exports = { solveQuadraticEquationWithDiscriminant };