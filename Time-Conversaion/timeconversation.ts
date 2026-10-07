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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    const modifier = s.slice(-2)
    const time = s.slice(0,-2)

    const [hours, minutes, seconds] = time.split(':');
    let hourNum= parseInt(hours, 10)

    if(modifier === 'PM' && hourNum < 12){
        hourNum += 12;
    } else if (modifier === 'AM' && hourNum === 12){
        hourNum = 0;
    }
    const formattedHour = hourNum.toString().padStart(2, '0');
    return `${formattedHour}:${minutes}:${seconds}`;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
