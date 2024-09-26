//Bài 6: Tính S(n) = 1/1×2 + 1/2×3 +…+ 1/n x (n + 1)

function bai_06(input: number): void {
    let S: number = 0;
    let i: number = 1;

    while (i <= input) {
        S = S + (1 / i * (i + 1));
        i++;
    }
    console.log(`S(${input}): ${S}`);
}

bai_06(10);