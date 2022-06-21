function solution(jobs) {
    const jobLength = jobs.length
    jobs.sort((a,b) => a[0]-b[0])
    let processTime = 0
    let time = 0
    const waitings = []
    while(true){
        const job = jobs[0]
        if(waitings.length === 0 && jobs.length === 0){break}
        if(job && job[0] <= time){ //실행중 입력
            waitings.push(jobs.shift())
        }else{
            if(waitings.length === 0){
                const minTime = jobs[0][0]
                for(let minTimeJob of [...jobs]){
                    if(minTimeJob[0] === minTime){
                        waitings.push(jobs.shift())
                    }else{
                        break
                    }
                }
            }else{
                waitings.sort((a,b) => a[1]-b[1])
                const running = waitings.shift()
                if (time < running[0]){
                    time = running[0]
                }
                time += running[1]
                processTime += time - running[0]
            }
        }
    }
    return Math.floor(processTime / jobLength)
}

console.log(solution([[0, 3], [1, 9], [2, 6]]))
console.log(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]));