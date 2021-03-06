function solution(n, s, a, b, fares) {
    let answer = Number.MAX_VALUE
    const graph = new Array(n)
    const node = new Array(n).fill(Number.MAX_VALUE)

    for(let index = 0; index < n; index++){
        graph[index] = node.map((v,i) => {
            if( i === index ) return 0
            return v
        })
    }

    for(const [start,end,time] of fares){
        graph[start-1][end-1] = time
        graph[end-1][start-1] = time
    }

    for(let passNode = 0; passNode < n; passNode++){
        for(let startNode = 0; startNode < n; startNode++){
            for(let endNode = 0; endNode < n; endNode++){
                if(graph[startNode][passNode] + graph[passNode][endNode] < graph[startNode][endNode]){
                    graph[startNode][endNode] = graph[startNode][passNode] + graph[passNode][endNode]
                }
            }
        }
    }
    for(let index = 0; index < n; index++){
        answer = Math.min(answer, graph[s-1][index] + graph[index][a-1] + graph[index][b-1])
    }
    return answer;
}

console.log(solution(
    6,  4,	6,  2,	
    [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]
));

console.log(solution(
    7,	3,	4,	1,
    [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]
));

console.log(solution(
    6,	4,	5,	6,
    [[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]
));