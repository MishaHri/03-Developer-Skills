// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log("Misha Hri");

//problem 2
//understand the problem
//function should receive 2 arrays
// when we have 2 arrays what we have to do ?? we need to merge 2 arrays

//breaking up in to sub problem
//1 how to merg 2 arrays?

const temperatures = [1, 5, 8, -3, -8, "error", 23]

const calcTempAmplitude = function (t1, t2) {


  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i<temps.length; i++) {
    const curTemp = temps[i];

    if(typeof curTemp !== "number") continue;
  if(curTemp > max) max = curTemp;
  if (curTemp < min) min = curTemp;
  }
  console.log(max, min)
  return (max-min) ;
  }

//   // call the function with some values

//   calcTempAmplitude([3, 5, 6]);

// const amplitude = calcTempAmplitude([3, 5, 6,], [9, 0, 7]);
// console.log(amplitude)


//1 understand the problem
//a. need to print elements of the array and increase by 1 the number of days.

//2. breaking the problem in small problems
//a. print each element of the array and transfor it in a string(always define a variable to hold the result and after sum
//b. increase the number of days with one
//put the loop in a centence line
//c. print the result


const printForecast = function (arr) {
  for (let i = 0; i< arr.length; i++){
    //define an empty array to keep the values
    let str = ``;
  // console.log(`...${arr[i]}*C in ${i+1} days`);
  str = str + `${arr[i]} *C in ${i+1} days`;
  console.log(`...` + str);
}
};

printForecast([17, 21, 23]);
