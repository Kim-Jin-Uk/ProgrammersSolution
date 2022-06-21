function solution(n, edge) {
    let distanceList = new Array(n+1).fill(Number.MAX_VALUE)
    distanceList[0] = -1
    const graph = {}
    for(const edgeItem of edge){
        graph[edgeItem[0]] = (graph[edgeItem[0]] || []).concat([edgeItem[1]])
        graph[edgeItem[1]] = (graph[edgeItem[1]] || []).concat([edgeItem[0]])
    }

    function BFS(visited,prev,distance){
        if(graph[prev]){
            for(let next of graph[prev]){
                if(!visited.includes(next)){
                    BFS(visited.concat([next]),next,distance+1)
                }
            }
        }
        return distanceList[prev] = Math.min(distanceList[prev],distance)
    }
   
    BFS([],1,0)

    const maxValue = Math.max(...distanceList)
    return distanceList.filter((v) => v===maxValue).length;
}

console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
console.log(solution(6,[[2,3]]));
console.log(solution(2,[[2,1]]));
console.log(solution(4,[[1,2],[2,3],[3,4],[4,1]]));