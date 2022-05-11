function solution (arr) {
    let answer = 0
    let start = 0
    let end = arr.length - 1
    let leftMax = arr[start]
    let rightMax = arr[end]
    let count = 0
    while (start < end) {
        leftMax = Math.max(leftMax,arr[start])
        rightMax = Math.max(rightMax,arr[end])
        if(leftMax <= rightMax){
            console.log(count,'left',leftMax,leftMax - arr[start])
            answer += leftMax - arr[start]
            start += 1
        }else{
            console.log(count,'right',rightMax,rightMax - arr[end])
            answer += rightMax - arr[end]
            end -= 1
        }
        count += 1
    }
    return answer
}

console.log(solution([0,1,0,2,1,0,1,3,2,1,2,1]))