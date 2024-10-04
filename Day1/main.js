const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

let j = ages.length-1

console.log('the minimum age is :', ages[0]);
console.log('the maximum age is :', ages[j]);

console.log(ages);

let OddMiddleNumber = Math.floor(ages.length / 2)
let EvenMiddleNumber = (ages[ages.length / 2 -1] + ages[ages.length / 2]) / 2

if(ages.length % 2 === 0){
  console.log('the array is an even number\nthe numbers are:',ages[ages.length / 2 -1], ',',ages[ages.length / 2])
  console.log('\nAnd the sum of those 2 numbers are:', EvenMiddleNumber);
}else{
  console.log('the middle number is :', ages[OddMiddleNumber]);
}

OddMiddleNumber % 2 !== 0
 ?  console.log('the median of odd middle number is :',ages[OddMiddleNumber] / 2)
 :  console.log("the median of even middle numberis :",ages[EvenMiddleNumber] / 2)

 let SumOfNumbers = 0
 
for(let i = 0 ; i < ages.length ; i++){
  SumOfNumbers += ages[i]
}
console.log('the average of the ages are:', SumOfNumbers/ages.length);

console.log('the range of ages is :',ages[j]-ages[0]);

let numbers = SumOfNumbers/ages.length
let range = ages[j]-ages[0]

console.log(numbers);

let compare1 = ages[0] - numbers
let compare2 = ages[j] - numbers

if(compare1>compare2){
  console.log('the greatest number is :',compare1);
  console.log('the lowest number is :',compare2);
}else if (compare2>compare1){
  console.log('the greatest number is :', compare2);
  console.log('the lowest number is :', compare1);
}else{
  console.log('the numbers are not valid');
}
console.log('the absolute number of range is :',Math.abs(range));

let name = prompt('what is your name')