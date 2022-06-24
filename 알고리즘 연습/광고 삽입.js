function solution(play_time, adv_time, logs) {
    let answer = 0
    const playTime = str2int(play_time);
    const advTime = str2int(adv_time);
  
    let playList = new Array(playTime).fill(0);
  
    logs.forEach((time) => {
        let times = time.split("-");
        const startTime = str2int(times[0]);
        const endTime = str2int(times[1]);
    
        playList[startTime] += 1;
        playList[endTime] -= 1;
    });
  
    // 해당 시간, 시청자 수
    for (let i = 1; i < playTime; i++) {
        playList[i] += playList[i - 1];
    }

    // 해당 시간, 누적 재생 수
    for (let i = 1; i < playTime; i++) {
        playList[i] += playList[i - 1];
    }

    // 광고 시간만큼 배열을 비교
    let accumulate = playList[advTime - 1];
    for (let i = 0; i < playTime; i++) {
        if (playList[i + advTime] - playList[i] > accumulate) {
        accumulate = playList[i + advTime] - playList[i];
        answer = i + 1;
        }
    }

    function str2int(word){
        const [H,M,S] = word.split(':')
        return +H*3600 + +M*60 + +S
    }

    let h = parseInt(answer / 3600);
    answer %= 3600;
    let m = parseInt(answer / 60);
    answer %= 60;
    let s = parseInt(answer);

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    return h + ":" + m + ":" + s;
}

console.log(solution(
    "00:01:00",	"00:00:30",	["00:00:02-00:00:14", "00:00:00-00:01:00", "00:00:05-00:00:29"]
))

console.log(solution(
    "02:03:55",	"00:14:15",	["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"]
))
console.log(solution(
    "99:59:59",	"25:00:00",	["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"]
))
console.log(solution(
    "50:00:00",	"50:00:00",	["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"]
))