function solution(gems) {
    const gemsSet = new Set(gems)
    const gemKinds = gemsSet.size
    if(gemKinds === 1){return [1,1]}
    for(let i=gemKinds;i<gems.length + 1;i++){
        for(let j=0;j<gems.length - i + 1;j++){
            const findGemsSet = new Set(gems.slice(j,j+i))
            if(findGemsSet.size === gemKinds){return [j+1,j+i]}
        }
    }
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))
console.log(solution(["AA", "AB", "AC", "AA", "AC"]))
console.log(solution(["XYZ", "XYZ", "XYZ"]))
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]))