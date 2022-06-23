function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = Number.MAX_VALUE
    const low = new Array(101).fill(0)
    const field = low.map((v) => [...low])

    for(const box of rectangle){
        field[box[1]*2] = field[box[1]*2].map((v,i) => v + ((box[0]*2 <= i && i <= box[2]*2) ? 1 : 0))
        field[box[3]*2] = field[box[3]*2].map((v,i) => v + ((box[0]*2 <= i && i <= box[2]*2) ? 1 : 0))
        for(let yIndex = box[1]*2 + 1; yIndex < box[3]*2; yIndex++){
            field[yIndex][box[0]*2] += 1
            field[yIndex][box[2]*2] += 1
        } 
    }

    for(const box of rectangle){
        for(let yIndex = box[1]*2 + 1; yIndex < box[3]*2; yIndex++){ 
            field[yIndex] = field[yIndex].map((v,i) => ((box[0]*2 + 1 <= i && i <= box[2]*2 - 1) ? 0 : v))
        } 
    }
    function move(prevX,prevY,length,visited){
        if(prevX === itemX*2 && prevY === itemY*2) {
            return answer = Math.min(answer,length)
        }
        visited[prevY][prevX] = 0
        if(prevX < visited.length - 1 && visited[prevY][prevX + 1] > 0){
            move(prevX + 1,prevY,length+1,visited.map(v => [...v]))
        }
        if(prevX > 0 && visited[prevY][prevX - 1] > 0){
            move(prevX - 1,prevY,length+1,visited.map(v => [...v]))
        }
        if(prevY < visited.length - 1 && visited[prevY + 1][prevX] > 0){
            move(prevX,prevY + 1,length+1,visited.map(v => [...v]))
        }
        if(prevY > 0 && visited[prevY - 1][prevX] > 0){
            move(prevX,prevY - 1,length+1,visited.map(v => [...v]))
        }
    }

    move(characterX*2,characterY*2,0,field.map(v => [...v]))

    return answer / 2;
}

console.log(solution(
    [[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]],	1,	3,	7,	8
))
console.log(solution(
    [[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]],	9,	7,	6,	1
))
console.log(solution(
    [[1,1,5,7]],	1,	1,	4,	7
))
console.log(solution(
    [[2,1,7,5],[6,4,10,10]],	3,	1,	7,	10
))
console.log(solution(
    [[2,2,5,5],[1,3,6,4],[3,1,4,6]],	1,	4,	6,	3
))