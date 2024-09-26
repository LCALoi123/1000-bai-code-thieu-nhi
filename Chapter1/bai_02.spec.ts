//Problem: Bài 1: Tính S(n) = 1^2 + 2^2 + 3^2 + … + n^2

function bai_02(input: number): void {
    let S: number = 0;
    let i: number = 1;
    while (i <= input) {
        S = S + (i * i);
        i++;
    }
    console.log(`Tổng của S: ${S}`);
}
bai_02(8);