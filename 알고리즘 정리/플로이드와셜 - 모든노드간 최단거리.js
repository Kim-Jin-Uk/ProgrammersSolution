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
