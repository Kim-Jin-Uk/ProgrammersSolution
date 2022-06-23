function solution(board) {
    const dp = [board.map(v => new Array(board.length).fill(Number.MAX_VALUE)),board.map(v => new Array(board.length).fill(Number.MAX_VALUE))]
    const visited = [board.map(v => [...v]),board.map(v => [...v])]

    dp[0][0][0] = 0
    dp[1][0][0] = 0
    
    let que = [[0,0,0,0],[0,0,0,1]]

    while(que.length > 0){
        const [prevX,prevY,prevPrice,prevRotate] = que.shift()
        if (visited[prevRotate][prevX][prevY] > 0){continue}
        visited[prevRotate][prevX][prevY] = 2

        if(prevX < board.length - 1 && visited[prevRotate][prevX + 1][prevY] === 0){
            const [nextX,nextY,nextPrice,nextRotate] = [prevX+1,prevY,
                prevRotate === 0 ? 600 : 100,1]
            
            dp[nextRotate][nextX][nextY] = Math.min(dp[nextRotate][nextX][nextY],dp[prevRotate][prevX][prevY]+nextPrice)
            if(visited[prevRotate][nextX][nextY] !== 1) que.push([nextX,nextY,dp[nextRotate][nextX][nextY],nextRotate])
        }

        if(prevY < board.length - 1 && visited[prevRotate][prevX][prevY + 1] === 0){
            const [nextX,nextY,nextPrice,nextRotate] = [prevX,prevY + 1,
                prevRotate === 1 ? 600 : 100,0]
            
            dp[nextRotate][nextX][nextY] = Math.min(dp[nextRotate][nextX][nextY],dp[prevRotate][prevX][prevY]+nextPrice)
            if(visited[prevRotate][nextX][nextY] !== 1) que.push([nextX,nextY,dp[nextRotate][nextX][nextY],nextRotate])
        }

        if(prevX > 0 && visited[prevRotate][prevX - 1][prevY] === 0){
            const [nextX,nextY,nextPrice,nextRotate] = [prevX-1,prevY,
                prevRotate === 0 ? 600 : 100,1]
            
            dp[nextRotate][nextX][nextY] = Math.min(dp[nextRotate][nextX][nextY],dp[prevRotate][prevX][prevY]+nextPrice)
            if(visited[prevRotate][nextX][nextY] !== 1) que.push([nextX,nextY,dp[nextRotate][nextX][nextY],nextRotate])
        }

        if(prevY > 0 && visited[prevRotate][prevX][prevY - 1] === 0){
            const [nextX,nextY,nextPrice,nextRotate] = [prevX,prevY - 1,
                prevRotate === 1 ? 600 : 100,0]
            
            dp[nextRotate][nextX][nextY] = Math.min(dp[nextRotate][nextX][nextY],dp[prevRotate][prevX][prevY]+nextPrice)
            if(visited[prevRotate][nextX][nextY] !== 1) que.push([nextX,nextY,dp[nextRotate][nextX][nextY],nextRotate])
        }

        que.sort((a,b) => a[2]-a[0]-a[1] - b[2]+b[0]+b[1])
    }
    return Math.min(dp[0][board.length - 1][board.length - 1],dp[1][board.length - 1][board.length - 1]);
}

console.log(solution([[0,0,0],[0,0,0],[0,0,0]]));
console.log(solution([[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1],[0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0],[1,0,0,0,0,0,0,0]]));
console.log(solution([[0,0,1,0],[0,0,0,0],[0,1,0,1],[1,0,0,0]]));
console.log(solution([[0,0,0,0,0,0],[0,1,1,1,1,0],[0,0,1,0,0,0],[1,0,0,1,0,1],[0,1,0,0,0,1],[0,0,0,0,0,0]]));
console.log(solution([[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 0]]));