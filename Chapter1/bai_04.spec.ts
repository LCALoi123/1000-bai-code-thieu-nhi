//Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n

function bai_04(input: number): void {
    let S: number = 0;
    let i: number = 1;

    while (i <= input) {
        S = S + (1 / (2 * i));
        i++;
    }
    console.log(`S(${input}): ${S}`);
}

bai_03(10);