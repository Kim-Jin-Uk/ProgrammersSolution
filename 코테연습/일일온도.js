function solution (arr) {
    let answer = new Array(arr.length).fill(0);
    let stack = []
    for(let i=0;i<arr.length;i++){
        while(stack && arr[i] > arr[stack[stack.length-1]]){
            const last = stack.pop()
            console.log(answer,i,last,i-last)
            answer[last] = i - last
        }
        stack.push(i)
    }
    return answer
}

console.log(solution([74,73,74,75,71,69,72,76,73]))