class Solution:
    def __init___(self, l1, l2):
        self.l1 = l1
        self.l2 = l2
    def rev(val):
        l1, l2 = val.l1[::-1], val.l2[::-1]    
        arr = ['', '']
        
        for x in l1:
            arr[0] += str(x)
            v1 = int(arr[0])
        for y in l2:
            arr[1] += str(y)
            v2 = int(arr[1])
        # work only one value. for this, we use sequencials alphabet letters.
        a = v1 + v2
        b = str(a)
        c = b[::-1]
        d = list(map(int, c))

        return d

res = Solution([2,4,3], [5,6,4])
res.rev()