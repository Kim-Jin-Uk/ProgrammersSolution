function solution(board) {
    var answer = Number.MAX_VALUE;
    // 가로:true 세로:false

    const closeBoard = board.map((v) => [1,...v,1])
    closeBoard.unshift(new Array(board.length + 2).fill(1))
    closeBoard.push(new Array(board.length + 2).fill(1))

    move(1,1,closeBoard.map((v) => [...v]),0,true)

    function move(prevX,prevY,visited,time,type){
        if(type){
            visited[prevX][prevY] = 1
            visited[prevX][prevY+1] = 1
        }else{
            visited[prevX][prevY] = 1
            visited[prevX+1][prevY] = 1
        }
        // console.log(`-${prevX},${prevY}-${type ? 'horizont' : 'vertical'}-${time}-`);
        // for(const low of visited){
        //     console.log(low);
        // }
        // 탈출조건
        if(visited[board.length][board.length] === 1){
            return answer = Math.min(answer,time)
        }

        if(type){
            moveHorizontal(prevX,prevY,visited.map((v) => [...v]),time,type)
        }else{
            moveVertical(prevX,prevY,visited.map((v) => [...v]),time,type)
        }
        turn(prevX,prevY,visited.map((v) => [...v]),time,type)
    }

    function moveHorizontal(prevX,prevY,visited,time,type){
        if(visited[prevX][prevY+2] === 0){
            move(prevX,prevY+1,visited.map((v) => [...v]),time+1,type)
        }
        if(visited[prevX+1][prevY+1] === 0 && visited[prevX+1][prevY] === 0){
            move(prevX+1,prevY,visited.map((v) => [...v]),time+1,type)
        }
        if(visited[prevX][prevY-1] === 0){
            move(prevX,prevY-1,visited.map((v) => [...v]),time+1,type)
        }
        if(visited[prevX-1][prevY+1] === 0 && visited[prevX-1][prevY] === 0){
            move(prevX-1,prevY,visited.map((v) => [...v]),time+1,type)
        }
    }

    function moveVertical(prevX,prevY,visited,time,type){
        if(visited[prevX][prevY+1] === 0 && visited[prevX+1][prevY+1] === 0){
            move(prevX,prevY+1,visited.map((v) => [...v]),time+1,type)
        }
        if(visited[prevX+2][prevY] === 0){
            move(prevX+1,prevY,visited.map((v) => [...v]),time+1,type)
        }
        if(visited[prevX][prevY-1] === 0 && visited[prevX+1][prevY-1] === 0){
            move(prevX,prevY-1,visited.map((v) => [...v]),time+1,type)
        }
        if(visited[prevX-1][prevY] === 0){
            move(prevX-1,prevY,visited.map((v) => [...v]),time+1,type)
        }
    }

    function turn(prevX,prevY,visited,time,type){
        if(type){ // 가로 -> 세로
            if(visited[prevX+1][prevY+1] === 0 && visited[prevX+1][prevY] === 0){
                // console.log('turn');
                move(prevX,prevY+1,visited.map((v) => [...v]),time+1,false)
                move(prevX,prevY,visited.map((v) => [...v]),time+1,false)
            }
            if(visited[prevX-1][prevY+1] === 0 && visited[prevX-1][prevY] === 0){
                // console.log('turn');
                move(prevX-1,prevY,visited.map((v) => [...v]),time+1,false)
                move(prevX-1,prevY+1,visited.map((v) => [...v]),time+1,false)
            }
        }else{ // 세로 -> 가로
            if(visited[prevX+1][prevY+1] === 0 && visited[prevX][prevY+1] === 0){
                // console.log('turn');
                move(prevX+1,prevY,visited.map((v) => [...v]),time+1,true)
                move(prevX,prevY,visited.map((v) => [...v]),time+1,true)
            }
            if(visited[prevX+1][prevY-1] === 0 && visited[prevX][prevY-1] === 0){
                // console.log('turn');
                move(prevX+1,prevY-1,visited.map((v) => [...v]),time+1,true)
                move(prevX,prevY-1,visited.map((v) => [...v]),time+1,true)
            }
        }
    }

    return answer;
}

// console.log(solution([[0,0,0],[0,0,0],[0,0,0]]))
// console.log(solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]));
// console.log(solution([[0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0]]));
// console.log(solution([[0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0]]));
// console.log(solution([[0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0]]));





console.log(solution([
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));