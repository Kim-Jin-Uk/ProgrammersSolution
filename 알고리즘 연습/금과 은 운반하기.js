function solution(a, b, g, s, w, t) {
    let answer = 4 * 10 ** 14
    let end = 4 * 10 ** 14
    let start = 0
    
    while( start <= end) {
        let mid = Math.floor((start + end) / 2);
        let gold = 0;
        let silver = 0;
        let add = 0;
        
        for( let i =0; i < s.length; i++ ) {
            let now_g = g[i];
            let now_s = s[i];
            let now_w = w[i];
            let now_t = t[i];
            
            let move_cnt = Math.floor(mid / (now_t * 2));
            if(mid % (now_t * 2) >= t[i]) move_cnt++;

            gold += (now_g < move_cnt * now_w) ? now_g : move_cnt * now_w;
            silver += (now_s < move_cnt * now_w) ? now_s : move_cnt * now_w;
            add += (now_g + now_s < move_cnt * now_w) ? now_g + now_s : move_cnt * now_w;
        }
        
        
        if(gold >= a && silver >= b && add >= a + b) {
            end = mid - 1;
            answer = Math.min(mid, answer);
        }else {
            start = mid + 1;
        }
    }

    return answer;
}

console.log(solution(10,	10,	[100],	[100],	[7],	[10]));
console.log(solution(90,	500,	[70,70,0],	[0,0,500],	[100,100,2],	[4,8,1]	));
console.log(solution(90,	500,	[100,100,0],	[0,0,500],	[50,50,500],	[4,4,1]	));