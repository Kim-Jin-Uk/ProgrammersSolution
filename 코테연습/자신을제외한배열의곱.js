function solution(arr){
    let prev = 1
    let answer = []
    for(let i = 0; i< arr.length-1;i++){
        let sumValue = prev
        for(let j =i+1;j<arr.length;j++){
            sumValue *= arr[j]
        }
        answer.push(sumValue)
        prev *= arr[i]
    }
    answer.push(prev)
    return answer
}

console.log(solution([1,2,3,4]))