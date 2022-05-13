function solution (grid) { //dfs
    let answer = 0
    function counter (x,y) {
        if(grid[x][y] === 1){
            grid[x][y] = 0
            if(x < grid.length-1){counter(x+1,y)}
            if(y < grid[0].length-1){counter(x,y+1)}
        }else{return}
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                counter(i,j)
                answer ++
            }
        }
    }
    return answer
}

console.log(solution([
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0],
]))
console.log(solution([
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
]))