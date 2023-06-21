
function findMax(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let max = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; 
      }
    }
  
    return max;
  }
  
  const numbers = [4, 7, 2, 9, 1, 5];
  const maxNumber = findMax(numbers);
  console.log(maxNumber); 
  