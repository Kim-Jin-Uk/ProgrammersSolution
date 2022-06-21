function solution(lines) {
    var answer = 0;
    const traficArr = []
    const timeRange = []
    for(const word of lines){
        const wordSplit = word.split(' ')
        const startTimeSplit = wordSplit[1].split(':')
        const startTime = +startTimeSplit[0]*3600 + +startTimeSplit[1]*60 + +startTimeSplit[2]
        const delay = +wordSplit[2].replace('s','')
        const trafic =  {
            startTime:+(startTime-delay+0.001).toFixed(3),
            endTime:startTime,
        }
        traficArr.push(
            trafic
        )
        timeRange.push(trafic.startTime)
        timeRange.push(trafic.endTime)
    }
    traficArr.sort((a,b) => a.startTime - b.startTime)
    for(let startTime of timeRange){
        const endTime = +(startTime+0.999).toFixed(3)
        let maxValue = 0
        for(let trafic of traficArr){
            if(
                (startTime <= trafic.startTime && trafic.endTime <= endTime) ||
                (startTime >= trafic.startTime && trafic.endTime >= startTime) ||
                (endTime >= trafic.startTime && trafic.endTime >= endTime) ||
                (startTime >= trafic.startTime && trafic.endTime >= endTime)
                ){
                    maxValue ++
                }
        }
        if(maxValue > answer){
            answer=maxValue
        }
    }
    return answer;
}

console.log(solution([
    "2016-09-15 01:00:04.001 2.0s",
    "2016-09-15 01:00:07.000 2s"
    ]));
console.log(solution([
    "2016-09-15 01:00:04.002 2.0s",
    "2016-09-15 01:00:07.000 2s"
    ]));
console.log(solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
    ]));