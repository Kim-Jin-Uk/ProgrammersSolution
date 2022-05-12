function solution (input) {
    let inputArray = input.split('->')
    for(let i = 0; i< inputArray.length / 2; i++){
        if(inputArray[i] !== inputArray[inputArray.length - 1 -i]){return false}
    }
    return true
}

console.log(solution('1->2'))
console.log(solution('1->2->2->1'))