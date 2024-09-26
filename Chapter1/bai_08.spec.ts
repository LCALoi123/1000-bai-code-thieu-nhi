//Bài 8: Tính S(n) = ½ + ¾ + 5 / 6 + … + 2n + 1 / 2n + 2

function bai_08(input: number): void {
    let S: number = 0;
    let i: number = 1;

    while (i <= input) {
        S = S + (2 * i) + (1 / (2 * i + 2))
        i++;
    }
    console.log(`S(${input}): ${S}`);
}

bai_08(10);