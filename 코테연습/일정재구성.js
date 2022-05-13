function solution(ticket) {
    let ticketObject = {}
    for(let i of ticket){
        ticketObject[i[0]] = (ticketObject[i[0]] || []).concat([i[1]])
    }
    for(let i in ticketObject){
        ticketObject[i] = ticketObject[i].sort()
    }
    let visited = ['JFK']
    function visit(key){
        if(ticketObject[key] === undefined){return}
        for(let i of ticketObject[key]){
            visited.push(i)
            ticketObject[key].shift()
            return visit(i)
        }
    }
    visit('JFK')

    return visited
}

console.log(solution([
    ['MUC','LHR'],
    ['JFK','MUC'],
    ['SFO','SJC'],
    ['LHR','SFO']
]))

console.log(solution([
    ['JFK','SFO'],
    ['JFK','ATL'],
    ['SFO','ATL'],
    ['ATL','JFK'],
    ['ATL','SFO'],
]))