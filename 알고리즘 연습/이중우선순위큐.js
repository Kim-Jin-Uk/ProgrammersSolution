function solution(operations) {
    let answer = []
    for(const operation of operations){
        const [keyword, value] = operation.split(' ')
        if(keyword === 'I'){
            answer.push(+value)
        }else{
            if(+value === 1){
                answer.sort((a,b) => a-b)
                answer.pop()
            }else{
                answer.sort((a,b) => b-a)
                answer.pop()
            }
        }
    }
    answer.sort((a,b) => b-a)
    return [answer[0] || 0,answer[answer.length-1] || 0]
}

console.log(solution(["I 16","D 1"]))
console.log(solution(["I 7","I 5","I -5","D -1"]))