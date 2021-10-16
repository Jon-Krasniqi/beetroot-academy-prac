function findTheEnigma(number) {
  var enigma = 100;

  if (!number) {
    return "Please provide a number";
  }
  if (number < enigma / 2) {
    return "Vlera e enigmes eshte per te pakten dy here me e madhe!";
  }
  if (number / 2 > enigma) {
    return "Vlera e enigmes eshte per te pakten dy here me e vogel!";
  }
  // if (number == enigma) {
  //   return "Vlera e enigmes eshte e sakt";
  // }

  return number == enigma
    ? "Vlera e enigmes eshte e sakt"
    : "Vlera e enigmes nuk eshte qelluar";
}

console.log(findTheEnigma(100));

console.log(
  "--------------------------------------------------------------------"
);

function colorMessage(color) {
  if (!color) {
    return "Please provide a color";
  }

  if (color == "E kuqe") {
    return "Your color is red";
  }

  if (color == "E kalter") {
    return "Your color is blue";
  }

  if (color == "E verdhe") {
    return "Your color is yellow";
  }

  if (color == "E gjelber") {
    return "Your color is green";
  }

  return "Unknown color message";
}

console.log(colorMessage("E kalter"));

console.log(
  "--------------------------------------------------------------------"
);

function switchColorMessage(color) {
  switch (color) {
    case "E kalter":
      return "Your color is blue";

    case "E verdhe":
      return "Your color is yellow";

    case "E kuqe":
      return "Your color is red";

    case "E gjelber":
      return "Your color is green";

    default:
      return "Please pick one of the options";
  }
}

console.log(switchColorMessage("E gjelber"));
