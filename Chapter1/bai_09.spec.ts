//Bài 9: Tính T(n) = 1 x 2 x 3…x N
function bai_09(input: number): void {
    let T: number = 1;
    let i: number = 1;

    while (i <= input) {
        T = T * i
        i++;
    }
    console.log(`T(${input}): ${T}`);
}

bai_09(10);

