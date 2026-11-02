'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    let totalSum: number = 0;

    let minVal: number = arr[0];
    let maxVal: number = arr[0];

    for(let i = 0; i < arr.length; i++){
        let currentNumber: number = arr[i];

        totalSum += currentNumber;
        if(currentNumber < minVal){
            minVal = currentNumber;
        }
        if(currentNumber > maxVal){
            maxVal = currentNumber;
        }
    }
    let minSum: number = totalSum - maxVal;
    let maxSum: number = totalSum - minVal;

    console.log(`${minSum} ${maxSum}`);

}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
