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
  if (number == enigma) {
    return "Vlera e enigmes eshte e sakt";
  }

  return "Vlera e enigmes nuk eshte qelluar";
}

console.log(findTheEnigma(400));

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

var otherColorMessage = "E kuqe";

switch (otherColorMessage) {
  case "E kalter":
    console.log("Your color is blue");
    break;

  case "E verdhe":
    console.log("Your color is yellow");
    break;

  case "E kuqe":
    console.log("Your color is red");
    break;

  case "E gjelber":
    console.log("Your color is green");
    break;

  default:
    console.log("Please pick one of the options");
    break;
}
