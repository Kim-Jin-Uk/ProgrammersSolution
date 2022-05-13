function solution(nums, k) {
    let answer = []
    function dfs(arr,strat,sum){
        if(sum > k){return}
        if(sum === k){return answer.push([...arr])}
        for(let i =strat;i<nums.length;i++){
            if(nums[i] === 0){continue}
            arr.push(nums[i])
            dfs([...arr],i,sum+nums[i])
            arr.pop()
        }
    }
    dfs([],0,0)
    for(let i of answer){
        console.log(i)
    }
    return answer
}

console.log(solution([2,3,6,7],7))
console.log(solution([2,3,5],8))
console.log(solution([2,0,3,5],8))