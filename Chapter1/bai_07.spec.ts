//Bài 7: Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1
function bai_07(input: number): void {
    let S: number = 0;
    let i: number = 1;

    while (i <= input) {
        S = S + (i / (i + 1));
        i++;
    }
    console.log(`S(${input}): ${S}`);
}

bai_07(10);