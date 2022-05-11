def arrPairSum(nums):
    sum = 0
    pair = []
    nums.sort()
    for n in nums:
        pair.append(n)
        if len(pair) == 2:
            sum += min(pair)
            pair = []
    return sum

print(arrPairSum([1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2]))