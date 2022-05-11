function solution(nums) {
    let answer = nums.length/2;
    let phoneketmonObject = {}
    for(let i=0;i<nums.length;i++){
        phoneketmonObject[nums[i]] = (phoneketmonObject[nums[i]] || 0) +1
    }
    return Math.min(answer, Object.keys(phoneketmonObject).length);
}


console.log(solution([3,1,2,3]))
console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))