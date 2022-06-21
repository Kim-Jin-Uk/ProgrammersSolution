function solution(n, computers) {
    let answer = 0
    let checker = false
    const graph = {}
    const visited = []
    for(const idx in computers){
        graph[idx] = computers[+idx].map((v,i) => {
            if (v === 1) return i
            else return -1
        }).filter((v) => v !== -1 && v !== +idx)
    }

    for(let start = 0; start < n; start++){
        search(start)
        // console.log(visited, start, checker);
        if(checker) answer++
        checker = false
    }

    function search(start){
        if(visited.includes(start)) return
        visited.push(start)
        checker = true
        const nexts = graph[start]
        for(const next of nexts){
            if(!visited.includes(next)){
                search(next)
            }
        }
    }
    // console.log(visited);
    return answer
}

console.log(solution(3,	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3,	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]))