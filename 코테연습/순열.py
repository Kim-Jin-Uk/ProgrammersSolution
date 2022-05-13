import imp
import itertools
import time

def solution(nums):
    return list(itertools.permutations(nums))


start_time = time.perf_counter()
print(solution([1,2]))
end_time = time.perf_counter()
print('코드 실행 시간: %20ds' % (end_time - start_time))

start_time = time.process_time()
print(solution([1,2,3]))
end_time = time.process_time()
print('코드 실행 시간: %ds' % (end_time - start_time))

start_time = time.process_time()
print(solution([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))
end_time = time.process_time()
print('코드 실행 시간: %ds' % (end_time - start_time))