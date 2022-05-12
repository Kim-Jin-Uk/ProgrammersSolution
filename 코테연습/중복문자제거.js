function solution (keyword) {
    let keyObject = {}
    for(let i=0;i<keyword.length;i++){
        keyObject[keyword[i]] = i
    }
    console.log(keyObject)
    let sorted = Object.entries(keyObject).sort((a, b) => a[1] - b[1]);
    let answer = []
    
    for(let element of sorted) {
        answer.push(element[0])
    }

    return answer
}

console.log(solution('bcabc'))
console.log(solution('cbacdcbc'))