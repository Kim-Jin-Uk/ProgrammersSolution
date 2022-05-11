function solution(progresses, speeds) {
    let answer = []
    let projectsNum = 1
    let maxDays = 100
    for(let i =0; i<progresses.length;i++){
        const days = (100 - progresses[i]) / speeds[i]
        const calDays = (days - parseInt(days)) === 0 ? days : parseInt(days)+1
        
        console.log(projectsNum,calDays,maxDays,i,answer)
        if(calDays <= maxDays){
            projectsNum += 1
            maxDays = calDays
            if(i === progresses.length -1){
                answer.push(projectsNum)
            }
        }
        else{
            answer.push(projectsNum)
            projectsNum = 1
        }
        
    }
    return answer
}

console.log(solution([93, 30, 55],	[1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))