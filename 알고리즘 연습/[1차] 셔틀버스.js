function solution(n, t, m, timetable) {
    let answer = 0;
    timetable = timetable.map((v) => {
        const timeSplit = v.split(':')
        return +timeSplit[0] * 60 + +timeSplit[1]
    })
    timetable.sort((a,b)=>a-b)
    let time = 540

    // console.log(timetable);
    for(let idx = 0; idx < n; idx++){
        let crewTime = []
        let spacious = false
        for(let counter = 0; counter < m; counter++){
            if(timetable.length === 0 || timetable[0] > time) {
                spacious = true
                break
            }
            crewTime.push(timetable.shift())
        }
        // console.log(crewTime,spacious)
        if(spacious) answer = time
        else{
            answer = crewTime[crewTime.length - 1] - 1
        }

        time += t
    }

    const min = answer % 60;

    const hour = (answer-min)/60;

    return `${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}`;
}

console.log(solution(1,	1,	5,	["08:00", "08:01", "08:02", "08:03"]));
console.log(solution(2,	10,	2,	["09:10", "09:09", "08:00"]));
console.log(solution(2,	1,	2,	["09:00", "09:00", "09:00", "09:00"]));
console.log(solution(1,	1,	5,	["00:01", "00:01", "00:01", "00:01", "00:01"]));
console.log(solution(1,	1,	1,	["23:59"]));
console.log(solution(10,60,	45,	["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]));