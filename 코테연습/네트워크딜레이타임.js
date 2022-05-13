function solution(times,n,k) {
    let maxTime = 0;
    let timeObject = {}
    for(let i of times){
        if(i[1] !== k){
            timeObject[i[0]] = (timeObject[i[0]] || []).concat([[i[1],i[2]]])
        }
    }
    let timeVisited = {}
    let visited = []
    function visit(key,time,path){
        if(timeObject[key] === undefined){return}
        for(let i of timeObject[key]){
            if(!visited.includes(path+`,${i[0]}`) && !path.includes(`,${i[0]}`)){
                const visitTime = time+i[1]
                timeVisited[i[0]] = Math.min(visitTime,(timeVisited[i[0]] || visitTime))
                console.log(i[0],path,visitTime,timeVisited[i[0]])
                visited.push(path+`,${i[0]}`)
                visit(i[0],visitTime,path+`,${i[0]}`)
            }
        }
    }

    visit(k,0,`${k}`)
    let checker = [k]
    for(let i in timeVisited){
        checker.push(i)
        maxTime = Math.max(timeVisited[i],maxTime)
        console.log(i,timeVisited[i])
    }
    if(checker.length !== n){return -1}
    return maxTime
}

console.log('sol',solution([[2,1,1],[2,3,1],[3,4,1],[1,4,0]],4,2))
console.log('sol',solution([[1,2,1],[2,1,3]],2,2))
console.log('sol',solution([[1,2,1],[2,3,2],[1,3,2]],3,1))
console.log('sol',solution(
    [[3,5,78],[2,1,1],[1,3,0],[4,3,59],[5,3,85],[5,2,22],[2,4,23],[1,4,43],[4,5,75],[5,1,15],[1,5,91],[4,1,16],[3,2,98],[3,4,22],[5,4,31],[1,2,0],[2,5,4],[4,2,51],[3,1,36],[2,3,59]]
    ,5
    ,5))