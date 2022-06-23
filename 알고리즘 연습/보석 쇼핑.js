function solution(gems) {
    const gemVarietyCounts = new Set(gems).size;
    const gemMap = new Map();
    const gemLengths = [];
    gems.forEach((gem,i) => {
        //만든 Map객체에 동일한 보석이 있을 경우 이전 것을 지우고 새롭게 들어오는 보석의 인덱스를 추가
        gemMap.delete(gem);
        gemMap.set(gem,i);
        // 유니크한 보석들이 모두 담겨졌을 경우 그 경우를 gemlengths에 저장한다.
        if(gemMap.size === gemVarietyCounts) {
            gemLengths.push([gemMap.values().next().value + 1, i + 1 ])
        }
    })
    // 경우의 수 중에서 가장 작고 빠르게 시작하는 것을 앞으로 정렬
    gemLengths.sort((a, b) => {
        if ((a[1] - a[0]) === (b[1] - b[0])) {
            return a[1] - b[1];
        }
        return (a[1] - a[0]) - (b[1] - b[0])
    });

    return gemLengths[0]
}
console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));