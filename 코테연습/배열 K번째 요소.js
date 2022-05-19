function solution (nums, k){
    class MinHeap {
        constructor() {
            this.heap = [ null ];
        }
        
        size() {
            return this.heap.length - 1;
        }
        
        getMin() {
            return this.heap[1] ? this.heap[1] : null;
        }
        
        swap(a, b) {
            [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
        }
        
        heappush(value) {
            this.heap.push(value);
            let curIdx = this.heap.length - 1;
            let parIdx = (curIdx / 2) >> 0;
            
            while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
                this.swap(parIdx, curIdx)
                curIdx = parIdx;
                parIdx = (curIdx / 2) >> 0;
            }
        }
        
        heappop() {
            const min = this.heap[1];	
            if(this.heap.length <= 2) this.heap = [ null ];
            else this.heap[1] = this.heap.pop();   
            
            let curIdx = 1;
            let leftIdx = curIdx * 2;
            let rightIdx = curIdx * 2 + 1; 
            
            if(!this.heap[leftIdx]) return min;
            if(!this.heap[rightIdx]) {
                if(this.heap[leftIdx] < this.heap[curIdx]) {
                    this.swap(leftIdx, curIdx);
                }
                return min;
            }
    
            while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
                const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
                this.swap(minIdx, curIdx);
                curIdx = minIdx;
                leftIdx = curIdx * 2;
                rightIdx = curIdx * 2 + 1;
            }
    
            return min;
        }
    }
    class MaxHeap {
        constructor() {
            this.heap = []
        }
        swap(a, b) {
            // 구조분해 할당 문법으로 swap 가능
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }
        size() {
            return this.heap.length
        }
        push(value) {
            // 맨뒤에 추가 max heap 이므로 부모랑 비교해서 큰값을 부모랑 swap 해줘야함
            this.heap.push(value)
            let idx = this.heap.length-1
            let parent = Math.floor((idx-1)/2)
    
            while(this.heap[parent] < value) {
                this.swap(parent, idx)
                idx = parent
                parent = Math.floor((idx-1)/2)
            }
            return this.print()
        }
        // 큐이기 때문에 삭제는 항상 루트노드부터 이루어짐. 루트 노드를 삭제하고, 맨마지막 인덱스를 루트랑 교환
    
        pop() {
            const lastIdx = this.heap.length-1
            let idx = 0
            this.swap(0, lastIdx) // 0번이 루트노드
            let value = this.heap.pop()
    
            while(idx < lastIdx) {
                let leftChildIdx = idx*2+1
                let rightChildIdx = idx*2+2
    
                // 왼쪽자식 인덱스가 더 크다는 뜻은 자식노드가 없다는 뜻
                if(leftChildIdx >= lastIdx) {
                    break
                } else if(rightChildIdx >= lastIdx)  {
                    // 왼쪽 자식만 있는경우 자식과 비교해서 크면 스왑
                    if(this.heap[idx] < this.heap[leftChildIdx]) {
                        this.swap(idx, leftChildIdx)
                        idx = leftChildIdx
                    } else {
                        break
                    }
                } else {
                    // 둘다 있는경우 중 두 자식이 루트보다 다 큰경우
                    if(this.heap[leftChildIdx] > this.heap[idx] && this.heap[rightChildIdx] > this.heap[idx]) {
                        // 큰값이랑 스왑
                        if(this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
                            this.swap(idx, leftChildIdx)
                            idx = leftChildIdx
                        } else {
                            this.swap(idx,rightChildIdx)
                            idx = rightChildIdx
                        }
                    } else if(this.heap[leftChildIdx] > this.heap[idx]) {  // 왼쪽 자식만 루트보다 클 경우
                        this.swap(leftChildIdx, idx)
                        idx = leftChildIdx
                    } else if(this.heap[rightChildIdx] > this.heap[idx]) { // 오른쪽 자식
                        this.swap(rightChildIdx, idx)
                        idx = rightChildIdx
                    } else { // 둘다 작을경우 안바꿈
                        break
                    }
                }
            }
            return value
        }
    
        print() {
        }
    
    }

    let answer = new MaxHeap()

    for(let i of nums){
        answer.push(i)
    }
    // console.log(answer.heap)
    for(let i=1;i<k;i++){
        answer.pop()
        // console.log(answer.heap)
    }
    return answer.pop()
}

console.log(solution( nums = [3,2,1,5,6,4], k = 2))
console.log(solution( nums = [3,2,3,1,2,4,5,5,6], k = 4))