function solution(telNum) {
    let telObject = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z'],
    }

    for(let i =1;i<telNum.length;i++){
        let makeWord = []
        for(let j of telObject[telNum[0]]){
            for(let k of telObject[telNum[i]]){
                makeWord.push(j+k)
            }
        }
        telObject[telNum[0]] = makeWord
    }
    return telObject[telNum[0]] || []
}

console.log(solution('23'))
console.log(solution('235'))
console.log(solution('79'))
console.log(solution(''))