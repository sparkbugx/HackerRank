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
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3
    };
    const toChar = ['A', 'B', 'C', 'D'];
    const n = s.length;
    let proteins = new Int8Array(n);

    for(let i = 0; i < n; i++){
        proteins[i] = values[s[i]];
    }
    let jump = 1;
    while(k > 0){
        if(k % 2 === 1){
            let newState = new Int8Array(n);
            for(let i = 0; i < n; i++){
                let nextRight = (i + jump) % n;
                newState[i] = proteins[i] ^ proteins[nextRight]
            }
            proteins = newState;
        }
        jump = (jump * 2) % n;
        k = Math.floor(k/2);
    }
    let resultChars = new Array(n);
    for(let i= 0; i < n; i++){
        resultChars[i] = toChar[proteins[i]];
    }
    return resultChars.join('');
}


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

console.log(pmix('AAAAD',15))