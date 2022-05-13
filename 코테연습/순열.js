function solution(arr){
    let answer = arr.map((v) => [v])
    for(let i =1;i<arr.length;i++){
        let makeArr = []
        for(let j of answer){
            for(let k of arr){
                if(!j.includes(k)){
                    makeArr.push([...j,k])
                }
            }
        }
        answer = makeArr
    }
    return answer
}

function permute(nums){
    let result = []
    let prev = []

    function dfs (elements) {
        if(elements.length === 0){result.push([...prev])}
        for(let i = 0;i< elements.length;i++){
            next = [...elements]
            next.splice(i,1)

            prev.push(elements[i])
            dfs(next)
            prev.pop()
        }
    }

    dfs(nums)
    return result
}

let start = new Date();  // 시작
console.log(solution([1,2]))
let end = new Date();  // 종료
console.log(end - start);

start = new Date();  // 시작
console.log(solution([1,2,3]))
end = new Date();  // 종료
console.log(end - start);

start = new Date();  // 시작
console.log(solution([1,2,3,4,5,6,7,8,9]))
end = new Date();  // 종료
console.log(end - start);

start = new Date();  // 시작
console.log(permute([1,2,3,4,5,6,7,8,9]))
end = new Date();  // 종료
console.log(end - start);