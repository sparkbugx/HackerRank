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


function unfairGame(s: number[]): number {
    const N = s.length;
    const NUM_STATES = 1 << (N + 1);
    let dp = new Float64Array(NUM_STATES);
    dp.fill(Infinity);
    dp[0] = 0

    for(let b = 30; b>= 0; b--){
        const bitVal = Math.pow(2, b)
        for(let i = 0; i < N; i++){
            const nextDp = new Float64Array(NUM_STATES)
            nextDp.fill(Infinity);
            const orig = (s[i] >> b) & 1;
            for(let state = 0; state < NUM_STATES; state++){
                const curVal = dp[state];
                if(curVal === Infinity) continue;
                const p = state >> N;
                const mask = state & ((1 << N) - 1);
                const isFree = (mask >> i) & 1;

                for(let c = 0; c <= 1; c ++){
                    if(!isFree && orig === 1 && c === 0) continue;

                    const cost = (c - orig) * bitVal;
                    const nextP = p ^ c;
                    let nextMask = mask;

                    if(!isFree && orig === 0 && c ===1){
                        nextMask |= (1<< i);
                    }
                    const nextState = (nextP << N )| nextMask;
                    if(curVal + cost < nextDp[nextState]){
                        nextDp[nextState] =  curVal + cost;
                    }
                }
            }
            dp= nextDp;
        }
        for(let state = 0; state < NUM_STATES; state ++){
            if((state >> N ) === 1){
                dp[state] = Infinity;
            }
        }
    }
    let minAdditions = Infinity;
    for(let mask = 0; mask < (1 << N ); mask++){
        if(dp[mask] < minAdditions){
            minAdditions = dp[mask];
        }
    }
    return minAdditions

}



function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const sCount: number = parseInt(readLine().trim(), 10);

        const s: number[] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

        const result: number = unfairGame(s);

        ws.write(result + '\n');
    }

    ws.end();
}

//need further info