//Bài 10: Tính T(x, n) = x^n
function bai_10(input: number, pow: number): void {
    let T: number = 1;
    let i: number = 1;
    while (i <= pow) {
        T *= input
        i++;
    }
    console.log(`T(${input},${pow}): ${T}`);
}
bai_10(8, 5);