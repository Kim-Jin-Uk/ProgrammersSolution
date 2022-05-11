function solution (arr) {
    let answer = 0
    arr.sort((a,b) => b - a)
    console.log(arr)
    for(let i =1;i<arr.length;i+=2){
        answer += arr[i]
        console.log(arr[i])
    }
    return answer
}

console.log(solution([1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2]))