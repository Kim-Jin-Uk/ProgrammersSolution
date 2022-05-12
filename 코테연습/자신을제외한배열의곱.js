function solution(arr){ //왼족 먼저 곱하고 이후 오른쪽
    let prev = 1
    let answer = [prev]
    for(let i =1;i<arr.length;i++){
        prev *= arr[i-1]
        answer.push(prev)
    }
    prev = 1
    for(let i = arr.length -2; i>=0;i--){
        prev *= arr[i+1]
        answer[i] *= prev
    }
    return answer
}

console.log(solution([1,2,3,4]))