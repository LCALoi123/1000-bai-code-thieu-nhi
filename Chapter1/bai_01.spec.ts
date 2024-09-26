//Problem: Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

function bai_01(input: number): void {
    let S: number = 0;
    let i: number = 1;
    while (i <= input) {
        S = S + i;
        i++;
    }
    console.log(`Tổng của S: ${S}`);
}

bai_01(9);
