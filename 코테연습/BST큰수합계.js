function solution(root){
    let answer = root.slice()
    for(let i=0;i<root.length;i++){
        const key = answer[i]
        if (key === null){continue}
        answer[i] = root.reduce(function sum(sumValue,value){
            if(value !== null && value >= key){return sumValue += value}
            return sumValue
        },0)
    }
    console.log(answer)
    return answer
}

solution([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])
solution([0,null,1])