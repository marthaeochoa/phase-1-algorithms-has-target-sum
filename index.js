function hasTargetSum(array, target) {
  // Iterate through the array
  for(let i=0; i < array.length; i++){
    // iterate through the array again 
    for(let n= i+1; n < array.length; n++){
      // adding the numbers and comparing them to target
      if(array[i]+array[n] === target){
        return true
      }
    }
  }

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  takes an array and a target number 
  if the numbers in the array can add up to the target, true
  if not false
*/

/*
  Add written explanation of your solution here

  I want to iterate the array to single out the numbers, 
  created a for loop to iterate through the array with different variables
  then compared the sum of those variables to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
