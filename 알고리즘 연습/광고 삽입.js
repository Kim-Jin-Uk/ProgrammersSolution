function solution(play_time, adv_time, logs) {
    let answer = 0
    let maxViewCount = -1
    let maxViewTime
    play_time = str2int(play_time)
    adv_time = str2int(adv_time)
    logs = logs.map((v) => {
        const [startTime,endTime] = v.split('-')
        return [str2int(startTime),str2int(endTime)]
    })

    let divisions = [0]
    for(const log of logs){
        divisions.push(log[0])
        divisions.push(log[1])
    }

    divisions.sort((a,b) => a - b)
    logs.sort((a,b) => a[0] - b[0])
    // console.log(divisions);

    for(const division of divisions){
        let viewCount = 0
        let viewTime = 0
        const ad = [division,division+adv_time]
        for(const log of logs){
            if(ad[0] > log[1])continue
            if(ad[1] < log[0])break
            viewCount ++
            viewTime += (Math.min(log[1],ad[1]) - Math.max(log[0],ad[0]))
        }
        if(maxViewCount < viewCount || (maxViewCount === viewCount && maxViewTime < viewTime)){
            maxViewCount = viewCount
            maxViewTime = viewTime
            // console.log(viewCount,division);
            answer = division
        }
    }

    function str2int(word){
        const [H,M,S] = word.split(':')
        return +H*3600 + +M*60 + +S
    }

    const H = Math.floor(answer / 3600)
    const M = Math.floor(answer / 60 - 60*H)
    const S = answer % 60
    return `${H > 10 ? '' : '0'}${H}:${M > 10 ? '' : '0'}${M}:${S > 10 ? '' : '0'}${S}`
}

console.log(solution(
    "02:03:55",	"00:14:15",	["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"]
))
console.log(solution(
    "99:59:59",	"25:00:00",	["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"]
))
console.log(solution(
    "50:00:00",	"50:00:00",	["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"]
))