function solution(nums) {
    let answer = []
    
    function dfs(arr,start){
        answer.push([...arr])
        for(let i = start;i<nums.length;i++){
            arr.push(nums[i])
            dfs([...arr],i+1)
            arr.pop()
        }
    }

    dfs([],0)

    for(let i of answer){
        console.log(i)
    }

    return answer
}

console.log(solution([1,2,3]))
console.log(solution([1,2,3,4]))
console.log(solution([1,2,3,4,5]))