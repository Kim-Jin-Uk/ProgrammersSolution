function solution(n, s, a, b, fares) {
    let answer = Number.MAX_VALUE
    let map = new Map()
    for(let i of fares){
        if(map.has(i[0])){map.get(i[[0]]).push([i[1],i[2]])}
        else{map.set(i[0],[[i[1],i[2]]])}
        if(map.has(i[1])){map.get(i[[1]]).push([i[0],i[2]])}
        else{map.set(i[1],[[i[0],i[2]]])}
    }
    
    const firstMove = move(s)

    for(let node = 1; node <= n; node++){
        if(node === s){answer = Math.min(answer,firstMove[a]+firstMove[b])}
        else if(firstMove[node] !== Number.MAX_VALUE){
            const secondMove = move(node)
            answer = Math.min(answer,firstMove[node]+secondMove[a]+secondMove[b])
        }
    }

    function move(startNode){
        let visited = new Array(n+1).fill(0)
        let dp = new Array(n+1).fill(Number.MAX_VALUE)
        dp[0] = 0
        dp[startNode] = 0
        let que = [[startNode,0]]
        while (que.length > 0) {
            const [prev,prevTime] = que.shift()
            if (visited[prev] > 0){continue}
            visited[prev] = 1
            if (!map.has(prev)){continue}

            for(let [next,nextTime] of map.get(prev)){
                dp[next] = Math.min(dp[next],nextTime+dp[prev])
                if(visited[next] > 0){continue}
                que.push([next,dp[next]])
            }
        }
        return dp
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