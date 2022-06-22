function solution(enroll, referral, seller, amount) {
    const answer = [];
    const sellerGraph = {}
    for(const idx in enroll){
        sellerGraph[enroll[+idx]] = {revenue:0,parent:referral[+idx] === "-" ? null : referral[+idx]}
    }

    for(const idx in seller){
        const prev = seller[+idx]
        const revenue = amount[+idx] * 100
        settlement(prev, revenue)
    }

    function settlement(prev,revenue){
        const nextRevenue = Math.floor(revenue * 0.1)
        const prevRevenue = revenue - nextRevenue
        sellerGraph[prev].revenue += prevRevenue
        if(!sellerGraph[prev].parent || !nextRevenue) return
        settlement(sellerGraph[prev].parent,nextRevenue)
    }

    for(const seller in sellerGraph){
        answer.push(sellerGraph[seller].revenue)
    }

    return answer;
}

console.log(solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],	
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],	
    ["young", "john", "tod", "emily", "mary"],	
    [12, 4, 2, 5, 10]
));

console.log(solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
));