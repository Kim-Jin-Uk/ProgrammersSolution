function solution(distance, rocks, n) {
    let answer = -1
    rocks.push(0)
    rocks.push(distance)
    rocks.sort((a,b) => a-b)
    let maxInterval = Math.ceil(distance / (rocks.length - n - 1))
    let minInterval = 0

    while(minInterval < maxInterval){
        const midInterval = Math.ceil((maxInterval + minInterval) / 2)
        let delCount = 0
        let rockArray = [...rocks]
        while(true){
            let finish = true
            for(let idx = 0; idx < rockArray.length - 1; idx++){
                if(rockArray[idx + 1] - rockArray[idx] < midInterval){
                    finish = false
                    delCount ++
                    rockArray.splice(idx+1,1)
                    break
                }
            }
            if(finish) break
        }
        if (delCount > n){
            maxInterval = midInterval-1
            // console.log('max',minInterval,maxInterval,delCount,rockArray);
        }else{
            minInterval = midInterval
            minLength = distance
            for(let idx = 0; idx < rockArray.length - 1; idx++){
                if(rockArray[idx + 1] - rockArray[idx] < minLength){minLength = rockArray[idx + 1] - rockArray[idx]}
            }
            answer = Math.max(answer,minLength)
            // console.log('min',minInterval,maxInterval,delCount,rockArray,minLength);
        }
    }
    return answer;
}

console.log(solution(25,	[2, 14, 11, 21, 17],	2));
console.log(solution(16, [4, 8, 11], 2));