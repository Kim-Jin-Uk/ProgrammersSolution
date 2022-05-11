function solution (arr) {
    let answer = []
    arr.sort((a,b) => a-b)
    console.log(arr)
    for(let i =0; i<arr.length-2;i++){
        if(i>0 && arr[i] === arr[i-1]){continue}
        const key = 0 - arr[i]
        let start = i+1
        let end = arr.length-1
        while (start < end){
            if(start > i+1 && arr[start] === arr[start - 1]){
                start += 1
                continue
            }
            if(end < arr.length-1 && arr[end] === arr[end + 1]){
                end -= 1
                continue
            }
            console.log(i,start,end)
            if(arr[start] + arr[end] === key){
                answer.push([arr[i],arr[start],arr[end]])
                console.log([arr[i],arr[start],arr[end]])
                start += 1
                end -= 1
            }else if (arr[start] + arr[end] > key){end -= 1}
            else{start += 1}
        }
    }
    return answer
}

console.log(solution([-1,0,1,2,-1,-4,-1,0,1,2,-1,-4,-1,0,1,2,-1,-4]))