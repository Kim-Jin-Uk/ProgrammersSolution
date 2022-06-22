function solution(n, times) {
    let answer = 10 ** 18
    let maxTime = 10 ** 18
    let minTime = 0

    while(minTime < maxTime){
        const midTime = Math.ceil((minTime + maxTime) / 2)
        inspectedCount = 0
        for(let time of times){
            inspectedCount += Math.floor(midTime / time) 
        }
        if(inspectedCount >= n){
            maxTime = midTime - 1
            answer = Math.min(answer,midTime)
        }else minTime = midTime
    }

    return answer;
}

console.log(solution(6,	[7, 10]))