function solution(user_id, banned_id) {
    const answer = []
    const bannedCombination = Array.from(Array(banned_id.length),() => [])

    for(let bannedIndex = 0; bannedIndex < banned_id.length; bannedIndex++){
        for(let userIndex = 0; userIndex < user_id.length; userIndex++){
            if(match(user_id[userIndex],banned_id[bannedIndex])) bannedCombination[bannedIndex].push(userIndex)
        }
    }
    
    makeWord([])

    function makeWord(word){
        if(!bannedCombination[word.length]){
            word.sort((a,b) => a-b)
            const wordString = word.join()
            return answer.push(wordString)
        }
        for(const banned of bannedCombination[word.length]){
            if(!word.includes(banned)) makeWord(word.concat([banned]))
        }
    }

    function match(user, banned){
        if(user.length !== banned.length) return false
        for(let index = 0; index < user.length; index++){
            if(user[index] !== banned[index] && banned[index] !== '*') return false
        }
        return true
    }
    return new Set(answer).size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],	["fr*d*", "abc1**"]));
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],	["*rodo", "*rodo", "******"]));
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],	["fr*d*", "*rodo", "******", "******"]));