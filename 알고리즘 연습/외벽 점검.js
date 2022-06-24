function getPermutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const restArr = arr.filter((_, index) => index !== idx);
        const permuationArr = getPermutation(restArr, selectNum - 1);
        const combineFixer = permuationArr.map((v) => [fixer, ...v]);
        result.push(...combineFixer);
    });
    return result;
}

function solution(n, weak, dist) {
    let answer = 10;
    const arr = [...weak];
    let permutation = [];
    
    if (weak.length === 1) return 1;
    
    for (let i=1; i<=dist.length; i++) {
        const permu = getPermutation(dist, i);
        permutation = permutation.concat(permu);
    }
    
    for (let i=0; i<weak.length; i++) {
        for (const value of permutation) {
            const selected = [...value];
            const wall = [...arr];
            let now = wall.shift();
            
            while (selected.length > 0) {
                if (wall[0] - now <= selected[0]) {
                    wall.shift();
                } else {
                    now = wall[0];
                    selected.shift();
                }
            }
            
            if (wall.length === 0) {
                if (answer > value.length) answer = value.length;
            }
        }
        
        arr.push(arr.shift() + n);
    }
    
    return answer === 10 ? -1 : answer;
}
console.log(solution(12,	[1, 5, 6, 10],	[1, 2, 3, 4]	));
console.log(solution(12,	[1, 3, 4, 9, 10],	[3, 5, 7]	));

console.log(solution(
    200,
[0, 10, 50, 80, 120, 160],
[1, 10, 5, 40, 30],
));

console.log(solution(
    50,
[1],
[6],
));

console.log(solution(
    30, [0, 3, 11, 21], [10, 4]
));

console.log(solution(
200,
[0, 100],
[1,1]
));