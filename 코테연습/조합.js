function solution(n,k){
    let answer = []

    function dfs(arr,start,key) {
        if(key === 0){ return answer.push([...arr]) }
        for(let i = start; i<=n;i++){
            arr.push(i)
            dfs(arr,i+1,key-1)
            arr.pop()
        }
    }
    dfs([],1,k)

    for(let i of answer){
        console.log(i)
    }

    return answer
}

console.log(solution(4,2))

console.log(solution(2,2))

console.log(solution(5,3))