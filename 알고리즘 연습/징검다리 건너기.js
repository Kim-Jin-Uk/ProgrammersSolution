function solution(stones, k) {
    var answer = Number.MAX_VALUE;
    let maxValue = 2*10**9
    let minValue = 0

    while(maxValue >= minValue){
        const midValue = Math.ceil((maxValue + minValue) / 2)
        let check = true
        let counter = 0
        for(let start = 0; start < stones.length; start++){
            if ( midValue >= stones[start] ){
                counter ++
                if(counter >= k){
                    maxValue = midValue - 1
                    check = false
                    break
                }
            }else{
                counter = 0
            }
        }
        if(check){
            minValue = midValue + 1
        }
    }
    
    return minValue;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1],	3));