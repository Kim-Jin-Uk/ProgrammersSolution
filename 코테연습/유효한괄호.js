function solution(keyword){
    //key = ({[
    let keyObject = {'(':')','{':'}','[':']'}
    let prevArray = []
    let counter = -1
    for(let i = 0;i<keyword.length;i++){
        if(keyObject[keyword[i]]){
            prevArray.push(keyObject[keyword[i]])
            counter ++
        }else{
            if(prevArray[counter] === keyword[i]){
                prevArray.pop()
                counter --
            }else{
                return false
            }
        }
    }
    return true
}

console.log(solution('({[]})')) //true
console.log(solution('(){}[]')) //true
console.log(solution('(){}[(]')) //false
console.log(solution('(){}[()]')) //true
console.log(solution('([{]})')) //false