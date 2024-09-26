//Bài 3: Tính S(n) = 1 + ½ + 1 / 3 + … + 1 / n

function bai_03(input: number): void {
    let S: number = 0;
    let i: number = 1;
    while (i <= input) {
        S = S + (1 / i);
        i++;
    }
    console.log(`Tổng của S: ${S}`);
}

bai_03(8);