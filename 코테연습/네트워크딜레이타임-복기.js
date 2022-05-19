function solution (times,n,k) {
    let map = new Map()
    let dp = new Array(n+1).fill(Number.MAX_VALUE)
    let visited = new Array(n+1).fill(0)
    dp[0] = 0
    dp[k] = 0

    for(let i of times){
        if(map.has(i[0])){map.get(i[[0]]).push([i[1],i[2]])}
        else{map.set(i[0],[[i[1],i[2]]])}
    }

    let que = [[k,0]]

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
        que.sort((a,b) => a[1] - b[1])
    }

    const maxTime = Math.max(...dp)
    return maxTime === Number.MAX_VALUE ? -1 : maxTime
}

console.log('sol',solution([[2,1,1],[2,3,1],[3,4,1],[1,4,0]],4,2))
console.log('sol',solution([[1,2,1],[2,1,3]],2,2))
console.log('sol',solution([[1,2,1],[2,3,2],[1,3,2]],3,1))
console.log('sol',solution(
    [[3,5,78],[2,1,1],[1,3,0],[4,3,59],[5,3,85],[5,2,22],[2,4,23],[1,4,43],[4,5,75],[5,1,15],[1,5,91],[4,1,16],[3,2,98],[3,4,22],[5,4,31],[1,2,0],[2,5,4],[4,2,51],[3,1,36],[2,3,59]]
    ,5
    ,5))