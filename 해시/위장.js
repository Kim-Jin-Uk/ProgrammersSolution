function solution(clothes) {
    let clothesObject = {}
    let answer = 1
    for (let i =0;i<clothes.length;i++){
        clothesObject[clothes[i][1]] = clothesObject[clothes[i][1]]+1||2
    }
    for(let i in clothesObject){
        answer *= clothesObject[i]
    }
    return answer-1
}

console.log(solution(
    [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
))

console.log(solution(
    [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]
))