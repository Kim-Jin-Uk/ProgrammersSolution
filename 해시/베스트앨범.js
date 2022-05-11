function solution(genres, plays) {
    // 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
    // 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
    // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
    let answer = []
    let genresObject = {}
    for(let i =0;i<genres.length;i++){
        let playsObject = genresObject[genres[i]] || {"sum":0}
        playsObject[i] = plays[i]
        playsObject["sum"] += plays[i]
        genresObject[genres[i]] = playsObject 
    }
    const sortGenre = Object.entries(genresObject).sort(([, a], [, b]) =>  b["sum"] - a["sum"])
    for(let i in sortGenre){
        const sortPlay = Object.entries(sortGenre[i][1])
        .sort(([, a], [, b]) => b - a)
        if(sortPlay[1][0] !== 'sum'){
            answer.push(parseInt(sortPlay[1][0]))
        }else{
            answer.push(parseInt(sortPlay[0][0]))
        }
        if(sortPlay[2]){
            answer.push(parseInt(sortPlay[2][0]))
        }
    }
    return answer
}

console.log(solution(
    ["classic", "pop", "classic", "classic", "pop","rock"],	[500, 600, 150, 800, 2500,200]
))