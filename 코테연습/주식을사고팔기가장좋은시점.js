function solution(arr){
    let answer = 0
    let minValue = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i]
        }else{
            if(answer < arr[i] - minValue){
                answer = arr[i] - minValue
            }
        }
    }
    return answer
}

console.log(solution([7,1,5,3,6,4,3,0,2,4,6]))