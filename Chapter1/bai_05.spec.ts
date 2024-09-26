//Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)

function bai_05(input: number): void {
    let S: number = 0;
    let i: number = 1;

    while (i <= input) {
        S = S + (1 / (2 * i + 1));
        i++;
    }
    console.log(`S(${input}): ${S}`);
}

bai_05(10);