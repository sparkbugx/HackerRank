'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'pmix' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function pmix(s: string, k: number): string {

    const values: {[key: string]: number } = {
        'A':0,
        'B': 1,
        'C': 2,
        'D': 3
    };
    let proteins = s.split('').map(letter => values[letter])
    const n = proteins.length
    let newState = new Array(n);

    for (let i = 0; i < n; i++){
        let nextRight = (i + 1 ) % n ;
        newState[i] = proteins[i] ^ proteins[nextRight];
    }
    proteins = newState;

    let actualStateInLetters = proteins.map(num => toCharm[num].join(''));
    console.log('State of the second', actualStateInLetters);

}
const finalString = proteins.map(num => toChar[num]).join('')
return finalString;


function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const k: number = parseInt(firstMultipleInput[1], 10);

    const s: string = readLine();

    const result: string = pmix(s, k);

    ws.write(result + '\n');

    ws.end();
}

console.log('The new Simulatiaon is On')
const result = pmix('AAAAD', 15)
console.log("Simulation Ended")
console.log(result)
