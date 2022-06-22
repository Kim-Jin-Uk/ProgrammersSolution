function solution(n, results) {
    let answer = 0
    const winGraph = {}
    const loseGraph = {}
    for(const result of results){
        winGraph[result[0]] = (winGraph[result[0]] || []).concat([result[1]])
        loseGraph[result[1]] = (loseGraph[result[1]] || []).concat([result[0]])
    }
  
    for(let player = 1; player <= n; player++){
        const checker = new Array(n+1).fill(false)
        checker[0] = true
        checker[player] = true
        winGame(player,checker)
        loseGame(player,checker)
        if(checker.filter(v => !v).length === 0) answer++
    }

    function winGame(prevPlayer,checker){
        const players = winGraph[prevPlayer]
        if(!players) return;
        for(const nextPlayer of players){
            if(!checker[nextPlayer]){
                checker[nextPlayer] = true
                winGame(nextPlayer,checker)
            }
        }
    }

    function loseGame(prevPlayer,checker){
        const players = loseGraph[prevPlayer]
        if(!players) return;
        for(const nextPlayer of players){
            if(!checker[nextPlayer]){
                checker[nextPlayer] = true
                loseGame(nextPlayer,checker)
            }
        }
    }

    return answer
}

console.log(solution(5,	[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));
console.log(solution(5, [[3, 5], [4, 2], [4, 5], [5, 1], [5, 2]]));