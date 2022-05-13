function solution (keyword) {
    let visited = {}
    let start = 0
    let answer = 0
    for(let i = 0;i<keyword.length;i++){
        if(visited[keyword[i]] !== undefined && start <= visited[keyword[i]]){
            start = visited[keyword[i]]+1
        }else{
            answer = Math.max(answer,i-start+1)
        }
        visited[keyword[i]] = i
        console.log(visited,i,start,i-start+1)
    }
    return answer
}

console.log(solution('abcabcbb')) // abc
console.log(solution('bbbbb')) // b
console.log(solution('pwwkew')) // kew