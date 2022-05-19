function solution(board, skill) {
    var answer = board.length*board[0].length;
    let damgeTable = Array.from(Array(board.length+1), ()=> Array(board[0].length+1).fill(0))
    
    function change(skill){
        let damage = skill[5]
        if(skill[0] === 1){damage *= -1}
        damgeTable[skill[1]][skill[2]] += damage
        damgeTable[skill[1]][skill[4]+1] -= damage
        damgeTable[skill[3]+1][skill[2]] -= damage
        damgeTable[skill[3]+1][skill[4]+1] += damage
    }
    
    for(let i of skill){
        change(i)
    }

    for(let x = 0; x< damgeTable.length-1;x++){
        for(let y = 0;y<damgeTable[0].length;y++){
            damgeTable[x+1][y] += damgeTable[x][y]
        }
    }

    for(let x = 0; x< damgeTable.length;x++){
        for(let y = 0;y<damgeTable[0].length-1;y++){
            damgeTable[x][y+1] += damgeTable[x][y]
        }
    }

    for(let x = 0; x< damgeTable.length-1;x++){
        for(let y = 0;y<damgeTable[0].length-1;y++){
            if(board[x][y] + damgeTable[x][y] <= 0){answer--}
        }
    }

    return answer;
}

console.log(solution(
    [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]],	[[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]
))

console.log(solution(
    [[1,2,3],[4,5,6],[7,8,9]],	[[1,1,1,2,2,4],[1,0,0,1,1,2],[2,2,0,2,0,100]]
))