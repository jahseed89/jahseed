function divisor(number) {
  var array = [];
  for(let currentNumber = 1; currentNumber <= number; currentNumber++) {

    // Check for divisible by 2
    if(currentNumber % 2 === 0) {
      // console.log("yu")
      array.push("yu")
    }

    // Check for divisible by 3
    else if(currentNumber % 3 === 0) {
      // console.log("gi");
      array.push("gi")
    }

    // Check for divisible by 5
    else if(currentNumber % 5 === 0) {
      // console.log("oh");
      array.push("oh");
    }

    else {
      array.push(currentNumber);
    }

  }

  return array;
}

divisor(15)