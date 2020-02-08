slowMath.add(6, 2)      //adds the two arguments
.then(result => {       
  console.log(result);
  return slowMath.multiply(result, 2);  //multiplies result by 2
})
.then(result => {       
  console.log(result);      
  return slowMath.divide(result, 4);   //divides result by 4
})
.then(result => {      
  console.log(result);
  return slowMath.subtract(result, 3);   //subtracts 3 from result
})
.then(result => {       
  console.log(result);
  return slowMath.add(result, 98);   //adds 98 to result
})
.then(result => {       
  console.log(result);
  return slowMath.remainder(result, 2);   //finds remainder by dividing result by 2
})
.then(result => {       
  console.log(result);
  return slowMath.multiply(result, 50);  //multiplies result by 
})
.then(result => {       
  console.log(result);
  return slowMath.remainder(result, 40);  //finds remainder by dividing result by 40
})
.then(result => {
  console.log(result);
  return slowMath.add(result, 32);   //adds 32 to result
})
.then(result => {
  console.log('The result is ' + result + '.')   //logs final result
})
.catch(e => console.log('There has been an error'));   //logs error message if error occurs