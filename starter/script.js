// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log("Misha Hri");

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

  // call the function with some values

  calcTempAmplitude([3, 5, 6]);

const amplitude = calcTempAmplitude([3, 5, 6,], [9, 0, 7]);
console.log(amplitude)


//problem 2
//understand the problem
//function should receive 2 arrays
// when we have 2 arrays what we have to do ?? we need to merge 2 arrays

//breaking up in to sub problem
//1 how to merg 2 arrays?
