/**Express calculator functions */
const ExpressError = require('./error');

function mean(nums) {
    if (nums.length === 0) {
      throw new ExpressError("Error: Calculator requires number inputs", 400)
    }
  
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}
  
function mode(nums) {
    if (nums.length === 0) {
      throw new ExpressError("Error: Calculator requires number inputs", 400)
    }
  
    const numberCount = {};
    let maxCount = 0;
    let modes = [];
  
    for (const num of nums) {
      if (numberCount[num] === undefined) {
        numberCount[num] = 1;
      } else {
        numberCount[num]++;
      }
  
      if (numberCount[num] > maxCount) {
        maxCount = numberCount[num];
        modes = [num];
      } else if (numberCount[num] === maxCount) {
        modes.push(num);
      }
    }
  
    return modes;
}  

function median(nums) {
    if (nums.length === 0) {
      throw new ExpressError("Error: Calculator requires number inputs", 400)
    }
  
    const sortedNums= nums.slice().sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
  
    if (nums.length % 2 === 0) {
      return (sortedNums[mid - 1] + sortedNums[mid]) / 2;
    } else {
      return sortedNums[mid];
    }
}

function validateNums(numsStr) {
let result = [];
    for (let i = 0; i < numsStr.length; i++) {
        let makeNum = Number(numsStr[i]);

        if (Number.isNaN(makeNum)){
            return new Error(
                `Error: The given value '${numsStr[i]}' is not a valid number.`
            );
        }
        result.push(makeNum);
    }
    return result;
}
  
module.exports = {mean, median, mode, validateNums}