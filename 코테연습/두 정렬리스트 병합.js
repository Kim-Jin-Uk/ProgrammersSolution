function solution (arr1,arr2){
    let value1 = arr1.shift()
    let value2 = arr2.shift()
    let answer = []
    while (true){
        if(arr1.length === 0){return answer.concat(arr2)}
        else if(arr2.length === 0){return answer.concat(arr1)}
        if(value1 > value2){
            answer.push(value2)
            value2 = arr2.shift()
        }else{
            answer.push(value1)
            value1 = arr1.shift()
        }
    }
}

console.log(solution([1,2,4],[1,3,4,5,6,8,9]))