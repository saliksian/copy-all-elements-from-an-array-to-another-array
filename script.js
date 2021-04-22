let numbers = [1, 2, 3, 4];
let copyNumbers =[];
let index=0;
do {
    copyNumbers[index] = numbers[index]
    index++
} while (index<numbers.length);

console.log(copyNumbers);