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



function staircase(n: number): void {
    // Write your code here

    for (let i = 1; i <= n; i++) {
        const espacios: string = ' '. repeat(n - i )
        const escalones: string = '#'.repeat(i);

        console.log(espacios + escalones)
    }

}
staircase(6);
function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}
//Rejected

//time zone