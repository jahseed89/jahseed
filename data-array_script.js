// Create data array with the given values
let data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 },
];
// declare interestCalculator function accepting an array argument/parameter
function interestCalculator(arr) {
  for (let obj of arr) {
    // Determine rate  for each object
    if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
      obj.rate = 3;
    } else if (obj.principal >= 2500 && obj.time >= 3) {
      obj.rate = 4;
    } else if (obj.principal < 2500 || obj.time <= 1) {
      obj.rate = 2;
    } else {
      obj.rate = 1;
    }
    // Calculate simple interest with given formula
    obj.interest = (obj.principal * obj.rate * obj.time) / 100;
  }
  // create and assign interestData
  let interestData = arr;
  // log interestData to console
  console.log(interestData);
  // return interestdata
  return interestData;
}
// call function with data array
interestCalculator(data);