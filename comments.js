//this is mine
function testNumbers(number) {
  let result;
  if (number > 0) {
    result = "Grab your sunglasses";
  } else {
    result = "Stay home";
  }
  return result;
}

console.log(testNumbers(1));

let number = 1;
const result = number > 0 ? "Grab your sunglasses" : "Stay home";
console.log(result);

/*  Comments
on any line
*/

let count = 1;
console.log(count == 3);
