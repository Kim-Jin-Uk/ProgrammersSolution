function solution(times,n,k) {
    const map = new Map();
    const dp=Array(n+1).fill(Number.MAX_VALUE);
    const visited = Array(n+1).fill(0);
    
    dp[0]=0;
    dp[k]=0;
    
    for(let [now,next,time] of times){
        if(map.has(now)) map.get(now).push([next,time]);
        else map.set(now,[[next,time]]);
    }
    
    const q=[[k,0]];
    
    while(q.length){
        const [now, time]=q.shift();
        
        if(visited[now]) continue;
        visited[now]=1;
        
        if(!map.has(now)) continue;
        
        for(let [next,nextTime] of map.get(now)){
            dp[next]=Math.min(dp[next], dp[now]+nextTime);
            
            if(visited[next]) continue;
            q.push([next,dp[next]]);
        }
        q.sort((a,b)=>a[1]-b[1]);
    }
    
    const max = Math.max(...dp);
    return max===Number.MAX_VALUE ? -1 : max;
}

console.log('sol',solution([[2,1,1],[2,3,1],[3,4,1],[1,4,0]],4,2))
console.log('sol',solution([[1,2,1],[2,1,3]],2,2))
console.log('sol',solution([[1,2,1],[2,3,2],[1,3,2]],3,1))
console.log('sol',solution(
    [[3,5,78],[2,1,1],[1,3,0],[4,3,59],[5,3,85],[5,2,22],[2,4,23],[1,4,43],[4,5,75],[5,1,15],[1,5,91],[4,1,16],[3,2,98],[3,4,22],[5,4,31],[1,2,0],[2,5,4],[4,2,51],[3,1,36],[2,3,59]]
    ,5
    ,5))