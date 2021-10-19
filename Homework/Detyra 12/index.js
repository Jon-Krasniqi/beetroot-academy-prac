var starter = 0;

function renderNumbersWhile(endNumber) {
  if (endNumber <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
  while (starter < endNumber) {
    starter++;
    console.log(starter);
  }
}

console.log(renderNumbersWhile(10));

console.log(
  "-----------------------------------------------------------------------------"
);

starter = 0;

function renderNumbersDoWhile(endNumberDo) {
  if (endNumberDo <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
  do {
    starter++;
    console.log(starter);
  } while (starter < endNumberDo);
}

console.log(renderNumbersDoWhile(20));

console.log(
  "-----------------------------------------------------------------------------"
);

function renderNumbersFor(endNumberFor) {
  if (endNumberFor <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
  for (var starter = 1; starter < endNumberFor; starter++) {
    console.log(starter);
  }
}

console.log(renderNumbersFor(31));

console.log(
  "-----------------------------------------------------------------------------"
);

function renderEvenNumbers(firstNumber, endNumber) {
  if (firstNumber >= endNumber) {
    return "Numeri i pare duhet te jete me i vogel se numri i dyte!";
  }
  for (; firstNumber <= endNumber; firstNumber++) {
    if (firstNumber % 2 == 0) {
      console.log(firstNumber);
    }
  }
}

console.log(renderEvenNumbers(0, 20));
