function solution(board, aloc, bloc) {
    let board_copy = board.map(v => v.slice())
    let aloc_copy = [...aloc]
    let bloc_copy = [...bloc]
    function winMoveA(move,aloc,bloc,board){
        if(board[aloc[0]][aloc[1]] === 0){return move}
        if(aloc[0] > bloc[0]){
            if(aloc[0]-1>0 && board[aloc[0]-1][aloc[1]] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[0] --
                return winMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[0] < bloc[0]){
            if(aloc[0]<board.length-1 && board[aloc[0]+1][aloc[1]] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[0] ++
                return winMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] > bloc[1]){
            if(aloc[1]-1>0 && board[aloc[0]][aloc[1]-1] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[1] --
                return winMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] < bloc[1]){
            if(aloc[1]<board[0].length-1 && board[aloc[0]][aloc[1]+1] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[1] ++
                return winMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[0]-1>0 && board[aloc[0]-1][aloc[1]] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[0] --
            return winMoveB(move+1,aloc,bloc,board)
        }
        if(aloc[0]<board.length-1 && board[aloc[0]+1][aloc[1]] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[0] ++
            return winMoveB(move+1,aloc,bloc,board)
        }
        if(aloc[1]-1>0 && board[aloc[0]][aloc[1]-1] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[1] --
            return winMoveB(move+1,aloc,bloc,board)
        }
        if(aloc[1]<board[0].length-1 && board[aloc[0]][aloc[1]+1] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[1] ++
            return winMoveB(move+1,aloc,bloc,board)
        }
        return move
    }
    function winMoveB(move,aloc,bloc,board){
        if(board[bloc[0]][bloc[1]] === 0){return move}
        if(aloc[0] > bloc[0]){
            if(bloc[0]-1>0 && board[bloc[0]-1][bloc[1]] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[0] --
                return winMoveA(move+1,aloc,bloc,board)
            }
        }
        if(aloc[0] < bloc[0]){
            if(bloc[0]<board.length-1 && board[bloc[0]+1][bloc[1]] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[0] ++
                return winMoveA(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] > bloc[1]){
            if(bloc[1]-1>0 && board[bloc[0]][bloc[1]-1] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[1] --
                return winMoveA(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] < bloc[1]){
            if(bloc[1]<board[0].length-1 && board[bloc[0]][bloc[1]+1] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[1] ++
                return winMoveA(move+1,aloc,bloc,board)
            }
        }
        if(bloc[0]-1>0 && board[bloc[0]-1][bloc[1]] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[0] --
            return winMoveA(move+1,aloc,bloc,board)
        }
        if(bloc[0]<board.length-1 && board[bloc[0]+1][bloc[1]] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[0] ++
            return winMoveA(move+1,aloc,bloc,board)
        }
        if(bloc[1]-1>0 && board[bloc[0]][bloc[1]-1] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[1] --
            return winMoveA(move+1,aloc,bloc,board)
        }
        if(bloc[1]<board[0].length-1 && board[bloc[0]][bloc[1]+1] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[1] ++
            return winMoveA(move+1,aloc,bloc,board)
        }
        return move
    }
    function loseMoveA(move,aloc,bloc,board){
        if(board[aloc[0]][aloc[1]] === 0){return move}
        if(aloc[0] > bloc[0]){
            if(aloc[0]<board.length-1 && board[aloc[0]+1][aloc[1]] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[0] ++
                return loseMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[0] < bloc[0]){
            if(aloc[0]-1>0 && board[aloc[0]-1][aloc[1]] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[0] --
                return loseMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] > bloc[1]){
            if(aloc[1]<board[0].length-1 && board[aloc[0]][aloc[1]+1] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[1] ++
                return loseMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] < bloc[1]){
            if(aloc[1]-1>0 && board[aloc[0]][aloc[1]-1] === 1){
                board[aloc[0]][aloc[1]] = 0
                aloc[1] --
                return loseMoveB(move+1,aloc,bloc,board)
            }
        }
        if(aloc[0]-1>0 && board[aloc[0]-1][aloc[1]] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[0] --
            return loseMoveB(move+1,aloc,bloc,board)
        }
        if(aloc[0]<board.length-1 && board[aloc[0]+1][aloc[1]] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[0] ++
            return loseMoveB(move+1,aloc,bloc,board)
        }
        if(aloc[1]-1>0 && board[aloc[0]][aloc[1]-1] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[1] --
            return loseMoveB(move+1,aloc,bloc,board)
        }
        if(aloc[1]<board[0].length-1 && board[aloc[0]][aloc[1]+1] === 1){
            board[aloc[0]][aloc[1]] = 0
            aloc[1] ++
            return loseMoveB(move+1,aloc,bloc,board)
        }
        return move
    }
    function loseMoveB(move,aloc,bloc,board){
        if(board[bloc[0]][bloc[1]] === 0){return move}
        if(aloc[0] > bloc[0]){
            if(bloc[0]<board.length-1 && board[bloc[0]+1][bloc[1]] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[0] ++
                return loseMoveA(move+1,aloc,bloc,board)
            }
        }
        if(aloc[0] < bloc[0]){
            if(bloc[0]-1>0 && board[bloc[0]-1][bloc[1]] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[0] --
                return loseMoveA(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] > bloc[1]){
            if(bloc[1]<board[0].length-1 && board[bloc[0]][bloc[1]+1] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[1] ++
                return loseMoveA(move+1,aloc,bloc,board)
            }
        }
        if(aloc[1] < bloc[1]){
            if(bloc[1]-1>0 && board[bloc[0]][bloc[1]-1] === 1){
                board[bloc[0]][bloc[1]] = 0
                bloc[1] --
                return loseMoveA(move+1,aloc,bloc,board)
            }
        }
        if(bloc[0]-1>0 && board[bloc[0]-1][bloc[1]] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[0] --
            return loseMoveA(move+1,aloc,bloc,board)
        }
        if(bloc[0]<board.length-1 && board[bloc[0]+1][bloc[1]] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[0] ++
            return loseMoveA(move+1,aloc,bloc,board)
        }
        if(bloc[1]-1>0 && board[bloc[0]][bloc[1]-1] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[1] --
            return loseMoveA(move+1,aloc,bloc,board)
        }
        if(bloc[1]<board[0].length-1 && board[bloc[0]][bloc[1]+1] === 1){
            board[bloc[0]][bloc[1]] = 0
            bloc[1] ++
            return loseMoveA(move+1,aloc,bloc,board)
        }
        return move
    }
    return Math.max(winMoveA(0,aloc,bloc,board),loseMoveA(0,aloc_copy,bloc_copy,board_copy));
}

console.log(solution(
    [[1, 1, 1], [1, 1, 1], [1, 1, 1]],	[1, 0],	[1, 2]
))
console.log(solution(
    [[1, 1, 1], [1, 0, 1], [1, 1, 1]],	[1, 0],	[1, 2]
))
console.log(solution(
    [[1, 1, 1, 1, 1]],	[0, 0],	[0, 4]
))
console.log(solution(
    [[1]],	[0, 0],	[0, 0]
))

console.log(solution([[1, 1, 1, 0], [1, 1, 0, 1], [1, 0, 1, 1], [0, 1, 1, 1]], [0, 0], [3, 3]))